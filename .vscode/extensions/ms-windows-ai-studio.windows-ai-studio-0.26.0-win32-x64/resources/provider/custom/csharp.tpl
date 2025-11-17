/**
 * Run this model in .NET 10
 * > dotnet run <this-script-path>.cs
 */

{{#isAzureOpenAI}}
#:package Azure.AI.OpenAI@*-*
{{/isAzureOpenAI}}
{{^isAzureOpenAI}}
#:package OpenAI@*-*
{{/isAzureOpenAI}}
using System;
using System.Collections.Generic;
using System.Linq;
{{#hasImage}}
using System.IO;
{{/hasImage}}
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Text.Json.Serialization.Metadata;
using System.Threading.Tasks;
using OpenAI;
using OpenAI.Chat;
{{#isAzureOpenAI}}
using Azure;
using Azure.AI.OpenAI;
{{/isAzureOpenAI}}

{{#isAzureOpenAI}}
var credential = new Azure.AzureKeyCredential(Environment.GetEnvironmentVariable("CUSTOM_OPENAI_API_KEY"));
var openAIClient = new AzureOpenAIClient(
    endpoint: new Uri("{{{baseURL}}}"),
    credential: credential
);
var client = openAIClient.GetChatClient("{{{model}}}");
{{/isAzureOpenAI}}
{{^isAzureOpenAI}}
var credential = new System.ClientModel.ApiKeyCredential(Environment.GetEnvironmentVariable("CUSTOM_OPENAI_API_KEY"));
var openAIClient = new OpenAIClient(credential, new OpenAIClientOptions
{
    Endpoint = new Uri("{{{baseURL}}}")
});
var client = openAIClient.GetChatClient("{{{model}}}");
{{/isAzureOpenAI}}

{{#hasImage}}
static string GetImageMimeType(string filePath)
{
    string extension = Path.GetExtension(filePath).ToLowerInvariant();
    return extension switch
    {
        ".png" => "image/png",
        ".jpg" or ".jpeg" => "image/jpeg",
        ".gif" => "image/gif",
        ".bmp" => "image/bmp",
        ".webp" => "image/webp",
        ".tiff" or ".tif" => "image/tiff",
        ".svg" => "image/svg+xml",
        _ => "image/png" // Default to PNG
    };
}

static byte[] ReadImageBytes(string imagePath)
{
    return File.ReadAllBytes(imagePath);
}

{{/hasImage}}
// JSON serialization options
var jsonOptions = new JsonSerializerOptions
{
    TypeInfoResolver = new DefaultJsonTypeInfoResolver()
};

{{#toolResults}}
static string {{{name}}}()
{
    return "{{toolResult}}";
}

{{/toolResults}}
var messages = new List<ChatMessage>
{
{{#parameters.systemWithQuote}}
    ChatMessage.CreateSystemMessage({{{parameters.systemWithQuote}}}),
{{/parameters.systemWithQuote}}
{{#messages}}
{{#isUser}}
    ChatMessage.CreateUserMessage(
{{#content}}
{{#isText}}
        {{{textWithQuote}}}
{{/isText}}
        {{#isImage}}
        ChatMessageContentPart.CreateImagePart(
            BinaryData.FromBytes(ReadImageBytes({{{localPathWithQuote}}})),
            GetImageMimeType({{{localPathWithQuote}}})
        ),
        {{/isImage}}
{{/content}}
    ),
{{/isUser}}
{{#isAssistant}}
{{^tool_calls}}
{{#content}}
    ChatMessage.CreateAssistantMessage({{{textWithQuote}}}),
{{/content}}
{{/tool_calls}}
{{#tool_calls}}
    ChatMessage.CreateAssistantMessage(new[]
    {
        ChatToolCall.CreateFunctionToolCall("{{{id}}}", "{{{function.name}}}", BinaryData.FromString({{{function.arguments}}}))
    }),
{{/tool_calls}}
{{/isAssistant}}
{{#isTool}}
    ChatMessage.CreateToolMessage("{{{tool_call_id}}}", {{#content}}{{{textWithQuote}}}{{/content}}),
{{/isTool}}
{{/messages}}
};

{{#hasTools}}
var tools = new List<ChatTool>
{
{{#rawTools}}
    ChatTool.CreateFunctionTool(
        functionName: "{{function.name}}",
        functionDescription: "{{function.description}}",
        functionParameters: BinaryData.FromString("""{{{function.parameters}}}""")
    ),
{{/rawTools}}
};

{{/hasTools}}
{{#response_format_json_schema}}
var responseFormat = ChatResponseFormat.CreateJsonSchemaFormat(
    jsonSchemaFormatName: "response_schema",
    jsonSchema: BinaryData.FromString({{{schema}}})
);

{{/response_format_json_schema}}
{{#response_format_text}}
var responseFormat = ChatResponseFormat.CreateTextFormat();

{{/response_format_text}}
while (true)
{
    var options = new ChatCompletionOptions();

{{#hasTools}}
    foreach (var tool in tools)
    {
        options.Tools.Add(tool);
    }
{{/hasTools}}
{{#response_format_json_schema}}
    options.ResponseFormat = responseFormat;
{{/response_format_json_schema}}
{{#response_format_text}}
    options.ResponseFormat = responseFormat;
{{/response_format_text}}
{{#parameters.max_tokens}}
{{#o1}}
    options.MaxOutputTokenCount = {{parameters.max_tokens}};
{{/o1}}
{{^o1}}
    options.MaxOutputTokenCount = {{parameters.max_tokens}};
{{/o1}}
{{/parameters.max_tokens}}
{{#parameters.temperature}}
    options.Temperature = {{.}}f;
{{/parameters.temperature}}
{{#parameters.top_p}}
    options.TopP = {{.}}f;
{{/parameters.top_p}}
{{#parameters.frequency_penalty}}
    options.FrequencyPenalty = {{.}}f;
{{/parameters.frequency_penalty}}
{{#parameters.presence_penalty}}
    options.PresencePenalty = {{.}}f;
{{/parameters.presence_penalty}}
{{#parameters.reasoning_effort}}
#pragma warning disable OPENAI001
    options.ReasoningEffortLevel = new ChatReasoningEffortLevel("{{.}}");
#pragma warning restore OPENAI001
{{/parameters.reasoning_effort}}

    var completion = await client.CompleteChatAsync(messages, options);

    if (completion.Value.ToolCalls.Any())
    {
        Console.WriteLine("Tool calls:");
        messages.Add(ChatMessage.CreateAssistantMessage(completion.Value.ToolCalls));
        
        foreach (var toolCall in completion.Value.ToolCalls)
        {
            Console.WriteLine($"  {toolCall.FunctionName}: {toolCall.FunctionArguments}");
            
            string toolResult = toolCall.FunctionName switch
            {
{{#toolResults}}
                "{{{name}}}" => {{{name}}}(),
{{/toolResults}}
                _ => throw new NotImplementedException($"Tool '{toolCall.FunctionName}' is not implemented.")
            };

            messages.Add(ChatMessage.CreateToolMessage(toolCall.Id, toolResult));
        }
    }
    else
    {
        Console.WriteLine($"[Model Response] {completion.Value.Content[0].Text}");
        break;
    }
}