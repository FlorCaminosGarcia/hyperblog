/**
 * Run this model in Node.js
 *
 * npm install @anthropic-ai/sdk
 */
const Anthropic = require('@anthropic-ai/sdk');
{{#hasImage}}
const fs = require('fs');
{{/hasImage}}

const client = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
});

{{#hasImage}}
function encodeImage(path) {
    const imageData = fs.readFileSync(path);
    return imageData.toString('base64');
}

{{/hasImage}}
{{#toolResults}}
function {{{name}}}() {
    return "{{toolResult}}";
}

{{/toolResults}}
{{#tools}}
const tools = {{{tools}}};

{{/tools}}
async function runChat() {
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

    while (true) {
        const message = await client.messages.create({
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
{{#tools}}
            tools: tools,
{{/tools}}
        });
        
        console.log(`[Model Response] ${message.content}`);

        let shouldContinue = false;
        messages.push({
            role: "assistant",
            content: message.content,
        });
        
        const content = [];
        for (const contentBlock of message.content) {
            if (contentBlock.type === "tool_use") {
                shouldContinue = true;
                const toolResult = eval(contentBlock.name)();
                content.push({
                    type: "tool_result",
                    tool_use_id: contentBlock.id,
                    content: toolResult,
                });
            }
        }
        
        if (shouldContinue) {
            messages.push({
                role: "user",
                content: content,
            });
        } else {
            break;
        }
    }
}

runChat().catch(console.error); 