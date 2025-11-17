/**
 * Connect model with mcp tools in Java
 * 
 * Required Dependencies (for Maven):
 *   <dependency>
 *     <groupId>com.anthropic</groupId>
 *     <artifactId>anthropic-java</artifactId>
 *     <version>2.1.0</version>
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

import com.anthropic.client.AnthropicClient;
import com.anthropic.client.okhttp.AnthropicOkHttpClient;
import com.anthropic.models.messages.*;
import com.anthropic.core.JsonValue;
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
    
    private static final String API_KEY = System.getenv("ANTHROPIC_API_KEY");

{{#hasImage}}
    private static String encodeImage(String path) {
        try {
            byte[] imageBytes = Files.readAllBytes(Paths.get(path));
            return Base64.getEncoder().encodeToString(imageBytes);
        } catch (Exception e) {
            throw new RuntimeException("Failed to read image file: " + path, e);
        }
    }

    private static Base64ImageSource.MediaType getMediaTypeFromFileName(String fileName) {
        String extension = fileName.toLowerCase();
        if (extension.endsWith(".png")) {
            return Base64ImageSource.MediaType.IMAGE_PNG;
        } else if (extension.endsWith(".jpg") || extension.endsWith(".jpeg")) {
            return Base64ImageSource.MediaType.IMAGE_JPEG;
        } else if (extension.endsWith(".gif")) {
            return Base64ImageSource.MediaType.IMAGE_GIF;
        } else if (extension.endsWith(".webp")) {
            return Base64ImageSource.MediaType.IMAGE_WEBP;
        } else {
            // Default to PNG if format is not recognized
            System.out.println("Warning: Unknown image format for " + fileName + ", using PNG as default");
            return Base64ImageSource.MediaType.IMAGE_PNG;
        }
    }

{{/hasImage}}
    public static void main(String[] args) {
        try {
            MCPClient mcpClient = new MCPClient();
            
            // Create initial messages list
            List<MessageParam> messages = new ArrayList<>();
            List<ContentBlockParam> tempUserContents = new ArrayList<>();
            List<ContentBlockParam> tempAssistantContents = new ArrayList<>();
{{#messages}}
{{#isUser}}
            // User message
            tempUserContents.clear();
{{#content}}
{{#isText}}
            tempUserContents.add(ContentBlockParam.ofText(
                TextBlockParam.builder()
                    .text({{{textWithQuote}}})
                    .build()
            ));
{{/isText}}
{{#isImage}}
            tempUserContents.add(ContentBlockParam.ofImage(
                ImageBlockParam.builder()
                    .source(Base64ImageSource.builder()
                        .mediaType(getMediaTypeFromFileName({{{localPathWithQuote}}}))
                        .data(encodeImage({{{localPathWithQuote}}}))
                        .build())
                    .build()
            ));
{{/isImage}}
{{#isToolResult}}
            tempUserContents.add(ContentBlockParam.ofToolResult(
                ToolResultBlockParam.builder()
                    .toolUseId("{{{toolUseId}}}")
                    .content({{{serializedToolResultContentWithQuote}}})
                    .build()
            ));
{{/isToolResult}}
{{/content}}
            messages.add(MessageParam.builder()
                .role(MessageParam.Role.USER)
                .contentOfBlockParams(new ArrayList<>(tempUserContents))
                .build());
{{/isUser}}
{{#isAssistant}}
            // Assistant message
            tempAssistantContents.clear();
{{#content}}
{{#isText}}
            tempAssistantContents.add(ContentBlockParam.ofText(
                TextBlockParam.builder()
                    .text({{{textWithQuote}}})
                    .build()
            ));
{{/isText}}
{{#isToolUse}}
            tempAssistantContents.add(ContentBlockParam.ofToolUse(
                ToolUseBlockParam.builder()
                    .id("{{{toolUseId}}}")
                    .name("{{{toolUseName}}}")
                    .input(JsonValue.from(parseJsonString({{{serializedToolUserInput}}})))
                    .build()
            ));
{{/isToolUse}}
{{#isThinking}}
            tempAssistantContents.add(ContentBlockParam.ofThinking(
                ThinkingBlockParam.builder()
                    .thinking({{{thinkingWithQuote}}})
                    .signature("{{{signature}}}")
                    .build()
            ));
{{/isThinking}}
{{#isRedactedThinking}}
            tempAssistantContents.add(ContentBlockParam.ofRedactedThinking(
                RedactedThinkingBlockParam.builder()
                    .data("{{{redactedThinking}}}")
                    .build()
            ));
{{/isRedactedThinking}}
{{/content}}
            messages.add(MessageParam.builder()
                .role(MessageParam.Role.ASSISTANT)
                .contentOfBlockParams(new ArrayList<>(tempAssistantContents))
                .build());
{{/isAssistant}}
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
                mcpClient.chatWithTools(messages).get();
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

    private static Map<String, Object> parseJsonString(String jsonString) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            return mapper.readValue(jsonString, new TypeReference<Map<String, Object>>() {});
        } catch (Exception e) {
            System.err.println("Error parsing JSON string: " + e.getMessage());
            return new HashMap<>();
        }
    }

    public static class MCPClient {
        private final Map<String, ServerInfo> servers = new HashMap<>();
        private final Map<String, String> toolToServerMap = new HashMap<>();
        private final AnthropicClient anthropicClient;
        private final ObjectMapper objectMapper = new ObjectMapper();

        public static class ServerInfo {
            public McpSyncClient client;
            public List<McpSchema.Tool> tools = new ArrayList<>();
        }

        public MCPClient() {
            this.anthropicClient = AnthropicOkHttpClient.builder()
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
         * @param messages Initial messages list
         */
        public CompletableFuture<Void> chatWithTools(List<MessageParam> messages) {
            return CompletableFuture.supplyAsync(() -> {
                try {
                    if (servers.isEmpty()) {
                        throw new IllegalStateException("No MCP servers connected. Connect to at least one server first.");
                    }

                    // Collect tools from all connected servers
                    List<Tool> availableTools = new ArrayList<>();
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
                            
                            Tool anthropicTool = Tool.builder()
                                .name(tool.name())
                                .description(tool.description())
                                .inputSchema(JsonValue.from(parametersMap))
                                .build();
                            
                            availableTools.add(anthropicTool);
                        }
                    }

                    while (true) {
                        // Create message request
                        MessageCreateParams.Builder paramsBuilder = MessageCreateParams.builder()
                            .model("{{{model}}}")
                            .messages(messages);

{{#parameters.max_tokens}}
                        paramsBuilder.maxTokens({{.}}L);
{{/parameters.max_tokens}}
{{#parameters.temperature}}
                        paramsBuilder.temperature({{.}}d);
{{/parameters.temperature}}
{{#parameters.top_p}}
                        paramsBuilder.topP({{.}}d);
{{/parameters.top_p}}
{{#parameters.systemWithQuote}}
                        paramsBuilder.system({{{.}}});
{{/parameters.systemWithQuote}}
{{#parameters.think_mode}}
                        paramsBuilder.thinking(MessageCreateParams.Thinking.builder()
                            .type(MessageCreateParams.Thinking.Type.ENABLED)
                            .budgetTokens({{parameters.budget_tokens}}L)
                            .build());
{{/parameters.think_mode}}
                        
                        // Add tools to the request
                        for (Tool tool : availableTools) {
                            paramsBuilder.addTool(tool);
                        }

                        Message message = anthropicClient.messages().create(paramsBuilder.build());
                        
                        boolean hasToolCall = false;
                        List<ContentBlockParam> newAssistantContent = new ArrayList<>();
                        List<ContentBlockParam> newUserContent = new ArrayList<>();
                        
                        for (ContentBlock contentBlock : message.content()) {
                            if (contentBlock.isText()) {
                                System.out.println("[Model Response]: " + contentBlock.asText().text());
                                newAssistantContent.add(ContentBlockParam.ofText(
                                    TextBlockParam.builder()
                                        .text(contentBlock.asText().text())
                                        .build()
                                ));
                            } else if (contentBlock.isToolUse()) {
                                ToolUseBlock toolUse = contentBlock.asToolUse();
                                hasToolCall = true;
                                
                                System.out.println("[Tool Use] " + toolUse.name() + ": " + toolUse._input());
                                
                                // Add tool use to assistant message
                                newAssistantContent.add(ContentBlockParam.ofToolUse(
                                    ToolUseBlockParam.builder()
                                        .id(toolUse.id())
                                        .name(toolUse.name())
                                        .input(toolUse._input())
                                        .build()
                                ));
                                
                                // Find the appropriate server for this tool
                                String serverId = toolToServerMap.get(toolUse.name());
                                if (serverId != null) {
                                    ServerInfo serverInfo = servers.get(serverId);
                                    McpSyncClient serverClient = serverInfo.client;

                                    // Convert tool input to proper format
                                    Map<String, Object> toolArgs;
                                    try {
                                        toolArgs = objectMapper.convertValue(toolUse._input(), new TypeReference<Map<String, Object>>() {});
                                    } catch (Exception e) {
                                        toolArgs = new HashMap<>();
                                    }

                                    // Execute tool call on the appropriate server
                                    McpSchema.CallToolRequest request = new McpSchema.CallToolRequest(toolUse.name(), toolArgs);
                                    McpSchema.CallToolResult callResult = serverClient.callTool(request);

                                    System.out.println("[Server '" + serverId + "' call tool '" + toolUse.name() + "' with args " + toolArgs + "]: " + callResult.content());

                                    // Process content to handle different content types
                                    StringBuilder resultContent = new StringBuilder();
                                    for (McpSchema.Content content : callResult.content()) {
                                        if (content instanceof McpSchema.TextContent) {
                                            resultContent.append(((McpSchema.TextContent) content).text());
                                        } else if (content instanceof McpSchema.ImageContent) {
                                            McpSchema.ImageContent imageContent = (McpSchema.ImageContent) content;
                                            resultContent.append("[Image: ").append(imageContent.mimeType()).append("]");
                                        }
                                    }

                                    newUserContent.add(ContentBlockParam.ofToolResult(
                                        ToolResultBlockParam.builder()
                                            .toolUseId(toolUse.id())
                                            .content(resultContent.toString())
                                            .build()
                                    ));
                                } else {
                                    newUserContent.add(ContentBlockParam.ofToolResult(
                                        ToolResultBlockParam.builder()
                                            .toolUseId(toolUse.id())
                                            .content("Tool '" + toolUse.name() + "' is not implemented.")
                                            .build()
                                    ));
                                }
                            } else if (contentBlock.isThinking()) {
                                ThinkingBlock thinking = contentBlock.asThinking();
                                System.out.println("[Thinking] " + thinking.thinking());
                                newAssistantContent.add(ContentBlockParam.ofThinking(
                                    ThinkingBlockParam.builder()
                                        .thinking(thinking.thinking())
                                        .signature(thinking.signature())
                                        .build()
                                ));
                            } else if (contentBlock.isRedactedThinking()) {
                                RedactedThinkingBlock redactedThinking = contentBlock.asRedactedThinking();
                                System.out.println("[Redacted Thinking] " + redactedThinking.data());
                                newAssistantContent.add(ContentBlockParam.ofRedactedThinking(
                                    RedactedThinkingBlockParam.builder()
                                        .data(redactedThinking.data())
                                        .build()
                                ));
                            } else {
                                System.out.println("[Unknown Content Type] " + contentBlock.toString());
                            }
                        }
                        
                        System.out.println(); // Add blank line for readability
                        
                        if (hasToolCall) {
                            // Add assistant message with content including tool use
                            messages.add(MessageParam.builder()
                                .role(MessageParam.Role.ASSISTANT)
                                .contentOfBlockParams(newAssistantContent)
                                .build());
                            
                            // Add user message with tool results
                            messages.add(MessageParam.builder()
                                .role(MessageParam.Role.USER)
                                .contentOfBlockParams(newUserContent)
                                .build());
                        } else {
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
