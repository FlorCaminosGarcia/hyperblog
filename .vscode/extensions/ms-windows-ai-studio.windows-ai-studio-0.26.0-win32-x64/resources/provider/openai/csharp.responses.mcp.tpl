/**
 * Connect model with mcp tools in .NET 10
 * # Run this script
 * > dotnet run <this-script-path>.cs
 */

#:package OpenAI@*-*
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
using OpenAI;
using OpenAI.Responses;
using ModelContextProtocol;
using ModelContextProtocol.Client;
using ModelContextProtocol.Protocol;

// This example uses experimental APIs which are subject to change. To use experimental APIs,
// please acknowledge their experimental status by suppressing the corresponding warning.
#pragma warning disable OPENAI001
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

// Initialize MCP clients for each server
var mcpClients = new List<IMcpClient>();

/// <summary>
/// Connect to an MCP server using STDIO transport
/// </summary>
/// <param name="serverId">Unique identifier for this server connection</param>
/// <param name="command">Command to run the MCP server</param>
/// <param name="args">Arguments for the command</param>
/// <param name="env">Optional environment variables</param>
async Task ConnectStdioServerAsync(string serverId, string command, string[] args, Dictionary<string, string>? env = null)
{
    var transportOptions = new StdioClientTransportOptions
    {
        Name = serverId,
        Command = command,
        Arguments = args ?? Array.Empty<string>()
    };

    var transport = new StdioClientTransport(transportOptions);
    var client = await McpClientFactory.CreateAsync(transport);

    mcpClients.Add(client);
    Console.WriteLine($"Connected to {serverId} MCP server");
}

/// <summary>
/// Connect to an MCP server using SSE transport
/// </summary>
/// <param name="serverId">Unique identifier for this server connection</param>
/// <param name="url">URL of the SSE server</param>
/// <param name="headers">Optional HTTP headers</param>
async Task ConnectSseServerAsync(string serverId, string url, Dictionary<string, string>? headers = null)
{
    var transportOptions = new SseClientTransportOptions
    {
        Endpoint = new Uri(url)
    };

    var transport = new SseClientTransport(transportOptions);
    var client = await McpClientFactory.CreateAsync(transport);

    mcpClients.Add(client);
    Console.WriteLine($"Connected to {serverId} MCP server");
}

/// <summary>
/// Connect to an MCP server using HTTP transport
/// </summary>
/// <param name="serverId">Unique identifier for this server connection</param>
/// <param name="url">URL of the HTTP server</param>
/// <param name="headers">Optional HTTP headers</param>
async Task ConnectHttpServerAsync(string serverId, string url, Dictionary<string, string>? headers = null)
{
    var transportOptions = new SseClientTransportOptions
    {
        Endpoint = new Uri(url),
        TransportMode = HttpTransportMode.StreamableHttp,
        AdditionalHeaders = headers
    };

    var transport = new SseClientTransport(transportOptions);
    var client = await McpClientFactory.CreateAsync(transport);

    mcpClients.Add(client);
    Console.WriteLine($"Connected to {serverId} MCP server");
}

try
{
{{#mcpConfigs}}
{{#isStdio}}
    await ConnectStdioServerAsync(
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
    await ConnectSseServerAsync(
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
    await ConnectHttpServerAsync(
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

    // Collect all available tools from all MCP servers
    var allMcpTools = new List<McpClientTool>();
    foreach (var mcpClient in mcpClients)
    {
        var mcpTools = await mcpClient.ListToolsAsync();
        allMcpTools.AddRange(mcpTools);
    }

    Console.WriteLine($"Available MCP tools: {string.Join(", ", allMcpTools.Select(t => t.Name))}");

var credential = new System.ClientModel.ApiKeyCredential(Environment.GetEnvironmentVariable("OPENAI_API_KEY"));
var openAIClient = new OpenAIClient(credential);
var client = openAIClient.GetOpenAIResponseClient("{{{model}}}");

var messages = new List<ResponseItem>
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
{{/isContent}}
{{/isAssistant}}
{{#isTool}}
    ResponseItem.CreateFunctionCallOutputItem("{{{tool_call_id}}}", {{{output}}}),
{{/isTool}}
{{/messages}}
};

    // Convert MCP tools to ChatTool format
    var tools = new List<ResponseTool>();
    foreach (var mcpTool in allMcpTools)
    {
        var responseTool = ResponseTool.CreateFunctionTool(
            functionName: mcpTool.Name,
            functionDescription: mcpTool.Description,
            functionParameters: BinaryData.FromString(JsonSerializer.Serialize(mcpTool.JsonSchema))
        );
        tools.Add(responseTool);
    }

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

        foreach (var tool in tools)
        {
            options.Tools.Add(tool);
        }

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
            ReasoningEffortLevel = new ResponseReasoningEffortLevel("{{.}}"),
{{/parameters.reasoning_effort}}
{{#parameters.reasoning_summary}}
            ReasoningSummaryVerbosity = new ResponseReasoningSummaryVerbosity("{{.}}"),
{{/parameters.reasoning_summary}}
        };

        var response = await client.CreateResponseAsync(messages, options);

        if (response.Value.OutputItems.Count(item => item is FunctionCallResponseItem) > 0)
        {
            Console.WriteLine("Tool calls:");
            messages.AddRange(response.Value.OutputItems);

            foreach (var item in response.Value.OutputItems)
            {
                if (item is FunctionCallResponseItem functionCall)
                {
                    Console.WriteLine($"  Calling tool: {functionCall.FunctionName}");

                    try
                    {
                        // Find which MCP client has this tool
                        var mcpClient = mcpClients.FirstOrDefault(c => 
                            c.ListToolsAsync().Result.Any(t => t.Name == functionCall.FunctionName));
                        
                        if (mcpClient != null)
                        {
                            // Parse arguments for MCP call
                            var functionArguments = JsonSerializer.Deserialize<Dictionary<string, object>>(
                                functionCall.FunctionArguments.ToString() ?? "{}", jsonOptions);
                            
                            // Call the MCP tool
                            var result = await mcpClient.CallToolAsync(
                                functionCall.FunctionName, 
                                functionArguments);
                            
                            // Extract text content from result
                            var resultText = string.Join("\n", 
                                result.Content.Where(c => c.Type == "text").Select(c => c is TextContentBlock text ? text.Text : ""));
                            
                            messages.Add(ResponseItem.CreateFunctionCallOutputItem(functionCall.CallId, resultText));
                            Console.WriteLine($"  Tool result: {resultText}");
                        }
                        else
                        {
                            var errorMsg = $"Tool '{functionCall.FunctionName}' not found in any MCP server";
                            messages.Add(ResponseItem.CreateFunctionCallOutputItem(functionCall.CallId, errorMsg));
                            Console.WriteLine($"  Error: {errorMsg}");
                        }
                    }
                    catch (Exception ex)
                    {
                        var errorMsg = $"Error calling tool {functionCall.FunctionName}: {ex.Message}";
                        messages.Add(ResponseItem.CreateFunctionCallOutputItem(functionCall.CallId, errorMsg));
                        Console.WriteLine($"  Error: {errorMsg}");
                    }
                }
            }
        }
        else
        {
            Console.WriteLine($"[Model Response] {response.Value.GetOutputText()}");
            break;
        }
    }
}
finally
{
    // Clean up MCP clients
    foreach (var mcpClient in mcpClients)
    {
        try
        {
            if (mcpClient is IDisposable disposable)
            {
                disposable.Dispose();
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error disposing MCP client: {ex.Message}");
        }
    }
}

#pragma warning restore OPENAI001