/**
 * Connect model with mcp tools in Java
 * 
 * Required Dependencies (for Maven):
 *   <dependency>
 *     <groupId>com.google.genai</groupId>
 *     <artifactId>google-genai</artifactId>
 *     <version>1.9.0</version>
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

import com.google.genai.Client;
import com.google.genai.types.*;
import com.google.common.collect.ImmutableList;
{{#files.0}}
import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
{{/files.0}}

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
import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;

public class Main {
    
    private static final String API_KEY = System.getenv("GEMINI_API_KEY");

{{#files.0}}
    private static Part uploadToGemini(String filePath, String mimeType) throws Exception {
        /**
         * Uploads the given file to Gemini.
         * 
         * See https://ai.google.dev/gemini-api/docs/prompting_with_media
         */
        File file = new File(filePath);
        if (!file.exists()) {
            throw new RuntimeException("File not found: " + filePath);
        }
        
        byte[] fileBytes = Files.readAllBytes(Paths.get(filePath));
        Part filePart = Part.fromBytes(fileBytes, mimeType);
        System.out.println("Uploaded file '" + file.getName() + "'");
        return filePart;
    }

{{/files.0}}
    private static Map<String, Object> parseJsonString(String jsonString) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            return mapper.readValue(jsonString, new TypeReference<Map<String, Object>>() {});
        } catch (Exception e) {
            System.err.println("Error parsing JSON string: " + e.getMessage());
            return new HashMap<>();
        }
    }

    private static Schema convertMapToSchema(Map<String, Object> schemaMap) {
        if (schemaMap == null) {
            return Schema.builder().type("object").build();
        }
        
        try {
            ObjectMapper mapper = new ObjectMapper();
            String jsonString = mapper.writeValueAsString(schemaMap);
            JsonNode jsonNode = mapper.readTree(jsonString);
            return Schema.fromJson(jsonNode.toString());
        } catch (Exception e) {
            return Schema.builder().type("object").build();
        }
    }

    public static void main(String[] args) {
        try {
            MCPClient mcpClient = new MCPClient();
            
{{#files.0}}
            // TODO Make these files available on the local file system
            // You may need to update the file paths
            List<Part> files = new ArrayList<>();
{{#files}}
            files.add(uploadToGemini({{{localPath}}}, {{{mimeType}}}));
{{/files}}

{{/files.0}}
            List<Content> contents = new ArrayList<>();
            List<Part> tempParts = new ArrayList<>();
{{#historyMessages}}
            
            // Add history message
            tempParts.clear();
{{#content}}
{{#isFile}}
            tempParts.add(files.get({{{fileIndex}}}));
{{/isFile}}
{{#isText}}
            tempParts.add(Part.fromText({{{textWithQuote}}}));
{{/isText}}
{{#isToolUse}}
            tempParts.add(Part.fromFunctionCall("{{{functionCall.name}}}", parseJsonString({{{functionCall.serializedArgs}}})));
{{/isToolUse}}
{{#isToolResult}}
            tempParts.add(Part.fromFunctionResponse("{{{functionResponse.name}}}", parseJsonString({{{functionResponse.serializedResponse}}})));
{{/isToolResult}}
{{/content}}
            contents.add(Content.fromParts(tempParts.toArray(new Part[0])));
{{/historyMessages}}

            // Add user message
            List<Part> userParts = new ArrayList<>();
            userParts.add(Part.fromText({{{messageWithQuote}}}));
            contents.add(Content.fromParts(userParts.toArray(new Part[0])));

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
                mcpClient.chatWithTools(contents).get();
            } catch (Exception ex) {
                System.err.println("Error: " + ex.getMessage());
                ex.printStackTrace();
            } finally {
                mcpClient.dispose();
                Thread.sleep(1000);
            }
            
        } catch (Exception e) {
            System.err.println("Error: " + e.getMessage());
            e.printStackTrace();
        } finally {
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
            
            System.exit(0);
        }
    }

    public static class MCPClient {
        private final Map<String, ServerInfo> servers = new HashMap<>();
        private final Map<String, String> toolToServerMap = new HashMap<>();
        private final Client geminiClient;
        private final ObjectMapper objectMapper;

        public static class ServerInfo {
            public McpSyncClient client;
            public List<McpSchema.Tool> tools = new ArrayList<>();
        }

        public MCPClient() {
            this.geminiClient = Client.builder().apiKey(API_KEY).build();
            this.objectMapper = new ObjectMapper();
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
            McpSchema.ListToolsResult toolsResult = client.listTools();
            List<McpSchema.Tool> tools = toolsResult.tools();
            
            ServerInfo serverInfo = new ServerInfo();
            serverInfo.client = client;
            serverInfo.tools = tools;
            servers.put(serverId, serverInfo);

            for (McpSchema.Tool tool : tools) {
                toolToServerMap.put(tool.name(), serverId);
            }

            String toolNames = tools.stream().map(McpSchema.Tool::name).collect(Collectors.joining(", "));
            System.out.println("Connected to server '" + serverId + "' with tools: " + toolNames);
        }

        /**
         * Chat with model using MCP tools
         * @param contents Initial conversation contents
         */
        public CompletableFuture<Void> chatWithTools(List<Content> contents) {
            return CompletableFuture.supplyAsync(() -> {
                try {
                    if (servers.isEmpty()) {
                        throw new IllegalStateException("No MCP servers connected. Connect to at least one server first.");
                    }

                    // Create generation config
                    GenerateContentConfig.Builder configBuilder = GenerateContentConfig.builder();
                    
{{#parameters.temperature}}
                    configBuilder.temperature({{.}}f);
{{/parameters.temperature}}
{{#parameters.top_p}}
                    configBuilder.topP({{.}}f);
{{/parameters.top_p}}
{{#parameters.max_tokens}}
                    configBuilder.maxOutputTokens({{.}});
{{/parameters.max_tokens}}
{{#parameters.response_mime_type}}
                    configBuilder.responseMimeType("{{{.}}}");
{{/parameters.response_mime_type}}
{{#parameters.response_schema}}
                    configBuilder.responseSchema({{{.}}});
{{/parameters.response_schema}}
{{#parameters.system_prompt}}
                    configBuilder.systemInstruction(Content.fromParts(Part.fromText({{{.}}})));
{{/parameters.system_prompt}}

                    // Collect tools from all connected servers
                    List<Tool> availableTools = new ArrayList<>();
                    for (Map.Entry<String, ServerInfo> entry : servers.entrySet()) {
                        ServerInfo serverInfo = entry.getValue();
                        for (McpSchema.Tool tool : serverInfo.tools) {
                            Map<String, Object> inputSchemaMap = new HashMap<>();
                            if (tool.inputSchema() != null) {
                                inputSchemaMap = objectMapper.convertValue(tool.inputSchema(), new TypeReference<Map<String, Object>>() {});
                            } else {
                                inputSchemaMap.put("type", "object");
                                inputSchemaMap.put("properties", new HashMap<>());
                            }
                            
                            Tool geminiTool = Tool.builder()
                                .functionDeclarations(ImmutableList.of(FunctionDeclaration.builder()
                                    .name(tool.name())
                                    .description(tool.description())
                                    .parameters(convertMapToSchema(inputSchemaMap))
                                    .build()))
                                .build();
                            
                            availableTools.add(geminiTool);
                        }
                    }
                    
                    configBuilder.tools(availableTools);

                    while (true) {
                        GenerateContentResponse response = geminiClient.models.generateContent(
                            {{{model}}}, 
                            contents, 
                            configBuilder.build()
                        );
                        
                        List<Candidate> candidates = response.candidates().orElse(new ArrayList<>());
                        if (candidates.isEmpty()) {
                            break;
                        }
                        
                        Candidate firstCandidate = candidates.get(0);
                        Content candidateContent = firstCandidate.content().get();
                        List<Part> candidateParts = candidateContent.parts().orElse(new ArrayList<>());
                        
                        boolean hasToolCall = false;
                        contents.add(candidateContent);
                        
                        for (Part part : candidateParts) {
                            if (part.text().isPresent()) {
                                System.out.println("[Model Response]: " + part.text().get());
                            } else if (part.functionCall().isPresent()) {
                                hasToolCall = true;
                                FunctionCall functionCall = part.functionCall().get();
                                String toolName = functionCall.name().orElse("unknown");
                                Map<String, Object> toolArgs = functionCall.args().orElse(new HashMap<>());
                                
                                String serverId = toolToServerMap.get(toolName);
                                if (serverId != null) {
                                    ServerInfo serverInfo = servers.get(serverId);
                                    McpSyncClient serverClient = serverInfo.client;

                                    McpSchema.CallToolRequest request = new McpSchema.CallToolRequest(toolName, toolArgs);
                                    McpSchema.CallToolResult callResult = serverClient.callTool(request);

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

                                    Map<String, Object> toolResponseData = new HashMap<>();
                                    toolResponseData.put("result", resultContent);
                                    contents.add(Content.fromParts(Part.fromFunctionResponse(toolName, toolResponseData)));
                                } else {
                                    Map<String, Object> errorResponseData = new HashMap<>();
                                    errorResponseData.put("result", "Tool '" + toolName + "' is not implemented.");
                                    contents.add(Content.fromParts(Part.fromFunctionResponse(toolName, errorResponseData)));
                                }
                            }
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
                        serverInfo.client.closeGracefully();
                    }
                } catch (Exception ex) {
                    System.err.println("Error disposing server '" + serverId + "': " + ex.getMessage());
                }
            }
        }
    }
}
