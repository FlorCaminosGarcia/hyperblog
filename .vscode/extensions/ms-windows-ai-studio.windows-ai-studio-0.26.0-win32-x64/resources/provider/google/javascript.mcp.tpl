/**
 * Connect model with mcp tools in Node.js
 * 
 * npm install @google/generative-ai @modelcontextprotocol/sdk
 * node <this-script-path>.js
 */

const { GoogleGenerativeAI } = require('@google/generative-ai');
const { GoogleAIFileManager } = require('@google/generative-ai/server');
const { Client } = require('@modelcontextprotocol/sdk/client/index.js');
const { StdioClientTransport } = require('@modelcontextprotocol/sdk/client/stdio.js');
const { SSEClientTransport } = require('@modelcontextprotocol/sdk/client/sse.js');
const { StreamableHTTPClientTransport } = require('@modelcontextprotocol/sdk/client/streamableHttp.js');
const path = require('path');
{{#files.0}}
const { promisify } = require('util');
const sleep = promisify(setTimeout);
{{/files.0}}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
{{#files.0}}
const fileManager = new GoogleAIFileManager(process.env.GEMINI_API_KEY);
{{/files.0}}

const generationConfig = {
{{#parameters.temperature}}
    temperature: {{.}},
{{/parameters.temperature}}
{{#parameters.top_p}}
    topP: {{.}},
{{/parameters.top_p}}
{{#parameters.max_tokens}}
    maxOutputTokens: {{.}},
{{/parameters.max_tokens}}
{{#parameters.presence_penalty}}
    presencePenalty: {{.}},
{{/parameters.presence_penalty}}
{{#parameters.frequency_penalty}}
    frequencyPenalty: {{.}},
{{/parameters.frequency_penalty}}
    responseMimeType: "{{{parameters.response_mime_type}}}",
{{#parameters.response_schema}}
    responseSchema: {{{.}}},
{{/parameters.response_schema}}
};

function transformSchema(schema) {
    /**
     * Transform the schema by removing unsupported keys and values.
     * @param {Object} schema - The schema to transform.
     */
    if (typeof schema !== 'object' || schema === null) {
        throw new Error("Schema must be an object");
    }
    
    const transformedSchema = {};
    const supportedKeys = [
        "type",
        "properties", 
        "items",
        "required",
        "enum",
        "description",
        "max_items",
        "min_items",
        "nullable"
    ];

    for (const [key, value] of Object.entries(schema)) {
        if (!supportedKeys.includes(key)) {
            continue;
        }
        
        if (key === "properties") {
            transformedSchema[key] = {};
            for (const [propKey, propValue] of Object.entries(value)) {
                transformedSchema[key][propKey] = transformSchema(propValue);
            }
        } else if (key === "items") {
            transformedSchema[key] = transformSchema(value);
        } else {
            transformedSchema[key] = value;
        }
    }
    
    return transformedSchema;
}

{{#files.0}}
async function uploadToGemini(filePath, mimeType) {
    /**
     * Uploads the given file to Gemini.
     * 
     * See https://ai.google.dev/gemini-api/docs/prompting_with_media
     */
    const uploadResult = await fileManager.uploadFile(filePath, {
        mimeType: mimeType,
        displayName: path.basename(filePath),
    });
    const file = uploadResult.file;
    console.log(`Uploaded file '${file.displayName}' as: ${file.uri}`);
    return file;
}

async function waitForFilesActive(files) {
    /**
     * Waits for the given files to be active.
     *
     * Some files uploaded to the Gemini API need to be processed before they can be
     * used as prompt inputs. The status can be seen by querying the file's "state"
     * field.
     *
     * This implementation uses a simple blocking polling loop. Production code
     * should probably employ a more sophisticated approach.
     */
    console.log("Waiting for file processing...");
    for (const file of files) {
        let fileObject = await fileManager.getFile(file.name);
        while (fileObject.state === "PROCESSING") {
            process.stdout.write(".");
            await sleep(10000);
            fileObject = await fileManager.getFile(file.name);
        }
        if (fileObject.state !== "ACTIVE") {
            throw new Error(`File ${file.name} failed to process`);
        }
    }
    console.log("...all files ready");
    console.log();
}
{{/files.0}}
class MCPClient {
    constructor() {
        // Initialize session and client objects
        this._servers = {};
        this._toolToServerMap = {};
        this._clients = [];
        this.gemini = genAI.getGenerativeModel({
            model: {{{model}}},
            generationConfig: generationConfig,
{{#parameters.system_prompt}}
            systemInstruction: {{{.}}},
{{/parameters.system_prompt}}
        });
    }

    async connectStdioServer(serverId, command, args, env) {
        /**
         * Connect to an MCP server using STDIO transport
         * 
         * @param {string} serverId - Unique identifier for this server connection
         * @param {string} command - Command to run the MCP server
         * @param {string[]} args - Arguments for the command
         * @param {Object} env - Optional environment variables
         */
        const transport = new StdioClientTransport({
            command: command,
            args: args,
            env: env
        });

        const client = new Client({
            name: "google-mcp-client",
            version: "1.0.0"
        }, {
            capabilities: {}
        });

        await client.connect(transport);
        this._clients.push(client);
        
        // Register the server
        await this._registerServer(serverId, client);
    }

    async connectSseServer(serverId, url, headers) {
        /**
         * Connect to an MCP server using SSE transport
         * 
         * @param {string} serverId - Unique identifier for this server connection
         * @param {string} url - URL of the SSE server
         * @param {Object} headers - Optional HTTP headers
         */
        const transport = new SSEClientTransport(new URL(url), headers);

        const client = new Client({
            name: "google-mcp-client", 
            version: "1.0.0"
        }, {
            capabilities: {}
        });

        await client.connect(transport);
        this._clients.push(client);
        
        // Register the server
        await this._registerServer(serverId, client);
    }

    async connectHttpServer(serverId, url, headers) {
        /**
         * Connect to an MCP server using HTTP transport
         * 
         * @param {string} serverId - Unique identifier for this server connection
         * @param {string} url - URL of the HTTP server
         * @param {Object} headers - Optional HTTP headers
         */
        const transport = new StreamableHTTPClientTransport(new URL(url), {
            headers: headers || {}
        });

        const client = new Client({
            name: "google-mcp-client", 
            version: "1.0.0"
        }, {
            capabilities: {}
        });

        await client.connect(transport);
        this._clients.push(client);
        
        // Register the server
        await this._registerServer(serverId, client);
    }

    async _registerServer(serverId, client) {
        /**
         * Register a server and its tools in the client
         * 
         * @param {string} serverId - Unique identifier for this server
         * @param {Client} client - Connected MCP client
         */
        // List available tools
        const response = await client.listTools();
        const tools = response.tools;

        // Store server connection info
        this._servers[serverId] = {
            client: client,
            tools: tools
        };

        // Update tool-to-server mapping
        for (const tool of tools) {
            this._toolToServerMap[tool.name] = serverId;
        }

        console.log(`\nConnected to server '${serverId}' with tools:`, tools.map(tool => tool.name));
    }

    async chatWithTools(messages) {
        /**
         * Chat with model and using tools
         * @param {Array} messages - Messages to send to the model
         */
        if (Object.keys(this._servers).length === 0) {
            throw new Error("No MCP servers connected. Connect to at least one server first.");
        }

        // Collect tools from all connected servers
        const availableTools = [];
        for (const [serverId, serverInfo] of Object.entries(this._servers)) {
            for (const tool of serverInfo.tools) {
                availableTools.push({
                    name: tool.name,
                    description: tool.description,
                    parameters: transformSchema(tool.inputSchema)
                });
            }
        }

        while (true) {
            // Call model
            const result = await this.gemini.generateContent({
                contents: messages,
                tools: [{
                    functionDeclarations: availableTools
                }]
            });

            const response = await result.response;
            let hasToolCall = false;

            for (const part of response.candidates[0].content.parts) {
                messages.push({ role: "model", parts: [part] });
                
                if (part.text) {
                    console.log(`[Model Response]: ${part.text}`);
                } else if (part.functionCall) {
                    hasToolCall = true;
                    const toolName = part.functionCall.name;
                    const toolArgs = part.functionCall.args;

                    // Find the appropriate server for this tool
                    if (toolName in this._toolToServerMap) {
                        const serverId = this._toolToServerMap[toolName];
                        const serverClient = this._servers[serverId].client;

                        // Execute tool call on the appropriate server
                        const toolResult = await serverClient.callTool({
                            name: toolName,
                            arguments: toolArgs
                        });
                        console.log(`[Server '${serverId}' call tool '${toolName}' with args ${JSON.stringify(toolArgs)}]: ${JSON.stringify(toolResult.content)}`);

                        messages.push({
                            role: "user",
                            parts: [{
                                functionResponse: {
                                    name: part.functionCall.name,
                                    response: { result: toolResult.content[0].text }
                                }
                            }]
                        });
                    }
                }
            }

            if (!hasToolCall) {
                break;
            }
        }
    }

    async cleanup() {
        /**
         * Clean up resources
         */
        for (const client of this._clients) {
            try {
                await client.close();
            } catch (error) {
                console.error('Error closing client:', error);
            }
        }
        // Small delay to ensure cleanup
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

async function main() {
{{#files.0}}
    // TODO Make these files available on the local file system
    // You may need to update the file paths
    const files = [
{{#files}}
        await uploadToGemini({{{localPath}}}, {{{mimeType}}}),
{{/files}}
    ];
    // Some files have a processing delay. Wait for them to be ready.
    await waitForFilesActive(files);
{{/files.0}}
    const client = new MCPClient();
    const messages = [
{{#allMessages}}
        {
            role: {{{role}}},
            parts: [
{{#content}}
{{#isFile}}
                {
                    fileData: {
                        mimeType: files[{{{fileIndex}}}].mimeType,
                        fileUri: files[{{{fileIndex}}}].uri
                    }
                },
{{/isFile}}
{{#isText}}
                { text: {{{textWithQuote}}} },
{{/isText}}
{{#isToolUse}}
                {
                    functionCall: {
                        name: "{{{functionCall.name}}}",
                        args: {{{functionCall.args}}}
                    }
                },
{{/isToolUse}}
{{#isToolResult}}
                {
                    functionResponse: {
                        name: "{{{functionResponse.name}}}",
                        response: {{{functionResponse.response}}}
                    }
                },
{{/isToolResult}}
{{/content}}
            ]
        },
{{/allMessages}}
    ];

    try {
{{#mcpConfigs}}
{{#isStdio}}
        await client.connectStdioServer(
            "{{{serverName}}}",
            {{{commandWithQuote}}},
            [
{{#argsWithQuote}}
                {{{.}}},
{{/argsWithQuote}}
            ],
            {
{{#env}}
                "{{.}}": process.env["{{.}}"],
{{/env}}
            }
        );
{{/isStdio}}
{{#isSse}}
        await client.connectSseServer(
            "{{{serverName}}}",
            {{{urlWithQuote}}},
            {
{{#headers}}
{{#isAuthorization}}
                "{{key}}": "Bearer " + process.env["YOUR_AUTH_TOKEN"],
{{/isAuthorization}}
{{^isAuthorization}}
                "{{key}}": "{{value}}",
{{/isAuthorization}}
{{/headers}}
            }
        );
{{/isSse}}
{{#isHttp}}
        await client.connectHttpServer(
            "{{{serverName}}}", 
            {{{urlWithQuote}}},
            {
{{#headers}}
{{#isAuthorization}}
                "{{key}}": "Bearer " + process.env["YOUR_AUTH_TOKEN"],
{{/isAuthorization}}
{{^isAuthorization}}
                "{{key}}": "{{value}}",
{{/isAuthorization}}
{{/headers}}
            }
        );
{{/isHttp}}
{{/mcpConfigs}}
        await client.chatWithTools(messages);
    } catch (error) {
        console.error(`\nError: ${error.message}`);
    } finally {
        await client.cleanup();
    }
}

if (require.main === module) {
    main().catch(console.error);
} 