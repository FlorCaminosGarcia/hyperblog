/**
 * Connect model with mcp tools in Node.js
 * 
 * npm install mcp @mistralai/mistralai
 * node <this-script-path>.js
 */
const { Client } = require('@modelcontextprotocol/sdk/client/index.js');
const { StdioClientTransport } = require('@modelcontextprotocol/sdk/client/stdio.js');
const { SSEClientTransport } = require('@modelcontextprotocol/sdk/client/sse.js');
const { StreamableHTTPClientTransport } = require('@modelcontextprotocol/sdk/client/streamableHttp.js');
{{#hasImage}}
const fs = require('fs');
{{/hasImage}}
const { Mistral } = require('@mistralai/mistralai');

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
        this.mistral = new Mistral({
            apiKey: process.env.GITHUB_TOKEN,
            serverURL: "https://models.github.ai/inference",
        });
    }

    async connectStdioServer(serverId, command, args, env = {}) {
        const transport = new StdioClientTransport({
            command: command,
            args: args,
            env: { ...process.env, ...env }
        });
        
        const client = new Client({
            name: "mistral-client",
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
            name: "mistral-client",
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
            name: "mistral-client",
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
            try {
                const response = await this.mistral.chat.complete({
                    model: "{{{model}}}",
                    messages: messages,
                    tools: availableTools,
{{#parameters.max_tokens}}
                    maxTokens: {{parameters.max_tokens}},
{{/parameters.max_tokens}}
{{#parameters.temperature}}
                    temperature: {{.}},
{{/parameters.temperature}}
{{#parameters.top_p}}
                    topP: {{.}},
{{/parameters.top_p}}
                });

                const choice = response.choices[0];
                let hasToolCall = false;

                if (choice.message.toolCalls && choice.message.toolCalls.length > 0) {
                    hasToolCall = true;
                    console.log("Tool calls:", choice.message.toolCalls);
                    
                    // Add assistant message only if there's content
                    if (choice.message.content) {
                        messages.push({
                            role: "assistant",
                            content: choice.message.content
                        });
                    }
                    
                    for (const toolCall of choice.message.toolCalls) {
                        const toolName = toolCall.function.name;
                        const toolArgs = JSON.parse(toolCall.function.arguments);
                        
                        if (this.toolToServerMap.has(toolName)) {
                            const serverId = this.toolToServerMap.get(toolName);
                            const serverClient = this.servers.get(serverId).client;
                            
                            const callResult = await serverClient.callTool({
                                name: toolName,
                                arguments: toolArgs
                            });
                            
                            console.log(`[Server '${serverId}' call tool '${toolName}' with args ${JSON.stringify(toolArgs)}]: ${JSON.stringify(callResult.content)}`);

                            // Extract text content from MCP response
                            let toolContent = '';
                            if (callResult.content && Array.isArray(callResult.content)) {
                                toolContent = callResult.content.map(item => 
                                    item.type === 'text' ? item.text : JSON.stringify(item)
                                ).join('\n');
                            } else {
                                toolContent = JSON.stringify(callResult.content);
                            }
                            
                            messages.push({
                                role: "user",
                                content: `Tool "${toolName}" returned: ${toolContent}`
                            });
                        }
                    }
                } else {
                    console.log(`[Model Response]: ${choice.message.content}`);
                    break;
                }

                if (!hasToolCall) {
                    break;
                }
            } catch (error) {
                console.error(`Error: ${error.message}`);
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
            role: "system",
            content: {{{parameters.systemWithQuote}}}
        },
{{/parameters.systemWithQuote}}
{{#messages}}
{{#isUser}}
        {
            role: "user",
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
                    imageUrl: encodeImage({{{localPathWithQuote}}}, "{{{mimeType}}}")
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
            toolCalls: [
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
            toolCallId: "{{{tool_call_id}}}"
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