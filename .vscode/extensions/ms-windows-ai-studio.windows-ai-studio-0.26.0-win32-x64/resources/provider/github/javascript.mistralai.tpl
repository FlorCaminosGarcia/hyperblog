/**
 * Run this model in Node.js
 * 
 * npm install @mistralai/mistralai
 */
{{#hasImage}}
const fs = require('fs');
{{/hasImage}}
const { Mistral } = require('@mistralai/mistralai');

// To authenticate with the model you will need to generate a github gho token in your GitHub settings.
// Create your github gho token by following instructions here: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens
const client = new Mistral({
    apiKey: process.env.GITHUB_TOKEN,
    serverURL: "https://models.github.ai/inference",
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

{{#tools}}
const tools = {{{tools}}};

{{/tools}}
async function runChat() {
    while (true) {
        try {
            const response = await client.chat.complete({
                model: "{{{model}}}",
                messages: messages,
{{#tools}}
                tools: tools,
{{/tools}}
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

            if (choice.message.toolCalls && choice.message.toolCalls.length > 0) {
                console.log("Tool calls:", choice.message.toolCalls);
                
                // Add assistant message only if there's content
                if (choice.message.content) {
                    messages.push({
                        role: "assistant",
                        content: choice.message.content
                    });
                }
                
                for (const toolCall of choice.message.toolCalls) {
                    const toolResult = eval(toolCall.function.name)();
                    messages.push({
                        role: "user",
                        content: `Tool "${toolCall.function.name}" returned: ${toolResult}`,
                    });
                }
            } else {
                console.log(`[Model Response] ${choice.message.content}`);
                break;
            }
        } catch (error) {
            console.error(`Error: ${error.message}`);
            break;
        }
    }
}

runChat().catch(console.error); 