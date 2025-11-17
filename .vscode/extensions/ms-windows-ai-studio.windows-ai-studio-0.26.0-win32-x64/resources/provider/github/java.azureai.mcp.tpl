/**
 * Connect model with mcp tools in Java
 * 
 * Required Dependencies (for Maven):
 *   <dependency>
 *     <groupId>com.azure</groupId>
 *     <artifactId>azure-ai-inference</artifactId>
 *     <version>1.0.0-beta.5</version>
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

import com.azure.ai.inference.ChatCompletionsClient;
import com.azure.ai.inference.ChatCompletionsClientBuilder;
import com.azure.ai.inference.models.*;
import com.azure.core.credential.AzureKeyCredential;
import com.azure.core.util.BinaryData;
{{#hasImage}}
import java.nio.file.Paths;
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

public class Main {
    
    private static final String ENDPOINT = "https://models.github.ai/inference";
    private static final String API_KEY = System.getenv("GITHUB_TOKEN");

    public static void main(String[] args) {
        try {
            MCPClient mcpClient = new MCPClient();
            
            // Create initial messages
            List<ChatRequestMessage> messages = new ArrayList<>();
            List<ChatMessageContentItem> tempUserContents = new ArrayList<>();
{{#parameters.systemWithQuote}}
{{#o1}}
            messages.add(new ChatRequestUserMessage({{{parameters.systemWithQuote}}}));
{{/o1}}
{{^o1}}
            messages.add(new ChatRequestSystemMessage({{{parameters.systemWithQuote}}}));
{{/o1}}
{{/parameters.systemWithQuote}}
{{#messages}}
{{#isUser}}
            tempUserContents.clear();
{{#content}}
{{#isText}}
            tempUserContents.add(new ChatMessageTextContentItem({{{textWithQuote}}}));
{{/isText}}
{{#isImage}}
            tempUserContents.add(new ChatMessageImageContentItem(
                Paths.get({{{localPathWithQuote}}}),
                "{{{mimeType}}}"
            ));
{{/isImage}}
{{/content}}
            messages.add(ChatRequestUserMessage.fromContentItems(tempUserContents));
{{/isUser}}
{{#isAssistant}}
{{^tool_calls}}
            messages.add(new ChatRequestAssistantMessage({{{textWithQuote}}}));
{{/tool_calls}}
{{#tool_calls}}
            ChatRequestAssistantMessage assistantMsg = new ChatRequestAssistantMessage("");
            List<ChatCompletionsToolCall> toolCalls = new ArrayList<>();
            toolCalls.add(new ChatCompletionsToolCall("{{{id}}}", new FunctionCall("{{{function.name}}}", {{{function.arguments}}})));
            assistantMsg.setToolCalls(toolCalls);
            messages.add(assistantMsg);
{{/tool_calls}}
{{/isAssistant}}
{{#isTool}}
            messages.add(new ChatRequestToolMessage("{{{tool_call_id}}}").setContent({{#content}}{{{textWithQuote}}}{{/content}}));
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
        }
    }

    public static class MCPClient {
        private final Map<String, ServerInfo> servers = new HashMap<>();
        private final Map<String, String> toolToServerMap = new HashMap<>();
        private final ChatCompletionsClient chatClient;
        private final ObjectMapper objectMapper = new ObjectMapper();

        public static class ServerInfo {
            public McpSyncClient client;
            public List<McpSchema.Tool> tools = new ArrayList<>();
        }

        public MCPClient() {
            // To authenticate with GitHub Models you will need to generate a github token
            // Create your github token by following instructions here: 
            // https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens
            this.chatClient = new ChatCompletionsClientBuilder()
                .credential(new AzureKeyCredential(API_KEY))
                .endpoint(ENDPOINT)
                .buildClient();
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
         * @param messages Messages to send to the model
         */
        public CompletableFuture<Void> chatWithTools(List<ChatRequestMessage> messages) {
            return CompletableFuture.supplyAsync(() -> {
                try {
                    if (servers.isEmpty()) {
                        throw new IllegalStateException("No MCP servers connected. Connect to at least one server first.");
                    }

                    // Collect tools from all connected servers
                    List<ChatCompletionsToolDefinition> availableTools = new ArrayList<>();
                    for (Map.Entry<String, ServerInfo> entry : servers.entrySet()) {
                        ServerInfo serverInfo = entry.getValue();
                        for (McpSchema.Tool tool : serverInfo.tools) {
                            FunctionDefinition functionDef = new FunctionDefinition(tool.name())
                                .setDescription(tool.description())
                                // Use tool's input schema if available, otherwise use basic schema
                                .setParameters(tool.inputSchema() != null ? 
                                    BinaryData.fromString(objectMapper.writeValueAsString(tool.inputSchema())) :
                                    BinaryData.fromString("{\"type\": \"object\", \"properties\": {}}"));
                            
                            ChatCompletionsToolDefinition toolDefinition = new ChatCompletionsToolDefinition(functionDef);
                            availableTools.add(toolDefinition);
                        }
                    }

                    while (true) {
                        // Create chat completions options
                        ChatCompletionsOptions options = new ChatCompletionsOptions(messages);
                        options.setModel("{{{model}}}");
                        options.setTools(availableTools);

{{#response_format_json_schema}}
                        options.setResponseFormat(new ChatCompletionsResponseFormatJsonObject());
{{/response_format_json_schema}}
{{#response_format_text}}
                        options.setResponseFormat(new ChatCompletionsResponseFormatText());
{{/response_format_text}}
{{#parameters.max_tokens}}
{{#o1}}
                        options.setMaxTokens({{parameters.max_tokens}});
{{/o1}}
{{^o1}}
                        options.setMaxTokens({{parameters.max_tokens}});
{{/o1}}
{{/parameters.max_tokens}}
{{#parameters.temperature}}
                        options.setTemperature({{.}}d);
{{/parameters.temperature}}
{{#parameters.top_p}}
                        options.setTopP({{.}}d);
{{/parameters.top_p}}
{{#parameters.frequency_penalty}}
                        options.setFrequencyPenalty({{.}}d);
{{/parameters.frequency_penalty}}
{{#parameters.presence_penalty}}
                        options.setPresencePenalty({{.}}d);
{{/parameters.presence_penalty}}

                        ChatCompletions result = chatClient.complete(options);
                        ChatChoice choice = result.getChoices().get(0);
                        boolean hasToolCall = false;

                        if (choice.getFinishReason() == CompletionsFinishReason.TOOL_CALLS) {
                            hasToolCall = true;
                            // Add assistant message with tool calls
                            ChatRequestAssistantMessage assistantMessage = new ChatRequestAssistantMessage(choice.getMessage().getContent() != null ? choice.getMessage().getContent() : "");
                            List<ChatCompletionsToolCall> assistantToolCalls = choice.getMessage().getToolCalls();
                            if (assistantToolCalls != null) {
                                assistantMessage.setToolCalls(assistantToolCalls);
                            }
                            messages.add(assistantMessage);

                            if (assistantToolCalls != null) {
                                for (ChatCompletionsToolCall toolCall : assistantToolCalls) {
                                    String toolName = toolCall.getFunction().getName();
                                    Map<String, Object> toolArgs;
                                    try {
                                        toolArgs = objectMapper.readValue(toolCall.getFunction().getArguments() != null ? toolCall.getFunction().getArguments() : "{}", Map.class);
                                    } catch (Exception e) {
                                        toolArgs = new HashMap<>();
                                    }

                                    // Find the appropriate server for this tool
                                    String serverId = toolToServerMap.get(toolName);
                                    if (serverId != null) {
                                        McpSyncClient serverClient = servers.get(serverId).client;

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

                                        messages.add(new ChatRequestToolMessage(toolCall.getId()).setContent(resultContent));
                                    }
                                }
                            }
                        } else {
                            messages.add(new ChatRequestAssistantMessage(choice.getMessage().getContent() != null ? choice.getMessage().getContent() : ""));
                            System.out.println(String.format("[Model Response]: %s", choice.getMessage().getContent()));
                        }

                        if (!hasToolCall) {
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