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
    
    private static final String ENDPOINT = "{{{baseURL}}}";
    private static final String API_KEY = "unused"; // required for the API but not used

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
            // Create OpenAI client with custom endpoint
            OpenAIClient client = OpenAIOkHttpClient.builder()
                .baseUrl(ENDPOINT)
                .apiKey(API_KEY)
                .build();

            // Create chat completion request builder
            ChatCompletionCreateParams.Builder paramsBuilder = ChatCompletionCreateParams.builder()
                .model("{{{model}}}");
{{#parameters.systemWithQuote}}
            paramsBuilder.addSystemMessage({{{parameters.systemWithQuote}}});
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
            paramsBuilder.addAssistantMessage({{{content.0.textWithQuote}}});
{{/isAssistant}}
{{/messages}}

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

            ChatCompletion completion = client.chat().completions().create(paramsBuilder.build());
            System.out.println("[Model Response] " + completion.choices().get(0).message().content().orElse(""));
            
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
