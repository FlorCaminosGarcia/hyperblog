/**
 * Run this model in .NET 10
 * > dotnet run <this-script-path>.cs
 */

#:package OpenAI@*-*
using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Text.Json.Serialization.Metadata;
using System.Threading.Tasks;
using OpenAI;
using OpenAI.Chat;

var credential = new System.ClientModel.ApiKeyCredential("unused"); // required for the API but not used
var openAIClient = new OpenAIClient(credential, new OpenAIClientOptions
{
    Endpoint = new Uri("{{{baseURL}}}")
});
var client = openAIClient.GetChatClient("{{{model}}}");

// JSON serialization options
var jsonOptions = new JsonSerializerOptions
{
    TypeInfoResolver = new DefaultJsonTypeInfoResolver()
};

var messages = new List<ChatMessage>
{
{{#parameters.systemWithQuote}}
{{#o1}}
    ChatMessage.CreateUserMessage({{{parameters.systemWithQuote}}}),
{{/o1}}
{{^o1}}
    ChatMessage.CreateSystemMessage({{{parameters.systemWithQuote}}}),
{{/o1}}
{{/parameters.systemWithQuote}}
{{#messages}}
    ChatMessage.Create{{#isUser}}User{{/isUser}}{{#isAssistant}}Assistant{{/isAssistant}}Message({{{content.0.textWithQuote}}}),
{{/messages}}
};

var options = new ChatCompletionOptions();

{{#response_format_json_schema}}
options.ResponseFormat = ChatResponseFormat.CreateJsonSchemaFormat(
    jsonSchemaFormatName: "response_schema",
    jsonSchema: BinaryData.FromString({{{schema}}})
);
{{/response_format_json_schema}}
{{#response_format_text}}
options.ResponseFormat = ChatResponseFormat.CreateTextFormat();
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
Console.WriteLine($"[Model Response] {completion.Value.Content[0].Text}");