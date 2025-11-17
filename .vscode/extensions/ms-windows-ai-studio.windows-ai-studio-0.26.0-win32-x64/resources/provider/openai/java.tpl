/**
 * Run this model in Java
 * 
 * Required Dependencies (for Maven):
 *   <dependency>
 *     <groupId>com.openai</groupId>
 *     <artifactId>openai-java</artifactId>
 *     <version>3.1.2</version>
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

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
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
{{#toolResults}}
    private static String {{{name}}}() {
        return "{{toolResult}}";
    }

{{/toolResults}}
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
            // Create OpenAI client
            OpenAIClient client = OpenAIOkHttpClient.builder()
                .apiKey(API_KEY)
                .build();

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

{{#hasTools}}
            // Define tools
{{#rawTools}}
            paramsBuilder.addTool(ChatCompletionTool.ofFunction(ChatCompletionFunctionTool.builder()
                .function(FunctionDefinition.builder()
                    .name("{{function.name}}")
                    .description("{{function.description}}")
                    .parameters(JsonValue.from(parseJsonString({{{function.parameters}}})))
                    .build())
                .build()));
{{/rawTools}}

{{/hasTools}}
{{#response_format_json_schema}}
            paramsBuilder.responseFormat(ResponseFormatJsonSchema.builder()
                .jsonSchema(ResponseFormatJsonSchema.JsonSchema.builder()
                        .name("response_schema")
                        .schema(JsonValue.from(parseJsonString({{{response_format_json_schema}}})))
                        .build())
                .type(JsonValue.from("jsonSchema"))
                .build());

{{/response_format_json_schema}}
{{#response_format_text}}
            paramsBuilder.responseFormat(ResponseFormatText.builder()
                .type(JsonValue.from("text"))
                .build());

{{/response_format_text}}
{{#parameters.max_tokens}}
            paramsBuilder.maxTokens({{parameters.max_tokens}});
{{/parameters.max_tokens}}
{{#parameters.temperature}}
            paramsBuilder.temperature({{.}}d);
{{/parameters.temperature}}
{{#parameters.top_p}}
            paramsBuilder.topP({{.}}d);
{{/parameters.top_p}}
{{#parameters.frequency_penalty}}
            paramsBuilder.frequencyPenalty({{.}}d);
{{/parameters.frequency_penalty}}
{{#parameters.presence_penalty}}
            paramsBuilder.presencePenalty({{.}}d);
{{/parameters.presence_penalty}}
{{#parameters.reasoning_effort}}
            paramsBuilder.reasoningEffort(ReasoningEffort.of("{{.}}"));
{{/parameters.reasoning_effort}}
{{#parameters.verbosity}}
            paramsBuilder.verbosity(ChatCompletionCreateParams.Verbosity.of("{{.}}"));
{{/parameters.verbosity}}

            while (true) {
                ChatCompletion completion = client.chat().completions().create(paramsBuilder.build());
                ChatCompletion.Choice choice = completion.choices().get(0);
                if (choice.message().toolCalls().isPresent() && choice.message().toolCalls().get().size() > 0) {
                    System.out.println("Tool calls:");
                    
                    // Add assistant message with tool calls
                    paramsBuilder.addMessage(ChatCompletionAssistantMessageParam.builder()
                        .content(choice.message().content().orElse(""))
                        .toolCalls(choice.message().toolCalls().orElse(new ArrayList<>()))
                        .build());
                    
                    for (ChatCompletionMessageToolCall toolCall : choice.message().toolCalls().orElse(new ArrayList<>())) {
                        System.out.println("  " + toolCall.asFunction().function().name() + ": " + toolCall.asFunction().function().arguments());
                        
                        String toolResult = "Tool not implemented";
                        switch (toolCall.asFunction().function().name()) {
{{#toolResults}}
                            case "{{{name}}}":
                                toolResult = {{{name}}}();
                                break;
{{/toolResults}}
                            default:
                                toolResult = "Tool '" + toolCall.asFunction().function().name() + "' is not implemented.";
                                break;
                        }

                        paramsBuilder.addMessage(ChatCompletionToolMessageParam.builder()
                            .toolCallId(toolCall.asFunction().id())
                            .content(toolResult)
                            .build());
                    }
                } else {
                    System.out.println("[Model Response] " + choice.message().content().orElse(""));
                    break;
                }
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
}
