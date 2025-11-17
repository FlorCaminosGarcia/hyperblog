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
import com.openai.models.chat.completions.*;
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
            
            // Create chat completion request builder
            ChatCompletionCreateParams.Builder paramsBuilder = ChatCompletionCreateParams.builder()
                .model("{{{model}}}");
{{#parameters.systemWithQuote}}
{{#o1}}
            paramsBuilder.addUserMessage({{{parameters.systemWithQuote}}});
{{/o1}}
{{^o1}}
            paramsBuilder.addSystemMessage({{{parameters.systemWithQuote}}});
{{/o1}}
{{/parameters.systemWithQuote}}
{{#messages}}
{{#isUser}}
{{#content}}
{{#isText}}
            // Create user message with text content
            paramsBuilder.addUserMessageOfArrayOfContentParts(List.of(
                ChatCompletionContentPart.ofText(
                    ChatCompletionContentPartText.builder()
                        .text({{{textWithQuote}}})
                        .build()
                )
            ));
{{/isText}}
{{#isImage}}
            paramsBuilder.addUserMessageOfArrayOfContentParts(List.of(
                ChatCompletionContentPart.ofImageUrl(
                    ChatCompletionContentPartImage.builder()
                        .imageUrl(ChatCompletionContentPartImage.ImageUrl.builder()
                            .url("data:" + getImageMimeType({{{localPathWithQuote}}}) + ";base64," + encodeImageToBase64({{{localPathWithQuote}}}))
                            .build())
                        .build()
                )
            ));
{{/isImage}}
{{/content}}
{{/isUser}}
{{#isAssistant}}
{{^tool_calls}}
{{#content}}
            paramsBuilder.addAssistantMessage({{{textWithQuote}}});
{{/content}}            
{{/tool_calls}}
{{#tool_calls}}
            paramsBuilder.addMessage(ChatCompletionAssistantMessageParam.builder()
                .addToolCall(ChatCompletionMessageToolCall.ofFunction(ChatCompletionMessageFunctionToolCall.builder()
                    .id("{{{id}}}")
                    .type(JsonValue.from("function"))
                    .function(
                        ChatCompletionMessageFunctionToolCall.Function.builder()
                            .name("{{{function.name}}}")
                            .arguments({{{function.arguments}}})
                            .build())
                    .build()))
                .build());
{{/tool_calls}}
{{/isAssistant}}
{{#isTool}}
            paramsBuilder.addMessage(ChatCompletionToolMessageParam.builder()
                .toolCallId("{{{tool_call_id}}}")
                .content({{#content}}{{{textWithQuote}}}{{/content}})
                .build());
{{/isTool}}
{{/messages}}

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
         * @param initialParamsBuilder Initial chat completion parameters builder
         */
        public CompletableFuture<Void> chatWithTools(ChatCompletionCreateParams.Builder initialParamsBuilder) {
            return CompletableFuture.supplyAsync(() -> {
                try {
                    if (servers.isEmpty()) {
                        throw new IllegalStateException("No MCP servers connected. Connect to at least one server first.");
                    }

                    // Collect tools from all connected servers
                    List<ChatCompletionTool> availableTools = new ArrayList<>();
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
                            
                            ChatCompletionTool chatTool = ChatCompletionTool.ofFunction(ChatCompletionFunctionTool.builder()
                                .function(FunctionDefinition.builder()
                                    .name(tool.name())
                                    .description(tool.description())
                                    .parameters(JsonValue.from(parametersMap))
                                    .build())
                                .build());
                            
                            availableTools.add(chatTool);
                        }
                    }

                    // Add tools to the initial params builder
                    for (ChatCompletionTool tool : availableTools) {
                        initialParamsBuilder.addTool(tool);
                    }

{{#response_format_json_schema}}
                    initialParamsBuilder.responseFormat(ResponseFormatJsonSchema.builder()
                        .jsonSchema(ResponseFormatJsonSchema.JsonSchema.builder()
                                .name("response_schema")
                                .schema(JsonValue.from(parseJsonString({{{response_format_json_schema}}})))
                                .build())
                        .type(JsonValue.from("jsonSchema"))
                        .build());
{{/response_format_json_schema}}
{{#response_format_text}}
                    initialParamsBuilder.responseFormat(ResponseFormatText.builder()
                        .type(JsonValue.from("text"))
                        .build());
{{/response_format_text}}
{{#parameters.max_tokens}}
                    initialParamsBuilder.maxTokens({{parameters.max_tokens}});
{{/parameters.max_tokens}}
{{#parameters.temperature}}
                    initialParamsBuilder.temperature({{.}}d);
{{/parameters.temperature}}
{{#parameters.top_p}}
                    initialParamsBuilder.topP({{.}}d);
{{/parameters.top_p}}
{{#parameters.frequency_penalty}}
                    initialParamsBuilder.frequencyPenalty({{.}}d);
{{/parameters.frequency_penalty}}
{{#parameters.presence_penalty}}
                    initialParamsBuilder.presencePenalty({{.}}d);
{{/parameters.presence_penalty}}
{{#parameters.reasoning_effort}}
                    initialParamsBuilder.reasoningEffort(ReasoningEffort.of("{{.}}"));
{{/parameters.reasoning_effort}}
{{#parameters.verbosity}}
                    initialParamsBuilder.verbosity(ChatCompletionCreateParams.Verbosity.of("{{.}}"));
{{/parameters.verbosity}}

                    while (true) {
                        ChatCompletion completion = openAIClient.chat().completions().create(initialParamsBuilder.build());
                        ChatCompletion.Choice choice = completion.choices().get(0);
                        
                        if (choice.message().toolCalls().isPresent() && choice.message().toolCalls().get().size() > 0) {
                            System.out.println("Tool calls:");
                            
                            // Add assistant message with tool calls
                            initialParamsBuilder.addMessage(ChatCompletionAssistantMessageParam.builder()
                                .content(choice.message().content().orElse(""))
                                .toolCalls(choice.message().toolCalls().orElse(new ArrayList<>()))
                                .build());

                            for (ChatCompletionMessageToolCall toolCall : choice.message().toolCalls().orElse(new ArrayList<>())) {
                                System.out.println("  " + toolCall.asFunction().function().name() + ": " + toolCall.asFunction().function().arguments());
                                
                                String toolName = toolCall.asFunction().function().name();
                                Map<String, Object> toolArgs;
                                try {
                                    toolArgs = objectMapper.readValue(toolCall.asFunction().function().arguments() != null ? toolCall.asFunction().function().arguments() : "{}", new TypeReference<Map<String, Object>>() {});
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

                                    initialParamsBuilder.addMessage(ChatCompletionToolMessageParam.builder()
                                        .toolCallId(toolCall.asFunction().id())
                                        .content(resultContent)
                                        .build());
                                } else {
                                    System.err.println("Tool not found: " + toolName);
                                    initialParamsBuilder.addMessage(ChatCompletionToolMessageParam.builder()
                                        .toolCallId(toolCall.asFunction().id())
                                        .content("Tool '" + toolName + "' is not implemented.")
                                        .build());
                                }
                            }
                        } else {
                            System.out.println("[Model Response] " + choice.message().content().orElse(""));
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
