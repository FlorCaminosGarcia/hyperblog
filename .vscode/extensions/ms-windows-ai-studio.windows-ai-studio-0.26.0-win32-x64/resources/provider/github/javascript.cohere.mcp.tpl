/**
 * Connect model with mcp tools in Node.js
 * 
 * npm install mcp cohere-ai
 * node <this-script-path>.js
 */
const { Client } = require('@modelcontextprotocol/sdk/client/index.js');
const { StdioClientTransport } = require('@modelcontextprotocol/sdk/client/stdio.js');
const { SSEClientTransport } = require('@modelcontextprotocol/sdk/client/sse.js');
const { StreamableHTTPClientTransport } = require('@modelcontextprotocol/sdk/client/streamableHttp.js');
{{#hasImage}}
const fs = require('fs');
{{/hasImage}}
const { CohereClient } = require('cohere-ai');

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
        this.cohere = new CohereClient({
            token: process.env.GITHUB_TOKEN,
            clientName: "github-ai-toolkit",
            environment: "https://models.github.ai/inference",
        });
    }

    async connectStdioServer(serverId, command, args, env = {}) {
        const transport = new StdioClientTransport({
            command: command,
            args: args,
            env: { ...process.env, ...env }
        });
        
        const client = new Client({
            name: "cohere-client",
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
            name: "cohere-client",
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
            name: "cohere-client",
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

    async chatWithTools(messages, lastMessage, toolResults) {
        if (this.servers.size === 0) {
            throw new Error("No MCP servers connected. Connect to at least one server first.");
        }

        // Convert MCP tool schemas to Cohere format
        const availableTools = [];
        for (const [serverId, serverInfo] of this.servers) {
            for (const tool of serverInfo.tools) {
                // Convert JSON Schema to Cohere's expected format
                const cohereToolDef = {
                    name: tool.name,
                    description: tool.description,
                    parameterDefinitions: this.convertJsonSchemaToCohere(tool.inputSchema)
                };
                availableTools.push(cohereToolDef);
            }
        }

        while (true) {
            try {
                const response = await this.cohere.chat({
                    model: "{{{model}}}",
                    message: lastMessage,
                    chatHistory: messages,
{{#parameters.systemWithQuote}}
                    preamble: {{{parameters.systemWithQuote}}},
{{/parameters.systemWithQuote}}
                    tools: availableTools,
                    toolResults: toolResults,
{{#parameters.max_tokens}}
                    maxTokens: {{parameters.max_tokens}},
{{/parameters.max_tokens}}
{{#parameters.temperature}}
                    temperature: {{.}},
{{/parameters.temperature}}
{{#parameters.top_p}}
                    p: {{.}},
{{/parameters.top_p}}
{{#parameters.frequency_penalty}}
                    frequencyPenalty: {{.}},
{{/parameters.frequency_penalty}}
{{#parameters.presence_penalty}}
                    presencePenalty: {{.}},
{{/parameters.presence_penalty}}
                });

                let hasToolCall = false;

                if (response.toolCalls && response.toolCalls.length > 0) {
                    toolResults = [];
                    for (const toolCall of response.toolCalls) {
                        hasToolCall = true;
                        const toolName = toolCall.name;
                        const toolArgs = toolCall.parameters;
                        
                        messages.push({
                            role: "CHATBOT",
                            message: "",
                            toolCalls: [{
                                name: toolCall.name,
                                parameters: toolCall.parameters,
                            }]
                        });
                        
                        console.log(`Calling tool: ${toolName}`);
                        
                        if (this.toolToServerMap.has(toolName)) {
                            const serverId = this.toolToServerMap.get(toolName);
                            const serverClient = this.servers.get(serverId).client;
                            
                            const callResult = await serverClient.callTool({
                                name: toolName,
                                arguments: toolArgs
                            });
                            
                            console.log(`[Server '${serverId}' call tool '${toolName}' with args ${JSON.stringify(toolArgs)}]: ${JSON.stringify(callResult.content)}`);

                            lastMessage = "";
                            toolResults.push({
                                call: {
                                    name: toolCall.name,
                                    parameters: toolCall.parameters,
                                },
                                outputs: callResult.content,
                            });
                        }
                    }
                } else if (response.text) {
                    messages.push({
                        role: "CHATBOT",
                        message: response.text,
                    });
                    toolResults = null;
                    console.log(`[Model Response]: ${response.text}`);
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

    // Helper method to convert JSON Schema to Cohere's parameter definition format
    convertJsonSchemaToCohere(jsonSchema) {
        if (!jsonSchema || typeof jsonSchema !== 'object') {
            return {};
        }

        const cohereParams = {};

        if (jsonSchema.properties) {
            for (const [propName, propDef] of Object.entries(jsonSchema.properties)) {
                cohereParams[propName] = {
                    type: propDef.type || "string",
                    description: propDef.description || "",
                    required: jsonSchema.required && jsonSchema.required.includes(propName)
                };
                
                // Handle additional properties like enum, default, etc.
                if (propDef.enum) {
                    cohereParams[propName].enum = propDef.enum;
                }
                if (propDef.default !== undefined) {
                    cohereParams[propName].default = propDef.default;
                }
            }
        }

        return cohereParams;
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
{{#messages}}
{{#isUser}}
{{#content}}
{{#isText}}
{{^isCohereMessage}}
        {
            role: "USER",
            message: {{{textWithQuote}}},
        },
{{/isCohereMessage}}
{{/isText}}
{{/content}}
{{/isUser}}
{{#isAssistant}}
        {
            role: "CHATBOT",
            message: {{{textWithQuote}}},
{{#tool_calls}}
            toolCalls: [
                {
                    id: "{{{id}}}",
                    type: "function",
                    function: {
                        name: "{{{function.name}}}",
                        arguments: {{{function.arguments}}},
                    }
                },
            ],
{{/tool_calls}}
        },
{{/isAssistant}}
{{/messages}}
    ];

{{#messages}}
{{#isUser}}
{{#content}}
{{#isText}}
{{#cohereToolResult}}
    const lastMessage = ""; // Cannot specify both message and tool_results unless in single hop mode
{{/cohereToolResult}}
{{^cohereToolResult}}
{{#isCohereMessage}}
    const lastMessage = {{{textWithQuote}}};
{{/isCohereMessage}}
{{/cohereToolResult}}
{{/isText}}
{{/content}}
{{/isUser}}
{{/messages}}

{{#cohereToolResult}}
    const toolResults = {{{cohereToolResult}}};
{{/cohereToolResult}}
{{^cohereToolResult}}
    const toolResults = null;
{{/cohereToolResult}}

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
        await client.chatWithTools(messages, lastMessage, toolResults);
    } catch (error) {
        console.error(`\nError: ${error.message}`);
    } finally {
        await client.cleanup();
    }
}

main().catch(console.error); 