const esbuild = require('esbuild');
const path = require('path');
const fs = require('fs').promises;
const { spawnSync } = require('child_process');

const production = process.argv.includes('--production');
const watch = process.argv.includes('--watch');

async function main() {
    const ctx = await esbuild.context({
        entryPoints: ['src/mcp/index.ts'],
        bundle: true,
        format: 'cjs',
        treeShaking: true,
        minify: production,
        sourcemap: false,
        sourcesContent: false,
        platform: 'node',
        outfile: 'dist/mcp.js',
        logLevel: 'warning',
        plugins: [
            /* add to the end of plugins array */
            esbuildProblemMatcherPlugin,
            copyWasmPlugin,
            postBuildMcpPlugin
        ]
    });
    if (watch) {
        await ctx.watch();
    } else {
        await ctx.rebuild();
        await ctx.dispose();
    }
}

/**
 * @type {import('esbuild').Plugin}
 */
const esbuildProblemMatcherPlugin = {
    name: 'esbuild-problem-matcher',

    setup(build) {
        build.onStart(() => {
            console.log('[watch] build started');
        });
        build.onEnd((result) => {
            result.errors.forEach(({ text, location }) => {
                console.error(`✘ [ERROR] ${text}`);
                if (!location) {
                    return;
                }
                console.error(`    ${location.file}:${location.line}:${location.column}:`);
            });
            console.log('[watch] build finished');
        });
    }
};

/**
 * @type {import('esbuild').Plugin}
 */
const copyWasmPlugin = {
    name: 'copy-wasm',

    setup(build) {
        build.onEnd(async (result) => {
            if (result.errors.length === 0) {
                try {
                    const srcPath = path.resolve(__dirname, 'assets/wasm/tree-sitter.wasm');
                    const destPath = path.resolve(__dirname, 'dist/tree-sitter.wasm');

                    await fs.copyFile(srcPath, destPath);
                    console.log('[copy-wasm] copy tree-sitter.wasm to dist/ successfully');
                } catch (error) {
                    console.error('[copy-wasm] copy tree-sitter.wasm to dist/ failed:', error);
                }
            }
        });
    }
};

/**
 * @type {import('esbuild').Plugin}
 */
const postBuildMcpPlugin = {
    name: 'post-build-mcp',

    setup(build) {
        const preservedPackageJsonKeys = [
            'name',
            'version',
            'dependencies',
            'devDependencies',
            'type',
            'main',
            'types'
        ];
        const cliFilename = './bin.js';
        const bundledEntrypointFilename = 'mcp.js';
        const indexdtsFilename = bundledEntrypointFilename.replace(/\.js$/, '.d.ts');

        async function overridePackageJson(packageJsonPath) {
            try {
                const packageJsonContent = await fs.readFile(packageJsonPath, 'utf-8');
                const packageJson = JSON.parse(packageJsonContent);

                for (const key of Object.keys(packageJson)) {
                    if (!preservedPackageJsonKeys.includes(key)) {
                        delete packageJson[key];
                    }
                }

                const packageName = packageJson.name + '-mcp';
                packageJson.name = packageName;
                delete packageJson.main;
                packageJson.exports = `./${bundledEntrypointFilename}`;
                packageJson.bin = {
                    [packageName]: cliFilename
                };
                packageJson.types = indexdtsFilename;

                await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
                console.log('[post-build-mcp] package.json updated successfully');
            } catch (error) {
                console.error('[post-build-mcp] Failed to update package.json:', error);
                throw error;
            }
        }

        function createDts() {
            try {
                const result = spawnSync(
                    'npx',
                    ['dts-bundle-generator', 'src/mcp/index.ts', '-o', path.join('dist', indexdtsFilename)],
                    {
                        shell: true
                    }
                );
                if (result.status !== 0) {
                    throw new Error(`Failed to generate dts: ${result.stderr}`);
                }
                if (result.error) {
                    throw new Error(`Failed to generate dts: ${result.error}`);
                }
                console.log('[post-build-mcp] TypeScript declarations generated successfully');
            } catch (error) {
                console.error('[post-build-mcp] Failed to generate dts:', error);
                throw error;
            }
        }

        build.onEnd(async (result) => {
            if (result.errors.length === 0) {
                try {
                    const currDir = __dirname;
                    const distDir = path.join(currDir, 'dist');
                    const mcpDistFile = path.join(distDir, 'mcp.js');

                    // Check if MCP dist file exists
                    try {
                        await fs.access(mcpDistFile);
                    } catch {
                        throw new Error(`MCP dist file ${mcpDistFile} does not exist.`);
                    }

                    // Copy and override package.json
                    await fs.copyFile(path.join(currDir, 'package.json'), path.join(distDir, 'package.json'));
                    await overridePackageJson(path.join(distDir, 'package.json'));

                    // Create TypeScript declarations
                    createDts();

                    // Copy CLI file
                    await fs.copyFile(path.join(currDir, 'src/mcp/bin.js'), path.join(distDir, cliFilename));

                    console.log('[post-build-mcp] Post-build tasks completed successfully');
                } catch (error) {
                    console.error('[post-build-mcp] Post-build tasks failed:', error);
                    // Don't fail the build, just log the error
                }
            }
        });
    }
};

main().catch((e) => {
    console.error(e);
    process.exit(1);
});
