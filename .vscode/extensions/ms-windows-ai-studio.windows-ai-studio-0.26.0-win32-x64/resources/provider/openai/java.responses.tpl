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
import com.openai.models.responses.*;
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

            List<ResponseInputItem> inputs = new ArrayList<>();

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
            // Create user message with text content
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
{{#hasTools}}
            // Define tools
{{#rawTools}}
{{^isWebSearch}}
            paramsBuilder.addTool(FunctionTool.builder()
                .name("{{name}}")
                .description("{{description}}")
                .parameters(JsonValue.from(parseJsonString({{{parameters}}})))
                .strict(true)
                .build()
            );
{{/isWebSearch}}
{{#isWebSearch}}
            paramsBuilder.addTool(WebSearchTool.builder()
                .type(WebSearchTool.Type.WEB_SEARCH_PREVIEW)
                .build());
{{/isWebSearch}}
{{/rawTools}}

{{/hasTools}}
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
            paramsBuilder.text(responseTextConfig.build());
            paramsBuilder.reasoning(Reasoning.builder()
{{#parameters.reasoning_effort}}
                .effort(ReasoningEffort.of("{{.}}"))
{{/parameters.reasoning_effort}}
{{#parameters.reasoning_summary}}
                .summary(Reasoning.Summary.of("{{.}}"))
{{/parameters.reasoning_summary}}
                .build());
{{#parameters.max_tokens}}
            paramsBuilder.maxOutputTokens({{parameters.max_tokens}});
{{/parameters.max_tokens}}
{{#parameters.temperature}}
            paramsBuilder.temperature({{.}}d);
{{/parameters.temperature}}
{{#parameters.top_p}}
            paramsBuilder.topP({{.}}d);
{{/parameters.top_p}}

            while (true) {
                Response response = client.responses().create(paramsBuilder.build());
                ResponseOutputItem output = response.output().get(0);
                if (output.isFunctionCall()) {
                    System.out.println("Tool calls:");
                    
                    // Add assistant message with tool calls
                    ResponseFunctionToolCall toolCall = output.asFunctionCall();
                    inputs.add(ResponseInputItem.ofFunctionCall(toolCall));
                    System.out.println("  " + toolCall.name() + ": " + toolCall.arguments());

                    String toolResult = "Tool not implemented";
                        switch (toolCall.name()) {
{{#toolResults}}
                            case "{{{name}}}":
                                toolResult = {{{name}}}();
                                break;
{{/toolResults}}
                            default:
                                toolResult = "Tool '" + toolCall.name() + "' is not implemented.";
                                break;
                        }
                        
                    inputs.add(ResponseInputItem.ofFunctionCallOutput(ResponseInputItem.FunctionCallOutput.builder()
                        .callId(toolCall.callId())
                        .outputAsJson(toolResult)
                        .build()));
                    paramsBuilder.inputOfResponse(inputs);
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
