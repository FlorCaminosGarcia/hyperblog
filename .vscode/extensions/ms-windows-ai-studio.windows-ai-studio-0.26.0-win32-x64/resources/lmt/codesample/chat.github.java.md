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

- Use GitHub model
  ``` java
  String endpoint = "https://models.github.ai/inference";
  String model = "openai/gpt-4.1"; // gpt-4.1 as example
  String key = Configuration.getGlobalConfiguration().get("GITHUB_TOKEN");
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

### OpenAI Java SDK

- Dependency
  ``` java
  /**
   * Run in Java
      * Required Dependencies (Maven as example):
      *   <dependency>
      *     <groupId>com.openai</groupId>
      *     <artifactId>openai-java</artifactId>
      *     <version>2.13.1</version>
      *   </dependency>
      */
  
  import com.openai.client.OpenAIClient;
  import com.openai.client.okhttp.OpenAIOkHttpClient;
  import com.openai.models.ChatModel;
  import com.openai.models.chat.completions.ChatCompletionCreateParams;
  ```

- Use GitHub model
  ``` java
  String endpoint = "https://models.github.ai/inference";
  String model = "openai/gpt-4.1"; // gpt-4.1 as example
  String key = Configuration.getGlobalConfiguration().get("GITHUB_TOKEN");

  OpenAIClient client = OpenAIOkHttpClient.builder()
      .baseUrl(endpoint)
      .apiKey(key)
      .build();
  ```

- Chat with model
  ``` java
  ChatCompletionCreateParams createParams = ChatCompletionCreateParams.builder()
      .model(model)
      .addDeveloperMessage("INPUT_SYSTEM_INSTRUCTION")
      .addUserMessage("USER_INPUT")
      .build();

  client.chat().completions().create(createParams).choices().stream()
      .flatMap(choice -> choice.message().content().stream())
      .forEach(System.out::println);
  ```
