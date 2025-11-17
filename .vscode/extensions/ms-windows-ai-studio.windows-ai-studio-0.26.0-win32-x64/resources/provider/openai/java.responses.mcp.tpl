/**
 * Connect model with mcp tools in Java
 * 
 * Required Dependencies (for Maven):
 *   <dependency>
 *     <groupId>com.openai</groupId>
 *     <artifactId>openai-java</artifactId>
 *     <version>3.1.2</version>
 *   </dependency>
 *   <dependency>
 *     <groupId>io.modelcontextprotocol.sdk</groupId>
 *     <artifactId>mcp</artifactId>
 *     <version>0.11.2</version>
 *   </dependency>
 * 
 * How to build and run with Maven:
 *   mvn compile      # Compile the project
 *   mvn exec:java    # Run the project
 */

import com.openai.client.OpenAIClient;
import com.openai.client.okhttp.OpenAIOkHttpClient;
import com.openai.models.*;
import com.openai.models.responses.*;
import com.openai.core.JsonValue;
{{#hasImage}}
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Base64;
{{/hasImage}}

import io.modelcontextprotocol.client.McpClient;
import io.modelcontextprotocol.client.McpSyncClient;
import io.modelcontextprotocol.client.transport.StdioClientTransport;
import io.modelcontextprotocol.client.transport.HttpClientSseClientTransport;
import io.modelcontextprotocol.client.transport.HttpClientStreamableHttpTransport;
import io.modelcontextprotocol.client.transport.ServerParameters;
import io.modelcontextprotocol.spec.McpSchema;
import java.time.Duration;

import java.util.*;
import java.util.concurrent.CompletableFuture;
import java.util.stream.Collectors;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.core.type.TypeReference;

public class Main {
    
    private static final String API_KEY = System.getenv("OPENAI_API_KEY");
    private static List<ResponseInputItem> inputs = new ArrayList<>();

{{#hasImage}}
    private static String getImageMimeType(String filePath) {
        String extension = filePath.substring(filePath.lastIndexOf('.') + 1).toLowerCase();
        switch (extension) {
            case "png":
                return "image/png";
            case "jpg":
            case "jpeg":
                return "image/jpeg";
            case "gif":
                return "image/gif";
            case "bmp":
                return "image/bmp";
            case "webp":
                return "image/webp";
            case "tiff":
            case "tif":
                return "image/tiff";
            case "svg":
                return "image/svg+xml";
            default:
                return "image/png"; // Default to PNG
        }
    }

    private static String encodeImageToBase64(String imagePath) {
        try {
            byte[] imageBytes = Files.readAllBytes(Paths.get(imagePath));
            return Base64.getEncoder().encodeToString(imageBytes);
        } catch (Exception e) {
            throw new RuntimeException("Failed to read image file: " + imagePath, e);
        }
    }

{{/hasImage}}
    private static Map<String, Object> parseJsonString(String jsonString) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            return mapper.readValue(jsonString, new TypeReference<Map<String, Object>>() {});
        } catch (Exception e) {
            System.err.println("Error parsing JSON string: " + e.getMessage());
            return new HashMap<>();
        }
    }

    public static void main(String[] args) {
        try {
            MCPClient mcpClient = new MCPClient();

            // Create response request builder
            ResponseCreateParams.Builder paramsBuilder = ResponseCreateParams.builder()
                .model("{{{model}}}");
{{#parameters.systemWithQuote}}
{{#o1}}
            ResponseInputItem systemMessage = ResponseInputItem.ofMessage(
                ResponseInputItem.Message.builder()
                    .role(ResponseInputItem.Message.Role.USER)
                    .addInputTextContent({{{parameters.systemWithQuote}}})
                    .build()
            );
{{/o1}}
{{^o1}}
            ResponseInputItem systemMessage = ResponseInputItem.ofMessage(
                ResponseInputItem.Message.builder()
                    .role(ResponseInputItem.Message.Role.SYSTEM)
                    .addInputTextContent({{{parameters.systemWithQuote}}})
                    .build()
            );
{{/o1}}
            inputs.add(systemMessage);
{{/parameters.systemWithQuote}}
{{#messages}}
{{#isUser}}
{{#content}}
{{#isText}}
            inputs.add(ResponseInputItem.ofMessage(
                ResponseInputItem.Message.builder()
                    .role(ResponseInputItem.Message.Role.USER)
                    .addInputTextContent({{{textWithQuote}}})
                    .build()
            ));
{{/isText}}
{{#isImage}}
            ResponseInputImage inputImage = ResponseInputImage.builder()
                .detail(ResponseInputImage.Detail.AUTO)
                .imageUrl("data:" + getImageMimeType({{{localPathWithQuote}}}) + ";base64," + encodeImageToBase64({{{localPathWithQuote}}}))
                .build();
            
            inputs.add(ResponseInputItem.ofMessage(
                ResponseInputItem.Message.builder()
                    .role(ResponseInputItem.Message.Role.USER)
                    .addContent(inputImage)
                    .build()
            ));
{{/isImage}}
{{/content}}
{{/isUser}}
{{#isAssistant}}
{{#isContent}}
{{#content}}
            inputs.add(ResponseInputItem.ofEasyInputMessage(EasyInputMessage.builder()
                .role(EasyInputMessage.Role.ASSISTANT)
                .content({{{textWithQuote}}})
                .build()
            ));
{{/content}}
{{/isContent}}
{{#tool_calls}}
            inputs.add(ResponseInputItem.ofFunctionCall(ResponseFunctionToolCall.builder()
                .callId("{{{id}}}")
                .name("{{{function.name}}}")
                .arguments({{{function.arguments}}})
                .build()
            ));
{{/tool_calls}}
{{/isAssistant}}
{{#isTool}}
            inputs.add(ResponseInputItem.ofFunctionCallOutput(ResponseInputItem.FunctionCallOutput.builder()
                .callId("{{{tool_call_id}}}")
                .output({{{output}}})
                .build()
            ));
{{/isTool}}
{{/messages}}
            paramsBuilder.inputOfResponse(inputs);

            try {
                Map<String, String> headers = new HashMap<>();
{{#mcpConfigs}}
{{#isStdio}}
{{#env}}
                headers.put("{{{.}}}", System.getenv("{{{.}}}"));
{{/env}}
                mcpClient.connectStdioServer(
                    "{{{serverName}}}",
                    {{{commandWithQuote}}},
                    new String[] {
{{#argsWithQuote}}
                        {{{.}}},
{{/argsWithQuote}}
                    },
                    headers
                ).get();
                headers.clear();
{{/isStdio}}
{{#isSse}}
{{#headers}}
{{#isAuthorization}}
                headers.put("{{key}}", "Bearer " + System.getenv("YOUR_AUTH_TOKEN"));
{{/isAuthorization}}
{{^isAuthorization}}
                headers.put("{{key}}", "{{value}}");
{{/isAuthorization}}
{{/headers}}
                mcpClient.connectSseServer(
                    "{{{serverName}}}",
                    {{{urlWithQuote}}},
                    headers
                ).get();
                headers.clear();
{{/isSse}}
{{#isHttp}}
{{#headers}}
{{#isAuthorization}}
                headers.put("{{key}}", "Bearer " + System.getenv("YOUR_AUTH_TOKEN"));
{{/isAuthorization}}
{{^isAuthorization}}
                headers.put("{{key}}", "{{value}}");
{{/isAuthorization}}
{{/headers}}
                mcpClient.connectHttpServer(
                    "{{{serverName}}}",
                    {{{urlWithQuote}}},
                    headers
                ).get();
                headers.clear();
{{/isHttp}}
{{/mcpConfigs}}
                mcpClient.chatWithTools(paramsBuilder).get();
            } catch (Exception ex) {
                System.err.println("\nError: " + ex.getMessage());
                ex.printStackTrace();
            } finally {
                mcpClient.dispose();
                Thread.sleep(1000);
            }
            
        } catch (Exception e) {
            System.err.println("Error: " + e.getMessage());
            e.printStackTrace();
        } finally {
            // Add a small delay to allow pending operations to complete
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
            
            // Force exit to ensure all threads are terminated
            System.exit(0);
        }
    }

    public static class MCPClient {
        private final Map<String, ServerInfo> servers = new HashMap<>();
        private final Map<String, String> toolToServerMap = new HashMap<>();
        private final OpenAIClient openAIClient;
        private final ObjectMapper objectMapper = new ObjectMapper();

        public static class ServerInfo {
            public McpSyncClient client;
            public List<McpSchema.Tool> tools = new ArrayList<>();
        }

        public MCPClient() {
            this.openAIClient = OpenAIOkHttpClient.builder()
                .apiKey(API_KEY)
                .build();
        }

        /**
         * Connect to an MCP server using STDIO transport
         * @param serverId Unique identifier for this server connection
         * @param command Command to run the MCP server
         * @param args Arguments for the command
         * @param env Optional environment variables
         */
        public CompletableFuture<Void> connectStdioServer(String serverId, String command, String[] args, Map<String, String> env) {
            return CompletableFuture.supplyAsync(() -> {
                try {
                    // Handle Windows npx command
                    String finalCommand = command;
                    if (command.equals("npx") && System.getProperty("os.name").toLowerCase().contains("windows")) {
                        finalCommand = "npx.cmd";
                    }
                    
                    // Create server parameters
                    ServerParameters.Builder paramsBuilder = ServerParameters.builder(finalCommand);
                    if (args != null && args.length > 0) {
                        paramsBuilder.args(args);
                    }
                    if (env != null && !env.isEmpty()) {
                        paramsBuilder.env(env);
                    }
                    ServerParameters params = paramsBuilder.build();

                    // Create transport and client
                    StdioClientTransport transport = new StdioClientTransport(params);
                    McpSyncClient client = McpClient.sync(transport)
                        .requestTimeout(Duration.ofSeconds(30))
                        .build();
                    
                    // Initialize client
                    client.initialize();
                    
                    registerServer(serverId, client);
                    return null;
                } catch (Exception e) {
                    throw new RuntimeException(e);
                }
            });
        }

        /**
         * Connect to an MCP server using SSE transport
         * @param serverId Unique identifier for this server connection
         * @param url URL of the SSE server
         * @param headers Optional HTTP headers
         */
        public CompletableFuture<Void> connectSseServer(String serverId, String url, Map<String, String> headers) {
            return CompletableFuture.supplyAsync(() -> {
                try {
                    // Create SSE transport using builder pattern
                    HttpClientSseClientTransport transport = HttpClientSseClientTransport.builder(url)
                        .sseEndpoint("/sse")
                        .customizeClient(client -> {
                            client.connectTimeout(Duration.ofSeconds(30));
                            client.version(java.net.http.HttpClient.Version.HTTP_1_1);
                        })
                        .build();
                    
                    McpSyncClient client = McpClient.sync(transport)
                        .requestTimeout(Duration.ofSeconds(60))
                        .build();
                    
                    // Initialize client
                    client.initialize();
                    
                    registerServer(serverId, client);
                    return null;
                } catch (Exception e) {
                    throw new RuntimeException(e);
                }
            });
        }

        /**
         * Connect to an MCP server using HTTP transport
         * @param serverId Unique identifier for this server connection
         * @param url URL of the HTTP server
         * @param headers Optional HTTP headers
         */
        public CompletableFuture<Void> connectHttpServer(String serverId, String url, Map<String, String> headers) {
            return CompletableFuture.supplyAsync(() -> {
                try {
                    // Create HTTP transport using builder pattern
                    HttpClientStreamableHttpTransport transport = HttpClientStreamableHttpTransport.builder(url)
                        .customizeRequest(request -> {
                            headers.forEach(request::header);
                        })
                        .build();
                    
                    McpSyncClient client = McpClient.sync(transport)
                        .requestTimeout(Duration.ofSeconds(60))
                        .build();
                    
                    // Initialize client
                    client.initialize();
                    
                    registerServer(serverId, client);
                    return null;
                } catch (Exception e) {
                    throw new RuntimeException(e);
                }
            });
        }

        private void registerServer(String serverId, McpSyncClient client) throws Exception {
            // List available tools
            McpSchema.ListToolsResult toolsResult = client.listTools();
            List<McpSchema.Tool> tools = toolsResult.tools();
            
            ServerInfo serverInfo = new ServerInfo();
            serverInfo.client = client;
            serverInfo.tools = tools;
            servers.put(serverId, serverInfo);

            // Update tool-to-server mapping
            for (McpSchema.Tool tool : tools) {
                toolToServerMap.put(tool.name(), serverId);
            }

            String toolNames = tools.stream().map(McpSchema.Tool::name).collect(Collectors.joining(", "));
            System.out.println(String.format("\nConnected to server '%s' with tools: %s", serverId, toolNames));
        }

        /**
         * Chat with model using MCP tools
         * @param initialParamsBuilder Initial response parameters builder
         */
        public CompletableFuture<Void> chatWithTools(ResponseCreateParams.Builder initialParamsBuilder) {
            return CompletableFuture.supplyAsync(() -> {
                try {
                    if (servers.isEmpty()) {
                        throw new IllegalStateException("No MCP servers connected. Connect to at least one server first.");
                    }

                    // Collect tools from all connected servers
                    List<FunctionTool> availableTools = new ArrayList<>();
                    for (Map.Entry<String, ServerInfo> entry : servers.entrySet()) {
                        ServerInfo serverInfo = entry.getValue();
                        for (McpSchema.Tool tool : serverInfo.tools) {
                            Map<String, Object> parametersMap = new HashMap<>();
                            if (tool.inputSchema() != null) {
                                parametersMap = objectMapper.convertValue(tool.inputSchema(), new TypeReference<Map<String, Object>>() {});
                            } else {
                                parametersMap.put("type", "object");
                                parametersMap.put("properties", new HashMap<>());
                            }
                            
                            FunctionTool functionTool = FunctionTool.builder()
                                .name(tool.name())
                                .description(tool.description())
                                .parameters(JsonValue.from(parametersMap))
                                .strict(false)
                                .build();
                            
                            availableTools.add(functionTool);
                        }
                    }

                    // Add tools to the initial params builder
                    for (FunctionTool tool : availableTools) {
                        initialParamsBuilder.addTool(tool);
                    }

                    ResponseTextConfig.Builder responseTextConfig = ResponseTextConfig.builder();
{{#response_format_json_schema}}
                    responseTextConfig.format(ResponseFormatTextJsonSchemaConfig.builder()
                        .name("response_schema")
                        .schema(JsonValue.from(parseJsonString({{{schema}}})))
                        .strict({{{strict}}})
                        .build());
{{/response_format_json_schema}}
{{#response_format_text}}
                    responseTextConfig.format(ResponseFormatText.builder()
                        .build());
{{/response_format_text}}
{{#parameters.verbosity}}
                    responseTextConfig.verbosity(ResponseTextConfig.Verbosity.of("{{.}}"));
{{/parameters.verbosity}}
                    initialParamsBuilder.text(responseTextConfig.build());
                    initialParamsBuilder.reasoning(Reasoning.builder()
{{#parameters.reasoning_effort}}
                        .effort(ReasoningEffort.of("{{.}}"))
{{/parameters.reasoning_effort}}
{{#parameters.reasoning_summary}}
                        .summary(Reasoning.Summary.of("{{.}}"))
{{/parameters.reasoning_summary}}
                        .build());
{{#parameters.max_tokens}}
                    initialParamsBuilder.maxOutputTokens({{parameters.max_tokens}});
{{/parameters.max_tokens}}
{{#parameters.temperature}}
                    initialParamsBuilder.temperature({{.}}d);
{{/parameters.temperature}}
{{#parameters.top_p}}
                    initialParamsBuilder.topP({{.}}d);
{{/parameters.top_p}}

                    while (true) {
                        Response response = openAIClient.responses().create(initialParamsBuilder.build());
                        ResponseOutputItem output = response.output().get(0);
                        
                        if (output.isFunctionCall()) {
                            System.out.println("Tool calls:");
                            
                            // Add assistant message with tool calls
                            ResponseFunctionToolCall toolCall = output.asFunctionCall();
                            inputs.add(ResponseInputItem.ofFunctionCall(toolCall));
                            System.out.println("  " + toolCall.name() + ": " + toolCall.arguments());

                            String toolName = toolCall.name();
                            Map<String, Object> toolArgs;
                            try {
                                toolArgs = objectMapper.readValue(toolCall.arguments() != null ? toolCall.arguments() : "{}", new TypeReference<Map<String, Object>>() {});
                            } catch (Exception e) {
                                toolArgs = new HashMap<>();
                            }

                            // Find the appropriate server for this tool
                            String serverId = toolToServerMap.get(toolName);
                            if (serverId != null) {
                                ServerInfo serverInfo = servers.get(serverId);
                                McpSyncClient serverClient = serverInfo.client;

                                // Execute tool call on the appropriate server
                                McpSchema.CallToolRequest request = new McpSchema.CallToolRequest(toolName, toolArgs);
                                McpSchema.CallToolResult callResult = serverClient.callTool(request);

                                // Process content to handle different content types
                                String resultContent = callResult.content().stream()
                                    .map(content -> {
                                        if (content instanceof McpSchema.TextContent) {
                                            return ((McpSchema.TextContent) content).text();
                                        } else if (content instanceof McpSchema.ImageContent) {
                                            return "[Image: " + ((McpSchema.ImageContent) content).data() + "]";
                                        }
                                        return content.toString();
                                    })
                                    .collect(Collectors.joining("\n"));

                                System.out.println(String.format("[Server '%s' call tool '%s' with args %s]: %s", 
                                    serverId, toolName, objectMapper.writeValueAsString(toolArgs), resultContent));

                                inputs.add(ResponseInputItem.ofFunctionCallOutput(ResponseInputItem.FunctionCallOutput.builder()
                                    .callId(toolCall.callId())
                                    .outputAsJson(resultContent)
                                    .build()));
                            } else {
                                System.err.println("Tool not found: " + toolName);
                                inputs.add(ResponseInputItem.ofFunctionCallOutput(ResponseInputItem.FunctionCallOutput.builder()
                                    .callId(toolCall.callId())
                                    .outputAsJson("Tool '" + toolName + "' is not implemented.")
                                    .build()));
                            }
                            initialParamsBuilder.inputOfResponse(inputs);
                        } else if (output.isReasoning()) {
                            ResponseReasoningItem reasoning = output.asReasoning();
                            System.out.println("[Model Response] Summary:" + reasoning.summary() + ". Content:" + reasoning.content());
                            break;
                        } else {
                            output.message().stream()
                                .flatMap(message -> message.content().stream())
                                .flatMap(content -> content.outputText().stream())
                                .forEach(outputText -> System.out.println("[Model Response] " + outputText.text()));
                            break;
                        }
                    }
                    
                    return null;
                } catch (Exception e) {
                    throw new RuntimeException(e);
                }
            });
        }

        public void dispose() {
            for (Map.Entry<String, ServerInfo> entry : servers.entrySet()) {
                String serverId = entry.getKey();
                ServerInfo serverInfo = entry.getValue();
                try {
                    if (serverInfo.client != null) {
                        // Use proper graceful close
                        serverInfo.client.closeGracefully();
                    }
                } catch (Exception ex) {
                    System.err.println(String.format("Error disposing server '%s': %s", serverId, ex.getMessage()));
                }
            }
        }
    }
}
