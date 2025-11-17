/**
 * Run this model in Java
 * 
 * Required Dependencies (for Maven):
 *   <dependency>
 *     <groupId>com.anthropic</groupId>
 *     <artifactId>anthropic-java</artifactId>
 *     <version>2.1.0</version>
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

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
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
{{#toolResults}}
    private static String {{{name}}}() {
        return "{{toolResult}}";
    }

{{/toolResults}}
{{#hasTools}}
    private static List<Tool> tools = new ArrayList<>();
    static {
{{#rawTools}}
        tools.add(Tool.builder()
            .name("{{name}}")
            .description("{{description}}")
            .inputSchema(JsonValue.from(parseJsonString({{{inputSchema}}})))
            .build());
{{/rawTools}}
    }

{{/hasTools}}
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
            // Create Anthropic client
            AnthropicClient client = AnthropicOkHttpClient.builder()
                .apiKey(API_KEY)
                .build();

            // Create messages list
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
{{#hasTools}}
                for (Tool tool : tools) {
                    paramsBuilder.addTool(tool);
                }
{{/hasTools}}

                Message message = client.messages().create(paramsBuilder.build());
                
                // Print the response content in a readable format
                System.out.println("[Model Response]:");
                for (ContentBlock block : message.content()) {
                    if (block.isText()) {
                        System.out.println(block.asText().text());
                    } else if (block.isToolUse()) {
                        ToolUseBlock toolUse = block.asToolUse();
                        System.out.println("[Tool Use] " + toolUse.name() + ": " + toolUse._input());
                    } else if (block.isThinking()) {
                        ThinkingBlock thinking = block.asThinking();
                        System.out.println("[Thinking] " + thinking.thinking());
                    } else if (block.isRedactedThinking()) {
                        RedactedThinkingBlock redactedThinking = block.asRedactedThinking();
                        System.out.println("[Redacted Thinking] " + redactedThinking.data());
                    } else {
                        System.out.println("[Unknown Content Type] " + block.toString());
                    }
                }
                System.out.println(); // Add blank line for readability

                boolean shouldContinue = false;
                List<ContentBlockParam> newAssistantContent = new ArrayList<>();
                List<ContentBlockParam> newUserContent = new ArrayList<>();
                
                for (ContentBlock contentBlock : message.content()) {
                    if (contentBlock.isToolUse()) {
                        ToolUseBlock toolUse = contentBlock.asToolUse();
                        shouldContinue = true;
                        
                        // Add tool use to assistant message
                        newAssistantContent.add(ContentBlockParam.ofToolUse(
                            ToolUseBlockParam.builder()
                                .id(toolUse.id())
                                .name(toolUse.name())
                                .input(toolUse._input())
                                .build()
                        ));
                        
                        // Execute tool and add result to user message
                        String toolResult = "Tool not implemented";
                        switch (toolUse.name()) {
{{#toolResults}}
                            case "{{{name}}}":
                                toolResult = {{{name}}}();
                                break;
{{/toolResults}}
                            default:
                                toolResult = "Tool '" + toolUse.name() + "' is not implemented.";
                                break;
                        }
                        
                        newUserContent.add(ContentBlockParam.ofToolResult(
                            ToolResultBlockParam.builder()
                                .toolUseId(toolUse.id())
                                .content(toolResult)
                                .build()
                        ));
                    } else if (contentBlock.isText()) {
                        newAssistantContent.add(ContentBlockParam.ofText(
                            TextBlockParam.builder()
                                .text(contentBlock.asText().text())
                                .build()
                        ));
                    } else if (contentBlock.isThinking()) {
                        ThinkingBlock thinking = contentBlock.asThinking();
                        newAssistantContent.add(ContentBlockParam.ofThinking(
                            ThinkingBlockParam.builder()
                                .thinking(thinking.thinking())
                                .signature(thinking.signature())
                                .build()
                        ));
                    } else if (contentBlock.isRedactedThinking()) {
                        RedactedThinkingBlock redactedThinking = contentBlock.asRedactedThinking();
                        newAssistantContent.add(ContentBlockParam.ofRedactedThinking(
                            RedactedThinkingBlockParam.builder()
                                .data(redactedThinking.data())
                                .build()
                        ));
                    }
                }
                
                if (shouldContinue) {
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
            
        } catch (Exception e) {
            System.err.println("Error: " + e.getMessage());
            e.printStackTrace();
        }
    }
}
