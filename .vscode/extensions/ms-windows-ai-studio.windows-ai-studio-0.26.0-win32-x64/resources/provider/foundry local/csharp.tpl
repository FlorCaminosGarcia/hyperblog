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
using System.Threading.Tasks;
using OpenAI;
using OpenAI.Chat;

var credential = new System.ClientModel.ApiKeyCredential("unused"); // required for the API but not used
var openAIClient = new OpenAIClient(credential, new OpenAIClientOptions
{
    Endpoint = new Uri("{{{baseURL}}}")
});
var client = openAIClient.GetChatClient("{{{model}}}");

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
    ChatMessage.CreateAssistantMessage({{{content.0.textWithQuote}}}),
{{/isAssistant}}
{{/messages}}
};

var options = new ChatCompletionOptions();

{{#parameters.max_tokens}}
options.MaxOutputTokenCount = {{parameters.max_tokens}};
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

var completion = await client.CompleteChatAsync(messages, options);
Console.WriteLine($"[Model Response] {completion.Value.Content[0].Text}");