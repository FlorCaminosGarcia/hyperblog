/**
 * Run this model in Node.js
 *
 * npm install openai
 */
const OpenAI = require('openai');
{{#hasImage}}
const fs = require('fs');
{{/hasImage}}

const client = new OpenAI({
    baseURL: "{{{baseURL}}}",
    apiKey: "unused", // required for the API but not used
});

{{#hasImage}}
function encodeImage(path, mimeType) {
    const imageData = fs.readFileSync(path);
    const base64Data = imageData.toString('base64');
    return `data:${mimeType};base64,${base64Data}`;
}

{{/hasImage}}
async function runChat() {
    const response = await client.chat.completions.create({
        messages: [
{{#parameters.systemWithQuote}}
            {
                role: "system",
                content: {{{parameters.systemWithQuote}}},
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
                        text: {{{textWithQuote}}},
                    },
{{/isText}}
{{#isImage}}
                    {
                        type: "image_url",
                        image_url: { url: encodeImage({{{localPathWithQuote}}}, "{{{mimeType}}}") },
                    },
{{/isImage}}
{{/content}}
                ],
            },
{{/messages}}
        ],
        model: "{{{model}}}",
{{#parameters.max_tokens}}
        max_tokens: {{parameters.max_tokens}},
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

    console.log(`[Model Response] ${response.choices[0].message.content}`);
}

runChat().catch(console.error); 