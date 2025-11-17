/**
 * Connect model with mcp tools in .NET 10
 * # Run this script
 * > dotnet run <this-script-path>.cs
 */

{{#isAzureOpenAI}}
#:package Azure.AI.OpenAI@*-*
{{/isAzureOpenAI}}
{{^isAzureOpenAI}}
#:package OpenAI@*-*
{{/isAzureOpenAI}}
#:package ModelContextProtocol@*-*
using System;
using System.Collections.Generic;
using System.Diagnostics;
{{#hasImage}}
using System.IO;
{{/hasImage}}
using System.Linq;
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
using ModelContextProtocol;
using ModelContextProtocol.Client;

// Main execution
var client = new MCPClient();
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

try
{
{{#mcpConfigs}}
{{#isStdio}}
    await client.ConnectStdioServerAsync(
        "{{{serverName}}}", 
        {{{commandWithQuote}}}, 
        new[]
        {
{{#argsWithQuote}}
            {{{.}}},
{{/argsWithQuote}}
        },
        new Dictionary<string, string>
        {
{{#env}}
            ["{{{.}}}"] = Environment.GetEnvironmentVariable("{{{.}}}"),
{{/env}}
        }
    );
{{/isStdio}}
{{#isSse}}
    await client.ConnectSseServerAsync(
        "{{{serverName}}}", 
        {{{urlWithQuote}}},
        new Dictionary<string, string>
        {
{{#headers}}
{{#isAuthorization}}
            ["{{key}}"] = "Bearer " + Environment.GetEnvironmentVariable("YOUR_AUTH_TOKEN"),
{{/isAuthorization}}
{{^isAuthorization}}
            ["{{key}}"] = "{{value}}",
{{/isAuthorization}}
{{/headers}}
        }
    );
{{/isSse}}
{{#isHttp}}
    await client.ConnectHttpServerAsync(
        "{{{serverName}}}", 
        {{{urlWithQuote}}},
        new Dictionary<string, string>
        {
{{#headers}}
{{#isAuthorization}}
            ["{{key}}"] = "Bearer " + Environment.GetEnvironmentVariable("YOUR_AUTH_TOKEN"),
{{/isAuthorization}}
{{^isAuthorization}}
            ["{{key}}"] = "{{value}}",
{{/isAuthorization}}
{{/headers}}
        }
    );
{{/isHttp}}
{{/mcpConfigs}}
    await client.ChatWithToolsAsync(messages);
}
catch (Exception ex)
{
    Console.WriteLine($"\nError: {ex.Message}");
}
finally
{
    client.Dispose();
    await Task.Delay(1000);
}

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
public class MCPClient
{
    private readonly Dictionary<string, ServerInfo> _servers = new();
    private readonly Dictionary<string, string> _toolToServerMap = new();
    private readonly ChatClient _openAI;
    private readonly JsonSerializerOptions _jsonOptions = new()
    {
        TypeInfoResolver = new DefaultJsonTypeInfoResolver()
    };

    public class ServerInfo
    {
        public IMcpClient? Client { get; set; }
        public List<McpClientTool> Tools { get; set; } = new();
    }

    public MCPClient()
    {
{{#isAzureOpenAI}}
        var credential = new Azure.AzureKeyCredential(Environment.GetEnvironmentVariable("CUSTOM_OPENAI_API_KEY"));
        var openAIClient = new AzureOpenAIClient(
            endpoint: new Uri("{{{baseURL}}}"),
            credential: credential
        );
        _openAI = openAIClient.GetChatClient("{{{model}}}");
{{/isAzureOpenAI}}
{{^isAzureOpenAI}}
        var apiKey = Environment.GetEnvironmentVariable("CUSTOM_OPENAI_API_KEY");
        var credential = new System.ClientModel.ApiKeyCredential(apiKey);
        var openAIClient = new OpenAIClient(credential, new OpenAIClientOptions
        {
            Endpoint = new Uri("{{{baseURL}}}")
        });
        _openAI = openAIClient.GetChatClient("{{{model}}}");
{{/isAzureOpenAI}}
    }

    /// <summary>
    /// Connect to an MCP server using STDIO transport
    /// </summary>
    /// <param name="serverId">Unique identifier for this server connection</param>
    /// <param name="command">Command to run the MCP server</param>
    /// <param name="args">Arguments for the command</param>
    /// <param name="env">Optional environment variables</param>
    public async Task ConnectStdioServerAsync(string serverId, string command, string[] args, Dictionary<string, string>? env = null)
    {
        var transportOptions = new StdioClientTransportOptions
        {
            Name = serverId,
            Command = command,
            Arguments = args
        };

        var transport = new StdioClientTransport(transportOptions);
        var client = await McpClientFactory.CreateAsync(transport);
        
        await RegisterServerAsync(serverId, client);
    }

    /// <summary>
    /// Connect to an MCP server using SSE transport
    /// </summary>
    /// <param name="serverId">Unique identifier for this server connection</param>
    /// <param name="url">URL of the SSE server</param>
    /// <param name="headers">Optional HTTP headers</param>
    public async Task ConnectSseServerAsync(string serverId, string url, Dictionary<string, string>? headers = null)
    {
        var transportOptions = new SseClientTransportOptions
        {
            Endpoint = new Uri(url)
        };

        var transport = new SseClientTransport(transportOptions);
        var client = await McpClientFactory.CreateAsync(transport);
        
        await RegisterServerAsync(serverId, client);
    }

    /// <summary>
    /// Connect to an MCP server using HTTP transport
    /// </summary>
    /// <param name="serverId">Unique identifier for this server connection</param>
    /// <param name="url">URL of the HTTP server</param>
    /// <param name="headers">Optional HTTP headers</param>
    public async Task ConnectHttpServerAsync(string serverId, string url, Dictionary<string, string>? headers = null)
    {
        var transportOptions = new SseClientTransportOptions
        {
            Endpoint = new Uri(url),
            TransportMode = HttpTransportMode.StreamableHttp,
            AdditionalHeaders = headers
        };

        var transport = new SseClientTransport(transportOptions);
        var client = await McpClientFactory.CreateAsync(transport);
        
        await RegisterServerAsync(serverId, client);
    }

    private async Task RegisterServerAsync(string serverId, IMcpClient client)
    {
        var tools = await client.ListToolsAsync();
        
        _servers[serverId] = new ServerInfo
        {
            Client = client,
            Tools = tools.ToList()
        };

        // Update tool-to-server mapping
        foreach (var tool in tools)
        {
            _toolToServerMap[tool.Name] = serverId;
        }

        Console.WriteLine($"\nConnected to server '{serverId}' with tools: {string.Join(", ", tools.Select(t => t.Name))}");
    }

    /// <summary>
    /// Chat with model using MCP tools
    /// </summary>
    /// <param name="messages">Messages to send to the model</param>
    public async Task ChatWithToolsAsync(List<ChatMessage> messages)
    {
        if (_servers.Count == 0)
        {
            throw new InvalidOperationException("No MCP servers connected. Connect to at least one server first.");
        }

        // Collect tools from all connected servers
        var availableTools = new List<ChatTool>();
        foreach (var (serverId, serverInfo) in _servers)
        {
            foreach (var tool in serverInfo.Tools)
            {
                availableTools.Add(ChatTool.CreateFunctionTool(
                    functionName: tool.Name,
                    functionDescription: tool.Description,
                    functionParameters: BinaryData.FromString("{}")
                ));
            }
        }

        while (true)
        {
            var options = new ChatCompletionOptions
            {
                Tools = { },
{{#response_format_json_schema}}
                ResponseFormat = ChatResponseFormat.CreateJsonSchemaFormat(
                    jsonSchemaFormatName: "{{{response_format_json_schema.name}}}",
                    jsonSchema: BinaryData.FromString({{{response_format_json_schema.schema}}}),
                    jsonSchemaIsStrict: {{{response_format_json_schema.strict}}},
                    jsonSchemaDescription: "{{{response_format_json_schema.description}}}"
                ),
{{/response_format_json_schema}}
{{#response_format_text}}
                ResponseFormat = ChatResponseFormat.Text,
{{/response_format_text}}
{{#parameters.temperature}}
                Temperature = {{.}}f,
{{/parameters.temperature}}
{{#parameters.top_p}}
                TopP = {{.}}f,
{{/parameters.top_p}}
{{#parameters.frequency_penalty}}
                FrequencyPenalty = {{.}}f,
{{/parameters.frequency_penalty}}
{{#parameters.presence_penalty}}
                PresencePenalty = {{.}}f,
{{/parameters.presence_penalty}}
{{#parameters.reasoning_effort}}
#pragma warning disable OPENAI001
                ReasoningEffortLevel = new ChatReasoningEffortLevel("{{.}}"),
#pragma warning restore OPENAI001
{{/parameters.reasoning_effort}}
            };

            foreach (var tool in availableTools)
            {
                options.Tools.Add(tool);
            }

            var response = await _openAI.CompleteChatAsync(messages, options);
            bool hasToolCall = false;

            if (response.Value.ToolCalls?.Count > 0)
            {
                hasToolCall = true;
                // Add assistant message with tool calls only once
                messages.Add(ChatMessage.CreateAssistantMessage(response.Value.ToolCalls));

                foreach (var toolCall in response.Value.ToolCalls)
                {
                    var toolName = toolCall.FunctionName;
                    var toolArgs = JsonSerializer.Deserialize<Dictionary<string, object>>(toolCall.FunctionArguments, _jsonOptions);

                    // Find the appropriate server for this tool
                    if (_toolToServerMap.TryGetValue(toolName, out var serverId))
                    {
                        var serverInfo = _servers[serverId];
                        var serverClient = serverInfo.Client;
                        
                        if (serverClient != null)
                        {
                            // Execute tool call on the appropriate server
                            var readOnlyArgs = toolArgs?.ToDictionary(kvp => kvp.Key, kvp => (object?)kvp.Value) as IReadOnlyDictionary<string, object?>;
                            var callResult = await serverClient.CallToolAsync(toolName, readOnlyArgs);

                            var resultContent = string.Join("\n", callResult.Content
                                .Where(c => c.Type == "text")
                                .Select(c => c is ModelContextProtocol.Protocol.TextContentBlock textBlock ? textBlock.Text : c.ToString()));
                            Console.WriteLine($"[Server '{serverId}' call tool '{toolName}' with args {JsonSerializer.Serialize(toolArgs, _jsonOptions)}]: {resultContent}");

                            messages.Add(ChatMessage.CreateToolMessage(toolCall.Id, resultContent));
                        }
                    }
                }
            }
            else
            {
                messages.Add(ChatMessage.CreateAssistantMessage(response.Value.Content[0].Text));
                Console.WriteLine($"[Model Response]: {response.Value.Content[0].Text}");
            }

            if (!hasToolCall)
            {
                break;
            }
        }
    }

    public void Dispose()
    {
        foreach (var (serverId, serverInfo) in _servers)
        {
            try
            {
                if (serverInfo.Client is IDisposable disposable)
                {
                    disposable.Dispose();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error disposing server '{serverId}': {ex.Message}");
            }
        }
    }
}