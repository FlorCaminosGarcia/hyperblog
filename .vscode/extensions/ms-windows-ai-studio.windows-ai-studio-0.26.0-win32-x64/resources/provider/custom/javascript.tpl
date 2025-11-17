/**
 * Run this model in Node.js
 *
 * npm install openai
 */
{{#hasImage}}
const fs = require('fs');
{{/hasImage}}
{{#isAzureOpenAI}}
const { AzureOpenAI } = require('openai');
{{/isAzureOpenAI}}
{{^isAzureOpenAI}}
const OpenAI = require('openai');
{{/isAzureOpenAI}}

{{#isAzureOpenAI}}
const client = new AzureOpenAI({
    endpoint: "{{{baseURL}}}",
    apiKey: process.env.CUSTOM_OPENAI_API_KEY,
    apiVersion: "2024-12-01-preview"
});
{{/isAzureOpenAI}}
{{^isAzureOpenAI}}
const client = new OpenAI({
    baseURL: "{{{baseURL}}}",
    apiKey: process.env.CUSTOM_OPENAI_API_KEY
});
{{/isAzureOpenAI}}

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

{{#tools}}
const tools = {{{tools}}};

{{/tools}}
{{#response_format}}
const responseFormat = {{{response_format}}};

{{/response_format}}
async function runChat() {
    while (true) {
        const response = await client.chat.completions.create({
            messages: messages,
            model: "{{{model}}}",
{{#tools}}
            tools: tools,
{{/tools}}
{{#response_format}}
            response_format: responseFormat,
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
{{#extraQuery}}
            extra_query: {{{extraQuery}}},
{{/extraQuery}}
        });

        const choice = response.choices[0];

        if (choice.message.tool_calls) {
            console.log("Tool calls:", choice.message.tool_calls);
            messages.push(choice.message);
            
            for (const toolCall of choice.message.tool_calls) {
                const toolResult = eval(toolCall.function.name)();
                messages.push({
                    role: "tool",
                    tool_call_id: toolCall.id,
                    content: [
                        {
                            type: "text",
                            text: toolResult
                        }
                    ]
                });
            }
        } else {
            console.log(`[Model Response] ${choice.message.content}`);
            break;
        }
    }
}

runChat().catch(console.error); 