/**
 * Connect model with mcp tools in Node.js using OpenAI Agents
 * 
 * npm install @openai/agents
 * npm install @modelcontextprotocol/sdk
 * node <this-script-path>.js
 * 
 * Note: Requires package.json with "type": "module"
 */
import { Agent, run, MCPServerStdio, MCPServerStreamableHttp, OpenAIChatCompletionsModel } from '@openai/agents';
import OpenAI from 'openai';
{{#hasImage}}
import fs from 'fs';
{{/hasImage}}

{{#hasImage}}
function encodeImage(path, mimeType) {
    const imageBuffer = fs.readFileSync(path);
    const base64String = imageBuffer.toString('base64');
    return `data:${mimeType};base64,${base64String}`;
}

{{/hasImage}}
{{#response_format_json_schema}}
class CustomOutputSchema {
    isPlainText() {
        return false;
    }

    name() {
        return "CustomOutputSchema";
    }

    jsonSchema() {
        return {{{response_format_json_schema.schema}}};
    }

    isStrictJsonSchema() {
        return {{{response_format_json_schema.strict}}};
    }

    validateJson(jsonStr) {
        return JSON.parse(jsonStr);
    }
}

{{/response_format_json_schema}}
async function main() {
    const openaiClient = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    // init MCP servers
    const servers = [
{{#mcpConfigs}}
{{#isStdio}}
        new MCPServerStdio({
            name: "{{{serverName}}}",
            command: {{{commandWithQuote}}},
            args: [
{{#argsWithQuote}}
                    {{{.}}},
{{/argsWithQuote}}
            ],
            env: {
{{#env}}
                "{{.}}": process.env["{{.}}"],
{{/env}}
            },
            cacheToolsList: true,
        }),
{{/isStdio}}
{{#isSse}}
        new MCPServerStreamableHttp({
            name: "{{{serverName}}}",
            url: {{{urlWithQuote}}},
            cacheToolsList: true
        }),
{{/isSse}}
{{/mcpConfigs}}
    ];

    // setup logger - simple console logging since setTracingDisabled is not available
    console.log("[Agent Log]: Initializing OpenAI Agents with MCP servers...");

    const agent = new Agent({
        name: "agent",
{{#parameters.systemWithQuote}}
        instructions: {{{parameters.systemWithQuote}}},
{{/parameters.systemWithQuote}}
        mcpServers: servers,
        model: new OpenAIChatCompletionsModel(openaiClient, "{{{model}}}"),
        modelSettings: {
{{#parameters.temperature}}
            temperature: {{.}},
{{/parameters.temperature}}
{{#parameters.top_p}}
            topP: {{.}},
{{/parameters.top_p}}
{{#parameters.frequency_penalty}}
            frequencyPenalty: {{.}},
{{/parameters.frequency_penalty}}
{{#parameters.presence_penalty}}
            presencePenalty: {{.}},
{{/parameters.presence_penalty}}
{{#parameters.max_tokens}}
{{^o1}}
            maxTokens: {{parameters.max_tokens}},
{{/o1}}
{{/parameters.max_tokens}}
{{#response_format_json_schema}}
            outputType: new CustomOutputSchema(),
{{/response_format_json_schema}}
        }
    });

    try {
        // Connect all servers
        console.log("[Agent Log]: Connecting to MCP servers...");
        for (const server of servers) {
            await server.connect();
            console.log(`[Agent Log]: Connected to server: ${server.name}`);
        }

        const result = await run(
            agent,
            [
{{#messages}}
{{#isUser}}
                {
                    role: "{{role}}",
                    content: [
{{#content}}
{{#isText}}
                        {
                            type: "input_text",
                            text: {{{textWithQuote}}}
                        },
{{/isText}}
{{#isImage}}
                        {
                            type: "input_image",
                            image: encodeImage({{{localPathWithQuote}}}, "{{{mimeType}}}"),
                        },
{{/isImage}}
{{/content}}
                    ]
                },
{{/isUser}}
{{#isAssistant}}
                {
                    "id": "",
                    "type": "message",
                    "role": "{{role}}",
                    "status": "completed",
                    "content": [
{{#content}}
{{#isText}}
                        {
                            "type": "output_text",
                            "text": {{{textWithQuote}}},
                            "annotations": [],
                        },
{{/isText}}
{{/content}}
                    ],
                },
{{/isAssistant}}
{{/messages}}
            ]
        );

        console.log("[Model Response] " + String(result.finalOutput));
    } catch (error) {
        console.error(`\nError: ${error.message}`);
        if (error.stack) {
            console.error(`Stack trace: ${error.stack}`);
        }
    } finally {
        // Cleanup all servers
        console.log("[Agent Log]: Cleaning up MCP servers...");
        for (const server of servers) {
            try {
                await server.close();
                console.log(`[Agent Log]: Closed server: ${server.name}`);
            } catch (cleanupError) {
                console.error(`[Agent Log]: Error closing server ${server.name}: ${cleanupError.message}`);
            }
        }
    }
}

main().catch((error) => {
    console.error('Unhandled error:', error);
    process.exit(1);
}); 