/**
 * Run this model in Node.js
 *
 * npm install openai
 */
const OpenAI = require('openai');

const client = new OpenAI({
    baseURL: "{{{baseURL}}}",
    apiKey: "unused", // required for the API but not used
});


{{#response_format}}
const responseFormat = {{{response_format}}};

{{/response_format}}
async function runChat() {
    const response = await client.chat.completions.create({
        messages: [
{{#parameters.systemWithQuote}}
            {
{{#o1}}
                role: "developer",
{{/o1}}
{{^o1}}
                role: "system",
{{/o1}}
                content: {{{parameters.systemWithQuote}}},
            },
{{/parameters.systemWithQuote}}
{{#messages}}
            {
                role: "{{role}}",
                content: {{{content.0.textWithQuote}}},
            },
{{/messages}}
        ],
        model: "{{{model}}}",
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
    });

    console.log(`[Model Response] ${response.choices[0].message.content}`);
}

runChat().catch(console.error); 