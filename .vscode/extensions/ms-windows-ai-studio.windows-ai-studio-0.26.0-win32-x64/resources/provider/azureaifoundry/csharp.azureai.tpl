/**
 * Run this model in .NET 10
 * > dotnet run <this-script-path>.cs
 */

#:package Azure.AI.Inference@*-*
#:package Azure.Core@*

using System;
using System.Collections.Generic;
{{#hasImage}}
using System.IO;
{{/hasImage}}
using System.Text.Json;
using System.Threading.Tasks;
using Azure;
using Azure.AI.Inference;
using Azure.Core;

var endpoint = new Uri("{{{endpoint}}}");
var credential = new AzureKeyCredential(Environment.GetEnvironmentVariable("AZURE_AI_API_KEY"));

var client = new ChatCompletionsClient(endpoint, credential);

{{#hasImage}}
static BinaryData EncodeImage(string path, string mimeType)
{
    byte[] imageBuffer = File.ReadAllBytes(path);
    return BinaryData.FromBytes(imageBuffer);
}

{{/hasImage}}
{{#toolResults}}
static string {{{name}}}()
{
    return "{{toolResult}}";
}

{{/toolResults}}
var messages = new List<ChatRequestMessage>
{
{{#parameters.systemWithQuote}}
{{#o1}}
    new ChatRequestSystemMessage({{{parameters.systemWithQuote}}}),
{{/o1}}
{{^o1}}
    new ChatRequestSystemMessage({{{parameters.systemWithQuote}}}),
{{/o1}}
{{/parameters.systemWithQuote}}
{{#messages}}
{{#isUser}}
    new ChatRequestUserMessage(new ChatMessageContentItem[]
    {
{{#content}}
{{#isText}}
        new ChatMessageTextContentItem({{{textWithQuote}}}),
{{/isText}}
{{#isImage}}
        new ChatMessageImageContentItem(
            EncodeImage({{{localPathWithQuote}}}, "{{{mimeType}}}"),
            "{{{mimeType}}}",
            ChatMessageImageDetailLevel.Auto
        ),
{{/isImage}}
{{/content}}
    }),
{{/isUser}}
{{#isAssistant}}
{{^tool_calls}}
    new ChatRequestAssistantMessage({{{textWithQuote}}}),
{{/tool_calls}}
{{#tool_calls}}
    new ChatRequestAssistantMessage(new[]
    {
        ChatCompletionsToolCall.CreateFunctionToolCall("{{{id}}}", "{{{function.name}}}", {{{function.arguments}}})
    }),
{{/tool_calls}}
{{/isAssistant}}
{{#isTool}}
    new ChatRequestToolMessage({{#content}}{{{textWithQuote}}}{{/content}}, "{{{tool_call_id}}}"),
{{/isTool}}
{{/messages}}
};

{{#hasTools}}
var tools = new List<ChatCompletionsToolDefinition>
{
{{#rawTools}}
    new ChatCompletionsToolDefinition(
        new FunctionDefinition("{{function.name}}")
        {
            Description = "{{function.description}}",
            Parameters = BinaryData.FromString("""{{{function.parameters}}}""")
        }
    ),
{{/rawTools}}
};

{{/hasTools}}
{{#response_format_json_schema}}
var responseFormat = new ChatCompletionsResponseFormatJsonObject();

{{/response_format_json_schema}}
{{#response_format_text}}
var responseFormat = new ChatCompletionsResponseFormatText();

{{/response_format_text}}
while (true)
{
    var options = new ChatCompletionsOptions();
    
    // Set model name
    options.Model = "{{{model}}}";

    foreach (var message in messages)
    {
        options.Messages.Add(message);
    }

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
    options.MaxTokens = {{parameters.max_tokens}};
{{/o1}}
{{^o1}}
    options.MaxTokens = {{parameters.max_tokens}};
{{/o1}}
{{/parameters.max_tokens}}
{{#parameters.temperature}}
    options.Temperature = {{.}}f;
{{/parameters.temperature}}
{{#parameters.top_p}}
    options.NucleusSamplingFactor = {{.}}f;
{{/parameters.top_p}}
{{#parameters.frequency_penalty}}
    options.FrequencyPenalty = {{.}}f;
{{/parameters.frequency_penalty}}
{{#parameters.presence_penalty}}
    options.PresencePenalty = {{.}}f;
{{/parameters.presence_penalty}}

    var response = await client.CompleteAsync(options);
    var result = response.Value;

    if (result.FinishReason == CompletionsFinishReason.ToolCalls)
    {
        Console.WriteLine("Tool calls:");
        
        // Add assistant message with tool calls
        var assistantMessage = new ChatRequestAssistantMessage(result.Content ?? "");
        foreach (var toolCall in result.ToolCalls ?? [])
        {
            assistantMessage.ToolCalls.Add(toolCall);
        }
        messages.Add(assistantMessage);
        
        foreach (var toolCall in result.ToolCalls ?? [])
        {
            Console.WriteLine($"  {toolCall.Function.Name}: {toolCall.Function.Arguments}");
            
            string toolResult = toolCall.Function.Name switch
            {
{{#toolResults}}
                "{{{name}}}" => {{{name}}}(),
{{/toolResults}}
                _ => throw new NotImplementedException($"Tool '{toolCall.Function.Name}' is not implemented.")
            };

            messages.Add(new ChatRequestToolMessage(toolResult, toolCall.Id));
        }
    }
    else
    {
        Console.WriteLine($"[Model Response] {result.Content}");
        break;
    }
}