/**
 * Run this model in Node.js
 * 
 * npm install @azure-rest/ai-inference @azure/core-auth
 */
{{#hasImage}}
const fs = require('fs');
{{/hasImage}}
const createClient = require('@azure-rest/ai-inference').default;
const { AzureKeyCredential } = require('@azure/core-auth');

// To authenticate with the model you will need to generate a github gho token in your GitHub settings.
// Create your github gho token by following instructions here: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens
const client = createClient(
    "https://models.github.ai/inference",
    new AzureKeyCredential(process.env.GITHUB_TOKEN),
    {
{{#o1}}
        apiVersion: "2024-12-01-preview"
{{/o1}}
{{#api_version}}
        apiVersion: "{{api_version}}"
{{/api_version}}
    }
);

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
{{#o1}}
    { role: "developer", content: {{{parameters.systemWithQuote}}} },
{{/o1}}
{{^o1}}
    { role: "system", content: {{{parameters.systemWithQuote}}} },
{{/o1}}
{{/parameters.systemWithQuote}}
{{#messages}}
{{#isUser}}
    {
        role: "user",
        content: [
{{#content}}
{{#isText}}
            { type: "text", text: {{{textWithQuote}}} },
{{/isText}}
{{#isImage}}
            { 
                type: "image_url", 
                image_url: { url: encodeImage({{{localPathWithQuote}}}, "{{{mimeType}}}") } 
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
        tool_calls: [
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
        tool_call_id: "{{{tool_call_id}}}"
{{/content}}
    },
{{/isTool}}
{{/messages}}
];

{{#tools}}
const tools = {{{tools}}};

{{/tools}}
{{#response_format_json_schema}}
const responseFormat = {
    type: "json_schema",
    json_schema: {
        name: "{{response_format_json_schema.name}}",
        description: "{{response_format_json_schema.description}}",
        strict: {{{response_format_json_schema.strict}}},
        schema: {{{response_format_json_schema.schema}}}
    }
};

{{/response_format_json_schema}}
{{#response_format_text}}
const responseFormat = { type: "text" };

{{/response_format_text}}
async function runChat() {
    while (true) {
        const response = await client.path("/chat/completions").post({
            body: {
                messages: messages,
                model: "{{{model}}}",
{{#tools}}
                tools: tools,
{{/tools}}
{{#response_format_text}}
                response_format: responseFormat,
{{/response_format_text}}
{{#response_format_json_schema}}
                response_format: responseFormat,
{{/response_format_json_schema}}
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
            }
        });

        if (response.status !== "200") {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const result = response.body;
        const choice = result.choices[0];

        if (choice.message.tool_calls) {
            console.log("Tool calls:", choice.message.tool_calls);
            messages.push(choice.message);
            
            for (const toolCall of choice.message.tool_calls) {
                const toolResult = eval(toolCall.function.name)();
                messages.push({
                    role: "tool",
                    content: toolResult,
                    tool_call_id: toolCall.id
                });
            }
        } else {
            console.log(`[Model Response] ${choice.message.content}`);
            break;
        }
    }
}

runChat().catch(console.error); 