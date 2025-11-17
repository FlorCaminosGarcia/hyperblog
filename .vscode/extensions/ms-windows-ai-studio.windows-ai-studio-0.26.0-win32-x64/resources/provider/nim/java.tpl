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

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.core.type.TypeReference;

public class Main {
    
    private static final String ENDPOINT = "{{{baseURL}}}";
    private static final String API_KEY = "unused"; // required for the API but not used

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
{{#o1}}
            paramsBuilder.addUserMessage({{{parameters.systemWithQuote}}});
{{/o1}}
{{^o1}}
            paramsBuilder.addSystemMessage({{{parameters.systemWithQuote}}});
{{/o1}}
{{/parameters.systemWithQuote}}
{{#messages}}
{{#isUser}}
            paramsBuilder.addUserMessage({{{content.0.textWithQuote}}});
{{/isUser}}
{{#isAssistant}}
            paramsBuilder.addAssistantMessage({{{content.0.textWithQuote}}});
{{/isAssistant}}
{{/messages}}

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
{{#o1}}
            paramsBuilder.maxTokens({{parameters.max_tokens}});
{{/o1}}
{{^o1}}
            paramsBuilder.maxTokens({{parameters.max_tokens}});
{{/o1}}
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
