/**
 * Run this model in Node.js
 *
 * npm install @google/generative-ai
 */
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { GoogleAIFileManager } = require('@google/generative-ai/server');
const fs = require('fs');
const path = require('path');
{{#files.0}}
const { promisify } = require('util');
const sleep = promisify(setTimeout);
{{/files.0}}

{{#toolResults}}
function {{{name}}}() {
    return "{{toolResult}}";
}

{{/toolResults}}
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
{{#files.0}}
const fileManager = new GoogleAIFileManager(process.env.GEMINI_API_KEY);
{{/files.0}}

{{#files.0}}
async function uploadToGemini(filePath, mimeType) {
    /**
     * Uploads the given file to Gemini.
     * 
     * See https://ai.google.dev/gemini-api/docs/prompting_with_media
     */
    const uploadResult = await fileManager.uploadFile(filePath, {
        mimeType: mimeType,
        displayName: path.basename(filePath),
    });
    const file = uploadResult.file;
    console.log(`Uploaded file '${file.displayName}' as: ${file.uri}`);
    return file;
}

async function waitForFilesActive(files) {
    /**
     * Waits for the given files to be active.
     *
     * Some files uploaded to the Gemini API need to be processed before they can be
     * used as prompt inputs. The status can be seen by querying the file's "state"
     * field.
     *
     * This implementation uses a simple blocking polling loop. Production code
     * should probably employ a more sophisticated approach.
     */
    console.log("Waiting for file processing...");
    for (const file of files) {
        let fileObject = await fileManager.getFile(file.name);
        while (fileObject.state === "PROCESSING") {
            process.stdout.write(".");
            await sleep(10000);
            fileObject = await fileManager.getFile(file.name);
        }
        if (fileObject.state !== "ACTIVE") {
            throw new Error(`File ${file.name} failed to process`);
        }
    }
    console.log("...all files ready");
    console.log();
}

{{/files.0}}
// Create the model
const generationConfig = {
{{#parameters.temperature}}
    temperature: {{.}},
{{/parameters.temperature}}
{{#parameters.top_p}}
    topP: {{.}},
{{/parameters.top_p}}
{{#parameters.max_tokens}}
    maxOutputTokens: {{.}},
{{/parameters.max_tokens}}
{{#parameters.presence_penalty}}
    presencePenalty: {{.}},
{{/parameters.presence_penalty}}
{{#parameters.frequency_penalty}}
    frequencyPenalty: {{.}},
{{/parameters.frequency_penalty}}
    responseMimeType: "{{{parameters.response_mime_type}}}",
{{#parameters.response_schema}}
    responseSchema: {{{.}}},
{{/parameters.response_schema}}
};

const model = genAI.getGenerativeModel({
    model: {{{model}}},
    generationConfig: generationConfig,
{{#tools}}
    tools: {{{tools}}},
{{/tools}}
{{#parameters.system_prompt}}
    systemInstruction: {{{.}}},
{{/parameters.system_prompt}}
});

async function runChat() {
{{#files.0}}
    // TODO Make these files available on the local file system
    // You may need to update the file paths
    const files = [
    {{#files}}
        await uploadToGemini({{{localPath}}}, {{{mimeType}}}),
    {{/files}}
    ];

    // Some files have a processing delay. Wait for them to be ready.
    await waitForFilesActive(files);

{{/files.0}}
    const contents = [
{{#historyMessages}}
        {
            role: {{{role}}},
            parts: [
{{#content}}
{{#isFile}}
                {
                    fileData: {
                        mimeType: files[{{{fileIndex}}}].mimeType,
                        fileUri: files[{{{fileIndex}}}].uri
                    }
                },
{{/isFile}}
{{#isText}}
                { text: {{{textWithQuote}}} },
{{/isText}}
{{#isToolUse}}
                {
                    functionCall: {
                        name: "{{{functionCall.name}}}",
                        args: {{{functionCall.args}}}
                    }
                },
{{/isToolUse}}
{{#isToolResult}}
                {
                    functionResponse: {
                        name: "{{{functionResponse.name}}}",
                        response: {{{functionResponse.response}}}
                    }
                },
{{/isToolResult}}
{{/content}}
            ]
        },
{{/historyMessages}}
        {
            role: "user",
            parts: [
                {
                    text: {{{messageWithQuote}}}
                }
            ]
        }
    ];

    while (true) {
        const result = await model.generateContent({
            contents: contents
        });
        
        const response = await result.response;
        console.log(`[Model Response] ${response.candidates[0].content.parts}`);
        
        let shouldContinue = false;
        contents.push(response.candidates[0].content);
        
        for (const part of response.candidates[0].content.parts) {
            if (part.functionCall) {
                shouldContinue = true;
                const toolResult = eval(part.functionCall.name)();
                contents.push({
                    role: "user",
                    parts: [
                        {
                            functionResponse: {
                                name: part.functionCall.name,
                                response: {
                                    result: toolResult
                                }
                            }
                        }
                    ]
                });
            }
        }
        
        if (!shouldContinue) {
            break;
        }
    }
}

{{#files.0}}
runChat().catch(console.error);
{{/files.0}}
{{^files.0}}
runChat().catch(console.error);
{{/files.0}} 