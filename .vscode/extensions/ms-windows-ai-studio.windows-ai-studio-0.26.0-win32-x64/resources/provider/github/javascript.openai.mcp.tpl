/**
 * Connect model with mcp tools in Node.js
 * 
 * npm install mcp openai
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
const OpenAI = require('openai');

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
        this.openai = new OpenAI({
            baseURL: "https://models.github.ai/inference",
            apiKey: process.env.GITHUB_TOKEN,
{{#api_version}}
            defaultQuery: {
                "api-version": "{{api_version}}"
            }
{{/api_version}}
        });
    }

    async connectStdioServer(serverId, command, args, env = {}) {
        const transport = new StdioClientTransport({
            command: command,
            args: args,
            env: { ...process.env, ...env }
        });
        
        const client = new Client({
            name: "openai-client",
            version: "1.0.0"
        }, {
            capabilities: {}
        });
        
        await client.connect(transport);
        await this.registerServer(serverId, client);
    }
    
    async connectSseServer(serverId, url, headers = {}) {
        const transport = new SSEClientTransport(new URL(url), { headers });
        
        const client = new Client({
            name: "openai-client",
            version: "1.0.0"
        }, {
            capabilities: {}
        });
        
        await client.connect(transport);
        await this.registerServer(serverId, client);
    }
    
    async connectHttpServer(serverId, url, headers = {}) {
        const transport = new StreamableHTTPClientTransport(new URL(url), { headers });
        
        const client = new Client({
            name: "openai-client",
            version: "1.0.0"
        }, {
            capabilities: {}
        });
        
        await client.connect(transport);
        await this.registerServer(serverId, client);
    }
    
    async registerServer(serverId, client) {
        const response = await client.listTools();
        const tools = response.tools;
        
        this.servers.set(serverId, {
            client: client,
            tools: tools
        });
        
        for (const tool of tools) {
            this.toolToServerMap.set(tool.name, serverId);
        }
        
        console.log(`\nConnected to server '${serverId}' with tools:`, tools.map(tool => tool.name));
    }

    async chatWithTools(messages) {
        if (this.servers.size === 0) {
            throw new Error("No MCP servers connected. Connect to at least one server first.");
        }

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
            const response = await this.openai.chat.completions.create({
                messages: messages,
                model: "{{{model}}}",
                tools: availableTools,
{{#response_format}}
                response_format: {{{response_format}}},
{{/response_format}}
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
{{#parameters.reasoning_effort}}
                reasoning_effort: "{{.}}",
{{/parameters.reasoning_effort}}
{{#parameters.verbosity}}
                verbosity: "{{.}}",
{{/parameters.verbosity}}
            });

            const choice = response.choices[0];
            let hasToolCall = false;

            if (choice.message.tool_calls) {
                for (const tool of choice.message.tool_calls) {
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

                    if (this.toolToServerMap.has(toolName)) {
                        const serverId = this.toolToServerMap.get(toolName);
                        const serverClient = this.servers.get(serverId).client;
                        
                        const callResult = await serverClient.callTool({
                            name: toolName,
                            arguments: toolArgs
                        });
                        
                        console.log(`[Server '${serverId}' call tool '${toolName}' with args ${JSON.stringify(toolArgs)}]: ${JSON.stringify(callResult.content)}`);

                        messages.push({
                            role: "tool",
                            tool_call_id: tool.id,
                            content: [
                                {
                                    type: "text",
                                    text: JSON.stringify(callResult.content)
                                }
                            ]
                        });
                    }
                }
            } else {
                messages.push({
                    role: "assistant",
                    content: choice.message.content
                });
                console.log(`[Model Response]: ${choice.message.content}`);
            }

            if (!hasToolCall) {
                break;
            }
        }
    }

    async cleanup() {
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
        {
{{#o1}}
            role: "developer",
{{/o1}}
{{^o1}}
            role: "system",
{{/o1}}
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