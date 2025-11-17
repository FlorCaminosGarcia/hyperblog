/**
 * Run this model in Node.js
 *
 * npm install openai
 */
{{#hasImage}}
const fs = require('fs');
{{/hasImage}}
const OpenAI = require('openai');

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
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
const input = [
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

{{#tools}}
const tools = {{{tools}}};

{{/tools}}
{{#response_format}}
const text = {{{response_format}}};

{{/response_format}}
async function runResponses() {
    while (true) {
        const response = await client.responses.create({
{{#parameters.systemWithQuote}}
            instructions: {{{parameters.systemWithQuote}}},
{{/parameters.systemWithQuote}}
            input: input,
            model: "{{{model}}}",
{{#tools}}
            tools: tools,
{{/tools}}
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

        console.log(`[Model Response] ${JSON.stringify(response.output)}`);
        
        let shouldContinue = false;
        input.push(...response.output);
        
        for (const item of response.output) {
            if (item.type === "function_call") {
                shouldContinue = true;
                input.push({
                    type: "function_call_output",
                    call_id: item.call_id,
                    output: eval(item.name)()
                });
            }
        }
        
        if (!shouldContinue) {
            break;
        }
    }
}

runResponses().catch(console.error); 