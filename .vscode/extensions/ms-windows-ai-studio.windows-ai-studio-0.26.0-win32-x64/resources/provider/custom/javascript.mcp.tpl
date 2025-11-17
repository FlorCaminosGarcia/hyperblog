/**
 * Connect model with mcp tools in Node.js
 * # Run this script
 * npm install @modelcontextprotocol/sdk openai
 * node <this-script-path>.js
 */
const { Client } = require('@modelcontextprotocol/sdk/client/index.js');
const { StdioClientTransport } = require('@modelcontextprotocol/sdk/client/stdio.js');
const { SSEClientTransport } = require('@modelcontextprotocol/sdk/client/sse.js');
const { StreamableHTTPClientTransport } = require('@modelcontextprotocol/sdk/client/streamableHttp.js');
{{#isAzureOpenAI}}
const { AzureOpenAI } = require('openai');
{{/isAzureOpenAI}}
{{^isAzureOpenAI}}
const OpenAI = require('openai');
{{/isAzureOpenAI}}
{{#hasImage}}
const fs = require('fs');
{{/hasImage}}

{{#hasImage}}
function encodeImage(path, mimeType) {
    const imageBuffer = fs.readFileSync(path);
    const base64String = imageBuffer.toString('base64');
    return `data:${mimeType};base64,${base64String}`;
}

{{/hasImage}}
class MCPClient {
    constructor() {
        // Initialize session and client objects
        this._servers = {};
        this._toolToServerMap = {};
        this.clients = [];
{{#isAzureOpenAI}}
        this.openai = new AzureOpenAI({
            endpoint: "{{{baseURL}}}",
            apiKey: process.env.CUSTOM_OPENAI_API_KEY,
            apiVersion: "2024-12-01-preview"
        });
{{/isAzureOpenAI}}
{{^isAzureOpenAI}}
        this.openai = new OpenAI({
            baseURL: "{{{baseURL}}}",
            apiKey: process.env.CUSTOM_OPENAI_API_KEY
        });
{{/isAzureOpenAI}}
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
            env: { ...process.env, ...env }
        });
        
        const client = new Client(
            {
                name: "mcp-custom-client",
                version: "1.0.0",
            },
            {
                capabilities: {
                    tools: {},
                },
            }
        );

        await client.connect(transport);
        this.clients.push(client);
        
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
        const transport = new SSEClientTransport(new URL(url), {
            headers: headers || {}
        });
        
        const client = new Client(
            {
                name: "mcp-custom-client",
                version: "1.0.0",
            },
            {
                capabilities: {
                    tools: {},
                },
            }
        );

        await client.connect(transport);
        this.clients.push(client);
        
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
                name: "mcp-custom-client",
                version: "1.0.0",
            },
            {
                capabilities: {
                    tools: {},
                },
            }
        );

        await client.connect(transport);
        this.clients.push(client);
        
        // Register the server
        await this._registerServer(serverId, client);
    }
    
    async _registerServer(serverId, client) {
        /**
         * Register a server and its tools in the client
         * 
         * @param {string} serverId - Unique identifier for this server
         * @param {Client} client - Connected Client
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
                    type: "function",
                    function: {
                        name: tool.name,
                        description: tool.description,
                        parameters: tool.inputSchema
                    },
                });
            }
        }

{{#response_format}}
        const responseFormat = {{{response_format}}};

{{/response_format}}
        while (true) {
            // Call model
            const response = await this.openai.chat.completions.create({
                messages: messages,
                model: "{{{model}}}",
                tools: availableTools,
{{#response_format}}
                response_format: responseFormat,
{{/response_format}}
{{#parameters.max_tokens}}
                max_tokens: {{parameters.max_tokens}},
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
{{#parameters.reasoning_effort}}
                reasoning_effort: "{{.}}",
{{/parameters.reasoning_effort}}
{{#parameters.verbosity}}
                verbosity: "{{.}}",
{{/parameters.verbosity}}
{{#extraQuery}}
                extra_query: {{{extraQuery}}},
{{/extraQuery}}
            });

            let hasToolCall = false;

            if (response.choices[0].message.tool_calls) {
                for (const tool of response.choices[0].message.tool_calls) {
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
                                arguments: tool.function.arguments,
                            }
                        }]
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
                        
                        console.log(`[Server '${serverId}' call tool '${toolName}' with args ${JSON.stringify(toolArgs)}]:`, result.content);

                        messages.push({
                            role: "tool",
                            tool_call_id: tool.id,
                            content: JSON.stringify(result.content),
                        });
                    }
                }
            } else {
                messages.push({
                    role: "assistant",
                    content: response.choices[0].message.content
                });
                console.log(`[Model Response]: ${response.choices[0].message.content}`);
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
        for (const client of this.clients) {
            await client.close();
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

async function main() {
    const client = new MCPClient();
    const messages = [
{{#parameters.systemWithQuote}}
        {
            role: "system",
            content: {{{parameters.systemWithQuote}}}
        },
{{/parameters.systemWithQuote}}
{{#messages}}
        {
            role: "{{role}}",
            content: [
{{#content}}
{{#isText}}
                {
                    type: "text",
                    text: {{{textWithQuote}}}
                },
{{/isText}}
{{#isImage}}
                {
                    type: "image_url",
                    image_url: { url: encodeImage({{{localPathWithQuote}}}, "{{{mimeType}}}") }
                },
{{/isImage}}
{{/content}}
            ],
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
            ],
{{/tool_calls}}
{{#isTool}}
            tool_call_id: "{{{tool_call_id}}}",
{{/isTool}}
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

main().catch(console.error); 