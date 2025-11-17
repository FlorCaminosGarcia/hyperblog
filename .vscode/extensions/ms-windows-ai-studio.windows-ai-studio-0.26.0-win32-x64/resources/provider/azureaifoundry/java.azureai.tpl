/**
 * Run this model in Java
 * 
 * Required Dependencies (for Maven):
 *   <dependency>
 *     <groupId>com.azure</groupId>
 *     <artifactId>azure-ai-inference</artifactId>
 *     <version>1.0.0-beta.5</version>
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

import java.util.ArrayList;
import java.util.List;

public class Main {
    
    private static final String ENDPOINT = "{{{endpoint}}}";
    private static final String API_KEY = System.getenv("AZURE_AI_API_KEY");

{{#toolResults}}
    private static String {{{name}}}() {
        return "{{toolResult}}";
    }

{{/toolResults}}
    public static void main(String[] args) {
        try {
            // Create the Azure AI Inference client
            ChatCompletionsClient client = new ChatCompletionsClientBuilder()
                .credential(new AzureKeyCredential(API_KEY))
                .endpoint(ENDPOINT)
                .buildClient();

            // Create chat messages
            List<ChatRequestMessage> messages = new ArrayList<>();
            List<ChatMessageContentItem> tempUserContents = new ArrayList<>();
            ChatRequestAssistantMessage assistantMsg;
            List<ChatCompletionsToolCall> toolCalls;
{{#parameters.systemWithQuote}}
{{#o1}}
            messages.add(new ChatRequestSystemMessage({{{parameters.systemWithQuote}}}));
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
            assistantMsg = new ChatRequestAssistantMessage("");
            toolCalls = new ArrayList<>();
            toolCalls.add(new ChatCompletionsToolCall("{{{id}}}", new FunctionCall("{{{function.name}}}", {{{function.arguments}}})));
            assistantMsg.setToolCalls(toolCalls);
            messages.add(assistantMsg);
{{/tool_calls}}
{{/isAssistant}}
{{#isTool}}
            messages.add(new ChatRequestToolMessage("{{{tool_call_id}}}").setContent({{#content}}{{{textWithQuote}}}{{/content}}));
{{/isTool}}
{{/messages}}

{{#hasTools}}
            // Define tools
            List<ChatCompletionsToolDefinition> tools = new ArrayList<>();
{{#rawTools}}
            tools.add(new ChatCompletionsToolDefinition(new FunctionDefinition("{{function.name}}")
                .setDescription("{{function.description}}")
                .setParameters(BinaryData.fromString({{{function.parameters}}}))
            ));
{{/rawTools}}

{{/hasTools}}
{{#response_format_json_schema}}
            ChatCompletionsResponseFormat responseFormat = new ChatCompletionsResponseFormatJsonObject();

{{/response_format_json_schema}}
{{#response_format_text}}
            ChatCompletionsResponseFormat responseFormat = new ChatCompletionsResponseFormatText();

{{/response_format_text}}
            while (true) {
                // Create chat completions options
                ChatCompletionsOptions options = new ChatCompletionsOptions(messages);
                options.setModel("{{{model}}}");

{{#hasTools}}
                options.setTools(tools);
{{/hasTools}}
{{#response_format_json_schema}}
                options.setResponseFormat(responseFormat);
{{/response_format_json_schema}}
{{#response_format_text}}
                options.setResponseFormat(responseFormat);
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

                ChatCompletions result = client.complete(options);
                ChatChoice choice = result.getChoices().get(0);

                if (choice.getFinishReason() == CompletionsFinishReason.TOOL_CALLS) {
                    System.out.println("Tool calls:");
                    
                    // Add assistant message with tool calls
                    ChatRequestAssistantMessage assistantMessage = new ChatRequestAssistantMessage(choice.getMessage().getContent() != null ? choice.getMessage().getContent() : "");
                    List<ChatCompletionsToolCall> assistantToolCalls = choice.getMessage().getToolCalls();
                    if (assistantToolCalls != null) {
                        assistantMessage.setToolCalls(assistantToolCalls);
                    }
                    messages.add(assistantMessage);
                    
                    if (assistantToolCalls != null) {
                        for (ChatCompletionsToolCall toolCall : assistantToolCalls) {
                            System.out.println("  " + toolCall.getFunction().getName() + ": " + toolCall.getFunction().getArguments());
                            
                            String toolResult;
                            switch (toolCall.getFunction().getName()) {
{{#toolResults}}
                                case "{{{name}}}":
                                    toolResult = {{{name}}}();
                                    break;
{{/toolResults}}
                                default:
                                    toolResult = "Tool not implemented yet: " + toolCall.getFunction().getName();
                                    break;
                            }

                            messages.add(new ChatRequestToolMessage(toolCall.getId()).setContent(toolResult));
                        }
                    }
                } else {
                    System.out.println("[Model Response] " + choice.getMessage().getContent());
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
