/**
 * Run this model in Node.js
 * 
 * npm install cohere-ai
 */
{{#hasImage}}
const fs = require('fs');
{{/hasImage}}
const { CohereClient } = require('cohere-ai');

// To authenticate with the model you will need to generate a github gho token in your GitHub settings.
// Create your github gho token by following instructions here: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens
const client = new CohereClient({
    token: process.env.GITHUB_TOKEN,
    clientName: "github-ai-toolkit",
    environment: "https://models.github.ai/inference",
});

{{#hasImage}}
function encodeImage(path, mimeType) {
    const imageBuffer = fs.readFileSync(path);
    const base64String = imageBuffer.toString('base64');
    return `data:${mimeType};base64,${base64String}`;
}

{{/hasImage}}
{{#toolResults}}
function {{{name}}}() {
    return "{{toolResult}}";
}

{{/toolResults}}
{{#messages}}
{{#isUser}}
{{#content}}
{{#isText}}
{{#cohereToolResult}}
const message = ""; // Cannot specify both message and tool_results unless in single hop mode
{{/cohereToolResult}}
{{^cohereToolResult}}
{{#isCohereMessage}}
const message = {{{textWithQuote}}};
{{/isCohereMessage}}
{{/cohereToolResult}}
{{/isText}}
{{/content}}
{{/isUser}}
{{/messages}}

const chatHistory = [
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

{{#cohereTools}}
const tools = {{{cohereTools}}};

{{/cohereTools}}
{{#cohereToolResult}}
const toolResults = {{{cohereToolResult}}};

{{/cohereToolResult}}
async function runChat() {
    try {
        const response = await client.chat({
            model: "{{{model}}}",
            message: message,
            chatHistory: chatHistory,
{{#parameters.systemWithQuote}}
            preamble: {{{parameters.systemWithQuote}}},
{{/parameters.systemWithQuote}}
{{#cohereTools}}
            tools: tools,
{{/cohereTools}}
{{#cohereToolResult}}
            toolResults: toolResults,
{{/cohereToolResult}}
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

{{^cohereTools}}
        console.log("[Model Response] " + response.text);
{{/cohereTools}}
{{#cohereTools}}
        if (response.toolCalls && response.toolCalls.length > 0) {
            console.log("Tool calls:", response.toolCalls);
            
            for (const toolCall of response.toolCalls) {
                console.log(`Calling tool: ${toolCall.name}`);
                const toolResult = eval(toolCall.name)();
                console.log(`Tool result: ${toolResult}`);
            }
        } else {
            console.log("[Model Response] " + response.text);
        }
{{/cohereTools}}
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

runChat().catch(console.error); 