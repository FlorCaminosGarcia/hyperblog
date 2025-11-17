/**
 * Connect model with mcp tools in Node.js
 * 
 * npm install mcp @azure-rest/ai-inference @azure/core-auth
 * node <this-script-path>.js
 */
const { spawn } = require('child_process');
const { Client } = require('@modelcontextprotocol/sdk/client/index.js');
const { StdioClientTransport } = require('@modelcontextprotocol/sdk/client/stdio.js');
const { SSEClientTransport } = require('@modelcontextprotocol/sdk/client/sse.js');
const { StreamableHTTPClientTransport } = require('@modelcontextprotocol/sdk/client/streamableHttp.js');
{{#hasImage}}
const fs = require('fs');
{{/hasImage}}
const createClient = require('@azure-rest/ai-inference').default;
const { AzureKeyCredential } = require('@azure/core-auth');

{{#hasImage}}
function encodeImage(path, mimeType) {
    const imageBuffer = fs.readFileSync(path);
    const base64String = imageBuffer.toString('base64');
    return `data:${mimeType};base64,${base64String}`;
}

{{/hasImage}}
class MCPClient {
    constructor() {
        this.servers = new Map();
        this.toolToServerMap = new Map();
        // To authenticate with the model you will need to generate a github gho token in your GitHub settings.
        // Create your github gho token by following instructions here: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens
        this.azureai = createClient(
            "https://models.github.ai/inference",
            new AzureKeyCredential(process.env.GITHUB_TOKEN),
            {
{{#o1}}
                apiVersion: "2024-12-01-preview"
{{/o1}}
{{#api_version}}
                apiVersion: "{{api_version}}"
{{/api_version}}
            }
        );
    }

    async connectStdioServer(serverId, command, args, env = {}) {
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
            env: { ...process.env, ...env }
        });
        
        const client = new Client({
            name: "azure-ai-client",
            version: "1.0.0"
        }, {
            capabilities: {}
        });
        
        await client.connect(transport);
        await this.registerServer(serverId, client);
    }
    
    async connectSseServer(serverId, url, headers = {}) {
        /**
         * Connect to an MCP server using SSE transport
         * 
         * @param {string} serverId - Unique identifier for this server connection
         * @param {string} url - URL of the SSE server
         * @param {Object} headers - Optional HTTP headers
         */
        const transport = new SSEClientTransport(new URL(url), { headers });
        
        const client = new Client({
            name: "azure-ai-client",
            version: "1.0.0"
        }, {
            capabilities: {}
        });
        
        await client.connect(transport);
        await this.registerServer(serverId, client);
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
                name: "azure-ai-client",
                version: "1.0.0",
            },
            {
                capabilities: {
                    tools: {},
                },
            }
        );

        await client.connect(transport);
        await this.registerServer(serverId, client);
    }
    
    async registerServer(serverId, client) {
        /**
         * Register a server and its tools in the client
         * 
         * @param {string} serverId - Unique identifier for this server
         * @param {Client} client - Connected Client instance
         */
        const response = await client.listTools();
        const tools = response.tools;
        
        this.servers.set(serverId, {
            client: client,
            tools: tools
        });
        
        // Update tool-to-server mapping
        for (const tool of tools) {
            this.toolToServerMap.set(tool.name, serverId);
        }
        
        console.log(`\nConnected to server '${serverId}' with tools:`, tools.map(tool => tool.name));
    }

    async chatWithTools(messages) {
        /**
         * Chat with model and using tools
         * @param {Array} messages - Messages to send to the model
         */
        if (this.servers.size === 0) {
            throw new Error("No MCP servers connected. Connect to at least one server first.");
        }

        // Collect tools from all connected servers
        const availableTools = [];
        for (const [serverId, serverInfo] of this.servers) {
            for (const tool of serverInfo.tools) {
                availableTools.push({
                    type: "function",
                    function: {
                        name: tool.name,
                        description: tool.description,
                        parameters: tool.inputSchema
                    }
                });
            }
        }

        while (true) {
            // Call model
            const response = await this.azureai.path("/chat/completions").post({
                body: {
                    messages: messages,
                    model: "{{{model}}}",
                    tools: availableTools,
{{#response_format_text}}
                    response_format: { type: "text" },
{{/response_format_text}}
{{#response_format_json_schema}}
                    response_format: {
                        type: "json_schema",
                        json_schema: {
                            name: "{{response_format_json_schema.name}}",
                            description: "{{response_format_json_schema.description}}",
                            strict: {{{response_format_json_schema.strict}}},
                            schema: {{{response_format_json_schema.schema}}}
                        }
                    },
{{/response_format_json_schema}}
{{#parameters.max_tokens}}
{{#o1}}
                    max_completion_tokens: {{parameters.max_tokens}},
{{/o1}}
{{^o1}}
                    max_tokens: {{parameters.max_tokens}},
{{/o1}}
{{/parameters.max_tokens}}
{{#parameters.temperature}}
                    temperature: {{.}},
{{/parameters.temperature}}
{{#parameters.top_p}}
                    top_p: {{.}},
{{/parameters.top_p}}
{{#parameters.frequency_penalty}}
                    frequency_penalty: {{.}},
{{/parameters.frequency_penalty}}
{{#parameters.presence_penalty}}
                    presence_penalty: {{.}},
{{/parameters.presence_penalty}}
                }
            });

            if (response.status !== "200") {
                throw new Error(`Request failed with status ${response.status}`);
            }

            const result = response.body;
            let hasToolCall = false;

            if (result.choices[0].message.tool_calls) {
                for (const tool of result.choices[0].message.tool_calls) {
                    hasToolCall = true;
                    const toolName = tool.function.name;
                    const toolArgs = JSON.parse(tool.function.arguments);
                    
                    messages.push({
                        role: "assistant",
                        tool_calls: [{
                            id: tool.id,
                            type: "function",
                            function: {
                                name: tool.function.name,
                                arguments: tool.function.arguments
                            }
                        }]
                    });

                    // Find the appropriate server for this tool
                    if (this.toolToServerMap.has(toolName)) {
                        const serverId = this.toolToServerMap.get(toolName);
                        const serverClient = this.servers.get(serverId).client;
                        
                        // Execute tool call on the appropriate server
                        const callResult = await serverClient.callTool({
                            name: toolName,
                            arguments: toolArgs
                        });
                        
                        console.log(`[Server '${serverId}' call tool '${toolName}' with args ${JSON.stringify(toolArgs)}]: ${JSON.stringify(callResult.content)}`);

                        messages.push({
                            role: "tool",
                            tool_call_id: tool.id,
                            content: JSON.stringify(callResult.content)
                        });
                    }
                }
            } else {
                messages.push({
                    role: "assistant",
                    content: result.choices[0].message.content
                });
                console.log(`[Model Response]: ${result.choices[0].message.content}`);
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
        for (const [serverId, serverInfo] of this.servers) {
            await serverInfo.client.close();
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

async function main() {
    const client = new MCPClient();
    const messages = [
{{#parameters.systemWithQuote}}
{{#o1}}
        { role: "developer", content: {{{parameters.systemWithQuote}}} },
{{/o1}}
{{^o1}}
        { role: "system", content: {{{parameters.systemWithQuote}}} },
{{/o1}}
{{/parameters.systemWithQuote}}
{{#messages}}
{{#isUser}}
        {
            role: "user",
            content: [
{{#content}}
{{#isText}}
                { type: "text", text: {{{textWithQuote}}} },
{{/isText}}
{{#isImage}}
                { 
                    type: "image_url", 
                    image_url: { url: encodeImage({{{localPathWithQuote}}}, "{{{mimeType}}}") } 
                },
{{/isImage}}
{{/content}}
            ]
        },
{{/isUser}}
{{#isAssistant}}
        {
            role: "assistant",
{{^tool_calls}}
            content: {{{textWithQuote}}}
{{/tool_calls}}
{{#tool_calls}}
            tool_calls: [
                {
                    id: "{{{id}}}",
                    type: "function",
                    function: {
                        name: "{{{function.name}}}",
                        arguments: {{{function.arguments}}}
                    }
                }
            ]
{{/tool_calls}}
        },
{{/isAssistant}}
{{#isTool}}
        {
            role: "tool",
{{#content}}
            content: {{{textWithQuote}}},
            tool_call_id: "{{{tool_call_id}}}"
{{/content}}
        },
{{/isTool}}
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

main().catch(console.error); 