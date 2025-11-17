/**
 * Connect model with mcp tools in Node.js
 * 
 * npm install @anthropic-ai/sdk @modelcontextprotocol/sdk
 * node <this-script-path>.js
 */

const Anthropic = require('@anthropic-ai/sdk');
const { Client } = require('@modelcontextprotocol/sdk/client/index.js');
const { StdioClientTransport } = require('@modelcontextprotocol/sdk/client/stdio.js');
const { SSEClientTransport } = require('@modelcontextprotocol/sdk/client/sse.js');
const { StreamableHTTPClientTransport } = require('@modelcontextprotocol/sdk/client/streamableHttp.js');
{{#hasImage}}
const fs = require('fs');
{{/hasImage}}

{{#hasImage}}
function encodeImage(path) {
    const imageData = fs.readFileSync(path);
    return imageData.toString('base64');
}

{{/hasImage}}
class MCPClient {
    constructor() {
        // Initialize session and client objects
        this._servers = {};
        this._toolToServerMap = {};
        this._clients = [];
        this.anthropic = new Anthropic({
            apiKey: process.env.ANTHROPIC_API_KEY,
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
            name: "anthropic-mcp-client",
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
            name: "anthropic-mcp-client",
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
        
        const client = new Client(
            {
                name: "anthropic-mcp-client",
                version: "1.0.0",
            },
            {
                capabilities: {
                    tools: {},
                },
            }
        );

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
         * @param {Array} messages - List of messages for the chat
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
                    input_schema: tool.inputSchema
                });
            }
        }

        while (true) {
            // Call model
            const response = await this.anthropic.messages.create({
                model: "{{{model}}}",
{{#parameters.max_tokens}}
                max_tokens: {{.}},
{{/parameters.max_tokens}}
{{#parameters.temperature}}
                temperature: {{.}},
{{/parameters.temperature}}
{{#parameters.top_p}}
                top_p: {{.}},
{{/parameters.top_p}}
{{#parameters.systemWithQuote}}
                system: {{{.}}},
{{/parameters.systemWithQuote}}
{{#parameters.think_mode}}
                thinking: {
                    type: "enabled",
                    budget_tokens: {{parameters.budget_tokens}}
                },
{{/parameters.think_mode}}
                messages: messages,
                tools: availableTools,
            });

            let hasToolCall = false;

            for (const content of response.content) {
                if (content.type === 'text') {
                    messages.push({
                        role: "assistant",
                        content: content.text
                    });
                    console.log(`[Model Response]: ${content.text}`);
                } else if (content.type === 'tool_use') {
                    hasToolCall = true;
                    const toolName = content.name;
                    const toolArgs = content.input;
                    messages.push({
                        role: "assistant",
                        content: [
                            {
                                type: "tool_use",
                                id: content.id,
                                name: toolName,
                                input: toolArgs,
                            }
                        ]
                    });

                    // Find the appropriate server for this tool
                    if (toolName in this._toolToServerMap) {
                        const serverId = this._toolToServerMap[toolName];
                        const serverClient = this._servers[serverId].client;

                        // Execute tool call on the appropriate server
                        const result = await serverClient.callTool({
                            name: toolName,
                            arguments: toolArgs
                        });
                        console.log(`[Server '${serverId}' call tool '${toolName}' with args ${JSON.stringify(toolArgs)}]: ${JSON.stringify(result.content)}`);

                        // Add tool results back to messages
                        if (content.text) {
                            messages.push({
                                role: "assistant",
                                content: content.text
                            });
                        }

                        const contentList = [];
                        for (const item of result.content) {
                            if (item.type === "image") {
                                contentList.push({
                                    type: "image",
                                    source: {
                                        type: "base64",
                                        media_type: item.mimeType,
                                        data: item.data,
                                    }
                                });
                            } else if (item.type === "text") {
                                contentList.push({
                                    type: "text",
                                    text: item.text
                                });
                            }
                        }

                        messages.push({
                            role: "user",
                            content: [
                                {
                                    type: "tool_result",
                                    tool_use_id: content.id,
                                    content: contentList,
                                }
                            ]
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
    const client = new MCPClient();
    const messages = [
{{#messages}}
        {
            role: "{{role}}",
            content: [
{{#content}}
                {
{{#isText}}
                    type: "text",
                    text: {{{textWithQuote}}},
{{/isText}}
{{#isImage}}
                    type: "image",
                    source: {
                        type: "base64",
                        media_type: "{{{mimeType}}}",
                        data: encodeImage({{{localPathWithQuote}}}),
                    },
{{/isImage}}
{{#isToolUse}}
                    type: "tool_use",
                    id: "{{{toolUseId}}}",
                    name: "{{{toolUseName}}}",
                    input: {{{toolUseInput}}},
{{/isToolUse}}
{{#isToolResult}}
                    type: "tool_result",
                    tool_use_id: "{{{toolUseId}}}",
                    content: {{{toolResultContentWithQuote}}},
{{/isToolResult}}
{{#isThinking}}
                    type: "thinking",
                    thinking: {{{thinkingWithQuote}}},
                    signature: "{{{signature}}}",
{{/isThinking}}
{{#isRedactedThinking}}
                    type: "redacted_thinking",
                    data: "{{{redactedThinking}}}",
{{/isRedactedThinking}}
                },
{{/content}}
            ],
        },
{{/messages}}
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