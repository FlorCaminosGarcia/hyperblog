/**
 * Run this model in .NET 10
 * > dotnet run <this-script-path>.cs
 */

#:package OpenAI@*-*
using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Threading.Tasks;
using OpenAI;
using OpenAI.Chat;

var credential = new System.ClientModel.ApiKeyCredential(Environment.GetEnvironmentVariable("NVIDIA_API_KEY"));
var openAIClient = new OpenAIClient(credential, new OpenAIClientOptions
{
    Endpoint = new Uri("{{{baseURL}}}")
});
var client = openAIClient.GetChatClient("{{{model}}}");

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

var completion = await client.CompleteChatAsync(messages);
Console.WriteLine($"[Model Response] {completion.Value.Content[0].Text}");