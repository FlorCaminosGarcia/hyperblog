const esbuild = require('esbuild');
const path = require('path');
const fs = require('fs').promises;

const production = process.argv.includes('--production');
const watch = process.argv.includes('--watch');

const vscodeStubPlugin = {
    name: 'vscode-stub',
    setup(build) {
        build.onResolve({ filter: /^vscode$/ }, (_args) => ({
            path: path.resolve(__dirname, 'scripts', 'vscode-stub.js')
        }));
    }
};

async function main() {
    const evalCtx = await esbuild.context({
        entryPoints: ['scripts/eval.ts'],
        bundle: true,
        format: 'cjs',
        minify: production,
        //  minifyIdentifiers: production ? false : undefined,
        sourcemap: false,
        sourcesContent: false,
        platform: 'node',
        outfile: 'dist/eval.js',
        logLevel: 'warning',
        treeShaking: true,
        keepNames: true,
        plugins: [
            /* add to the end of plugins array */
            esbuildProblemMatcherPlugin,
            vscodeStubPlugin
        ]
    });

    if (watch) {
        await evalCtx.watch();
    } else {
        await evalCtx.rebuild();
        await evalCtx.dispose();
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

main().catch((e) => {
    console.error(e);
    process.exit(1);
});
