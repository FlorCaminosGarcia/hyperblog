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
const { AzureOpenAI } = require('openai');
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
        this.openai = new AzureOpenAI({
            apiKey: process.env.AZURE_AI_API_KEY,
            endpoint: "{{{endpoint}}}",
            apiVersion: "{{{api_version}}}",
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
            env: { ...process.env, ...env }
        });
        
        const client = new Client(
            {
                name: "mcp-openai-client",
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
                name: "mcp-openai-client",
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
                name: "mcp-openai-client",
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
                    name: tool.name,
                    description: tool.description,
                    parameters: tool.inputSchema
                });
            }
        }

{{#response_format}}
        const text = {{{response_format}}};

{{/response_format}}
        while (true) {
            // Call model
            const response = await this.openai.responses.create({
{{#parameters.systemWithQuote}}
                instructions: {{{parameters.systemWithQuote}}},
{{/parameters.systemWithQuote}}
                input: messages,
                model: "{{{model}}}",
                tools: availableTools,
{{#response_format}}
                text: text,
{{/response_format}}
{{#parameters.max_tokens}}
                max_output_tokens: {{parameters.max_tokens}},
{{/parameters.max_tokens}}
{{#parameters.temperature}}
                temperature: {{.}},
{{/parameters.temperature}}
{{#parameters.top_p}}
                top_p: {{.}},
{{/parameters.top_p}}
                reasoning: {
{{#parameters.reasoning_effort}}
                    effort: "{{.}}",
{{/parameters.reasoning_effort}}
{{#parameters.reasoning_summary}}
                    summary: "{{.}}",
{{/parameters.reasoning_summary}}
                },
            });

            let hasToolCall = false;

            if (response.output[0].type === "function_call") {
                hasToolCall = true;
                const tool = response.output[0];
                const toolName = tool.name;
                const toolArgs = JSON.parse(tool.arguments);
                messages.push(tool);
            
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
                        type: "function_call_output",
                        call_id: tool.call_id,
                        output: result.content[0].text
                    });
                }
            } else {
                messages.push({
                    role: "assistant",
                    content: response.output_text
                });
                console.log(`[Model Response]: ${response.output_text}`);
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
{{#messages}}
{{#isContent}}
        {
            role: "{{role}}",
            content: [
{{#content}}
{{#isText}}
                {
{{#isUser}}
                    type: "input_text",
{{/isUser}}
{{#isAssistant}}
                    type: "output_text",
{{/isAssistant}}
                    text: {{{textWithQuote}}}
                },
{{/isText}}
{{#isImage}}
                {
                    type: "input_image",
                    detail: "auto",
                    image_url: encodeImage({{{localPathWithQuote}}}, "{{{mimeType}}}")
                },
{{/isImage}}
{{/content}}
            ]
        },
{{/isContent}}
{{^isContent}}
        {
{{#tool_calls}}
            type: "function_call",
            call_id: "{{{id}}}",
            name: "{{{function.name}}}",
            arguments: {{{function.arguments}}}
{{/tool_calls}}
{{#isTool}}
            type: "function_call_output",
            call_id: "{{{tool_call_id}}}",
            output: {{{output}}}
{{/isTool}}
        },
{{/isContent}}
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