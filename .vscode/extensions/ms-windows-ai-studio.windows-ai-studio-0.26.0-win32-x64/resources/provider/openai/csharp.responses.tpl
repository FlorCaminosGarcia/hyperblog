/**
 * Run this model in .NET 10
 * > dotnet run <this-script-path>.cs
 */

#:package OpenAI@*-*
using System;
using System.Collections.Generic;
{{#hasImage}}
using System.IO;
{{/hasImage}}
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Text.Json.Serialization.Metadata;
using System.Threading.Tasks;
using OpenAI;
using OpenAI.Responses;

// This example uses experimental APIs which are subject to change. To use experimental APIs,
// please acknowledge their experimental status by suppressing the corresponding warning.
#pragma warning disable OPENAI001
var credential = new System.ClientModel.ApiKeyCredential(Environment.GetEnvironmentVariable("OPENAI_API_KEY"));
var openAIClient = new OpenAIClient(credential);
var client = openAIClient.GetOpenAIResponseClient("{{{model}}}");

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
var input = new List<ResponseItem>
{
{{#parameters.systemWithQuote}}
{{#o1}}
    ResponseItem.CreateUserMessageItem({{{parameters.systemWithQuote}}}),
{{/o1}}
{{^o1}}
    ResponseItem.CreateSystemMessageItem({{{parameters.systemWithQuote}}}),
{{/o1}}
{{/parameters.systemWithQuote}}
{{#messages}}
{{#isUser}}
    ResponseItem.CreateUserMessageItem(
{{#content}}
{{#isText}}
        {{{textWithQuote}}}
{{/isText}}
        {{#isImage}}
        ResponseContentPart.CreateInputImagePart(
            BinaryData.FromBytes(ReadImageBytes({{{localPathWithQuote}}})),
            GetImageMimeType({{{localPathWithQuote}}})
        ),
        {{/isImage}}
{{/content}}
    ),
{{/isUser}}
{{#isAssistant}}
{{#isContent}}
    ResponseItem.CreateAssistantMessageItem(
{{#content}}
{{#isText}}
        {{{textWithQuote}}}
{{/isText}}
        {{#isImage}}
        ResponseContentPart.CreateInputImagePart(BinaryData.FromBytes(ReadImageBytes({{{localPathWithQuote}}})), GetImageMimeType({{{localPathWithQuote}}})),
        {{/isImage}}
{{/content}}
    ),
{{/isContent}}
{{^isContent}}
{{#tool_calls}}
    ResponseItem.CreateFunctionCallItem("{{{id}}}", "{{{function.name}}}", BinaryData.FromString({{{function.arguments}}})),
{{/tool_calls}}
{{#isTool}}
    ResponseItem.CreateFunctionCallOutputItem("{{{tool_call_id}}}", {{{output}}}),
{{/isTool}}
{{/isContent}}
{{/isAssistant}}
{{/messages}}
};

{{#hasTools}}
var tools = new List<ResponseTool>
{
{{#rawTools}}
{{^isWebSearch}}
    ResponseTool.CreateFunctionTool(
        functionName: "{{name}}",
        functionDescription: "{{description}}",
        functionParameters: BinaryData.FromString("""{{{parameters}}}""")
    ),
{{/isWebSearch}}
{{#isWebSearch}}
    ResponseTool.CreateWebSearchTool(),
{{/isWebSearch}}
{{/rawTools}}
};

{{/hasTools}}
{{#response_format_json_schema}}
var responseFormat = ResponseTextFormat.CreateJsonSchemaFormat(
    jsonSchemaFormatName: "response_schema",
    jsonSchema: BinaryData.FromString({{{schema}}})
);

{{/response_format_json_schema}}
{{#response_format_text}}
var responseFormat = ResponseTextFormat.CreateTextFormat();

{{/response_format_text}}
while (true)
{
    var options = new ResponseCreationOptions();

{{#hasTools}}
    foreach (var tool in tools)
    {
        options.Tools.Add(tool);
    }

{{/hasTools}}
{{#response_format_json_schema}}
    options.TextOptions = new ResponseTextOptions
    {
        TextFormat = responseFormat
    };
{{/response_format_json_schema}}
{{#response_format_text}}
    options.TextOptions = new ResponseTextOptions
    {
        TextFormat = responseFormat
    };
{{/response_format_text}}
{{#parameters.max_tokens}}
    options.MaxOutputTokenCount = {{parameters.max_tokens}};
{{/parameters.max_tokens}}
{{#parameters.temperature}}
    options.Temperature = {{.}}f;
{{/parameters.temperature}}
{{#parameters.top_p}}
    options.TopP = {{.}}f;
{{/parameters.top_p}}
    options.ReasoningOptions = new ResponseReasoningOptions
    {
{{#parameters.reasoning_effort}}
        ReasoningEffortLevel = new ResponseReasoningEffortLevel("{{.}}");
{{/parameters.reasoning_effort}}
{{#parameters.reasoning_summary}}
        ReasoningSummaryVerbosity = new ResponseReasoningSummaryVerbosity("{{.}}");
{{/parameters.reasoning_summary}}
    };

    var response = await client.CreateResponseAsync(
        input,
        options
    );

    Console.WriteLine($"[Model Response] {JsonSerializer.Serialize(response.Value.OutputItems, jsonOptions)}");

    bool shouldContinue = false;
    input.AddRange(response.Value.OutputItems);

    foreach (var item in response.Value.OutputItems)
    {
        if (item is FunctionCallResponseItem functionCall)
        {
            shouldContinue = true;
            string toolResult = functionCall.FunctionName switch
            {
{{#toolResults}}
                "{{{name}}}" => {{{name}}}(),
{{/toolResults}}
                _ => throw new NotImplementedException($"Tool '{functionCall.FunctionName}' is not implemented.")
            };

            input.Add(ResponseItem.CreateFunctionCallOutputItem(functionCall.CallId, toolResult));
        }
    }

    if (!shouldContinue)
    {
        break;
    }
}

#pragma warning restore OPENAI001