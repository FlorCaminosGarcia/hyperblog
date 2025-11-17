### Azure AI Inference .NET SDK

- Dependency
  ``` csharp
  /**
   * Run in .NET 10
   * > dotnet run <this-script-path>.cs
   */
  #:package Azure.AI.Inference@*-*
  #:package Azure.Core@*

  using Azure;
  using Azure.AI.Inference;
  ```

- Use Azure AI Foundry model
  ``` csharp
  var endpoint = new Uri("<your-own-foundry-model-endpoint>");
  var model = "<your-own-model-deploy-name>";
  var credential = new AzureKeyCredential(System.Environment.GetEnvironmentVariable("AZURE_API_KEY"));
  ```

- Chat with Model
  ``` csharp
  var client = new ChatCompletionsClient(
      endpoint,
      credential,
      new AzureAIInferenceClientOptions());

  var requestOptions = new ChatCompletionsOptions()
  {
      Messages =
      {
          new ChatRequestSystemMessage("INPUT_SYSTEM_INSTRUCTION"),
          new ChatRequestUserMessage("USER_INPUT"),
      },
      Temperature = 1f,
      NucleusSamplingFactor = 1f,
      Model = model
  };

  Response<ChatCompletions> response = client.Complete(requestOptions);
  System.Console.WriteLine(response.Value.Content);
  ```
