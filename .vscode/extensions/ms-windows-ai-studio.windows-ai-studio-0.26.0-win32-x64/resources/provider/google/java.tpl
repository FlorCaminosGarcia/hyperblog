/**
 * Run this model in Java
 * 
 * Required Dependencies (for Maven):
 *   <dependency>
 *     <groupId>com.google.genai</groupId>
 *     <artifactId>google-genai</artifactId>
 *     <version>1.9.0</version>
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

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.core.type.TypeReference;
{{#hasTools}}
import com.fasterxml.jackson.databind.JsonNode;
{{/hasTools}}

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

{{#hasTools}}
    private static Schema parseJsonToSchema(String jsonString) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            JsonNode jsonNode = mapper.readTree(jsonString);
            return Schema.fromJson(jsonNode.toString());
        } catch (Exception e) {
            System.err.println("Error parsing JSON schema: " + e.getMessage());
            return Schema.builder().type("object").build();
        }
    }
{{/hasTools}}

    public static void main(String[] args) {
        try {
            // Create the client
            Client client = Client.builder().apiKey(API_KEY).build();

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

{{#hasTools}}
            // Define tools
            List<Tool> tools = new ArrayList<>();
{{#rawTools}}
            tools.add(Tool.builder()
                .functionDeclarations(ImmutableList.of(FunctionDeclaration.builder()
                    .name("{{function.name}}")
                    .description("{{function.description}}")
                    .parameters(parseJsonToSchema({{{function.parameters}}}))
                    .build()))
                .build());
{{/rawTools}}
            configBuilder.tools(tools);
{{/hasTools}}

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

            while (true) {
                GenerateContentResponse response = client.models.generateContent(
                    {{{model}}}, 
                    contents, 
                    configBuilder.build()
                );
                
                List<Candidate> candidates = response.candidates().orElse(new ArrayList<>());
                if (candidates.isEmpty()) {
                    System.err.println("No candidates in response");
                    break;
                }
                
                Candidate firstCandidate = candidates.get(0);
                Content candidateContent = firstCandidate.content().get();
                List<Part> candidateParts = candidateContent.parts().orElse(new ArrayList<>());
                
                // Print the actual text content from the parts
                for (Part part : candidateParts) {
                    if (part.text().isPresent()) {
                        System.out.println("[Model Response] " + part.text().get());
                    }
                }
                
                boolean shouldContinue = false;
                contents.add(candidateContent);
                
                for (Part part : candidateParts) {
                    if (part.functionCall().isPresent()) {
                        shouldContinue = true;
                        FunctionCall functionCall = part.functionCall().get();
                        
                        String toolResult = "Tool not implemented";
                        String functionName = functionCall.name().orElse("unknown");
                        switch (functionName) {
{{#toolResults}}
                            case "{{{name}}}":
                                toolResult = {{{name}}}();
                                break;
{{/toolResults}}
                            default:
                                toolResult = "Tool '" + functionName + "' is not implemented.";
                                break;
                        }
                        
                        List<Part> toolResponseParts = new ArrayList<>();
                        Map<String, Object> toolResponseData = new HashMap<>();
                        toolResponseData.put("result", toolResult);
                        toolResponseParts.add(Part.fromFunctionResponse(functionName, toolResponseData));
                        contents.add(Content.fromParts(toolResponseParts.toArray(new Part[0])));
                    }
                }
                
                if (!shouldContinue) {
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
