### Azure AI Inference Java SDK

- Dependency
  ``` java
  /**
   * Run in Java
   * Required Dependencies (Maven as example):
   *   <dependency>
   *     <groupId>com.azure</groupId>
   *     <artifactId>azure-ai-inference</artifactId>
   *     <version>1.0.0-beta.5</version>
   *   </dependency>
   */
  import java.util.Arrays;
  import java.util.List;

  import com.azure.ai.inference.ChatCompletionsClient;
  import com.azure.ai.inference.ChatCompletionsClientBuilder;
  import com.azure.ai.inference.models.ChatCompletions;
  import com.azure.ai.inference.models.ChatCompletionsOptions;
  import com.azure.ai.inference.models.ChatRequestMessage;
  import com.azure.ai.inference.models.ChatRequestSystemMessage;
  import com.azure.ai.inference.models.ChatRequestUserMessage;
  import com.azure.core.credential.AzureKeyCredential;
  import com.azure.core.util.Configuration;
  ```

- Use Azure AI Foundry model
  ``` java
  String endpoint = "<your-own-foundry-model-endpoint>";
  String model = "<your-own-model-deploy-name>";
  String key = Configuration.getGlobalConfiguration().get("AZURE_API_KEY");
  ```

- Chat with Model
  ``` java
  ChatCompletionsClient client = new ChatCompletionsClientBuilder()
      .credential(new AzureKeyCredential(key))
      .endpoint(endpoint)
      .buildClient();

  List<ChatRequestMessage> chatMessages = Arrays.asList(
      new ChatRequestSystemMessage("INPUT_SYSTEM_INSTRUCTION"),
      new ChatRequestUserMessage("USER_INPUT")
  );

  ChatCompletionsOptions chatCompletionsOptions = new ChatCompletionsOptions(chatMessages);
  chatCompletionsOptions.setModel(model);

  ChatCompletions completions = client.complete(chatCompletionsOptions);

  System.out.printf("%s.%n", completions.getChoice().getMessage().getContent());
  ```
