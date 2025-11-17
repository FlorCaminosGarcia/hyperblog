/**
 * Connect model with mcp tools in .NET 10
 * # Run this script
 * > dotnet run <this-script-path>.cs
 */

#:package Azure.AI.Inference@*-*
#:package Azure.Core@*
#:package ModelContextProtocol@*-*

using System;
using System.Collections.Generic;
{{#hasImage}}
using System.IO;
{{/hasImage}}
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Text.Json.Serialization.Metadata;
using System.Threading.Tasks;
using Azure;
using Azure.AI.Inference;
using Azure.Core;
using ModelContextProtocol;
using ModelContextProtocol.Client;
using System.Threading;

{{#hasImage}}
static BinaryData EncodeImage(string path, string mimeType)
{
    byte[] imageBuffer = File.ReadAllBytes(path);
    return BinaryData.FromBytes(imageBuffer);
}

{{/hasImage}}
// Main execution
var client = new MCPClient();
var messages = new List<ChatRequestMessage>
{
{{#parameters.systemWithQuote}}
{{#o1}}
    new ChatRequestUserMessage({{{parameters.systemWithQuote}}}),
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
            ["{{.}}"] = Environment.GetEnvironmentVariable("{{.}}"),
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
public class MCPClient
{
    private readonly Dictionary<string, ServerInfo> _servers = new();
    private readonly Dictionary<string, string> _toolToServerMap = new();
    private readonly ChatCompletionsClient _chatClient;
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
        var endpoint = new Uri("{{{endpoint}}}");
        var credential = new AzureKeyCredential(Environment.GetEnvironmentVariable("AZURE_AI_API_KEY"));

        _chatClient = new ChatCompletionsClient(endpoint, credential);
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
            Arguments = args ?? Array.Empty<string>()
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
    public async Task ChatWithToolsAsync(List<ChatRequestMessage> messages)
    {
        if (_servers.Count == 0)
        {
            throw new InvalidOperationException("No MCP servers connected. Connect to at least one server first.");
        }

        // Collect tools from all connected servers
        var availableTools = new List<ChatCompletionsToolDefinition>();
        foreach (var (serverId, serverInfo) in _servers)
        {
            foreach (var tool in serverInfo.Tools)
            {
                var functionDef = new FunctionDefinition
                {
                    Name = tool.Name,
                    Description = tool.Description,
                    // Create a basic parameters schema if tool doesn't have one
                    Parameters = BinaryData.FromString("{\"type\": \"object\", \"properties\": {}}")
                };
                
                var toolDefinition = new ChatCompletionsToolDefinition(functionDef);
                availableTools.Add(toolDefinition);
            }
        }

        while (true)
        {
            var options = new ChatCompletionsOptions();

            // Set model name
            options.Model = "{{{model}}}";

            foreach (var message in messages)
            {
                options.Messages.Add(message);
            }

            foreach (var tool in availableTools)
            {
                options.Tools.Add(tool);
            }

{{#response_format_json_schema}}
            options.ResponseFormat = new ChatCompletionsResponseFormatJsonObject();
{{/response_format_json_schema}}
{{#response_format_text}}
            options.ResponseFormat = new ChatCompletionsResponseFormatText();
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

            var response = await _chatClient.CompleteAsync(options);
            var result = response.Value;
            bool hasToolCall = false;

            if (result.FinishReason == CompletionsFinishReason.ToolCalls)
            {
                hasToolCall = true;
                // Add assistant message with tool calls only once
                var assistantMessage = new ChatRequestAssistantMessage(result.Content ?? "");
                foreach (var tc in result.ToolCalls ?? [])
                {
                    assistantMessage.ToolCalls.Add(tc);
                }
                messages.Add(assistantMessage);

                foreach (var toolCall in result.ToolCalls ?? [])
                {
                    var toolName = toolCall.Function.Name;
                    var toolArgs = JsonSerializer.Deserialize<Dictionary<string, object>>(toolCall.Function.Arguments ?? "{}", _jsonOptions);

                    // Find the appropriate server for this tool
                    if (_toolToServerMap.TryGetValue(toolName, out var serverId))
                    {
                        var serverClient = _servers[serverId].Client;

                        // Execute tool call on the appropriate server
                        var callResult = await serverClient.CallToolAsync(toolName, toolArgs ?? new Dictionary<string, object>());

                        // Improved content processing to handle TextContentBlock properly
                        var resultContent = string.Join("\n", callResult.Content.Select(c => 
                        {
                            if (c is ModelContextProtocol.Protocol.TextContentBlock textBlock)
                            {
                                return textBlock.Text ?? "";
                            }
                            return c.ToString() ?? "";
                        }));
                        Console.WriteLine($"[Server '{serverId}' call tool '{toolName}' with args {JsonSerializer.Serialize(toolArgs, _jsonOptions)}]: {resultContent}");

                        messages.Add(new ChatRequestToolMessage(resultContent, toolCall.Id));
                    }
                }
            }
            else
            {
                messages.Add(new ChatRequestAssistantMessage(result.Content ?? ""));
                Console.WriteLine($"[Model Response]: {result.Content}");
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
                if (serverInfo.Client != null)
                {
                    // Note: IMcpClient doesn't implement IDisposable directly
                    // We'll need to handle disposal differently if needed
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error disposing server '{serverId}': {ex.Message}");
            }
        }
    }
}