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

- Use GitHub model
  ``` csharp
  var endpoint = new Uri("https://models.github.ai/inference");
  var model = "openai/gpt-4.1"; // gpt-4.1 as example
  var credential = new AzureKeyCredential(System.Environment.GetEnvironmentVariable("GITHUB_TOKEN"));
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

### OpenAI .NET SDK

``` csharp
/**
 * Run in .NET 10
 * > dotnet run <this-script-path>.cs
 */
#:package OpenAI@*-*

using OpenAI;
using OpenAI.Chat;

var endpoint = new Uri("https://models.github.ai/inference");
var model = "openai/gpt-4.1"; // gpt-4.1 as example
var credential = System.Environment.GetEnvironmentVariable("GITHUB_TOKEN");

var openAIOptions = new OpenAIClientOptions()
{
    Endpoint=endpoint
};

var client = new ChatClient(model, new ApiKeyCredential(credential), openAIOptions);

List<ChatMessage> messages = new List<ChatMessage>()
{
    new SystemChatMessage("INPUT_SYSTEM_INSTRUCTION"),
    new UserChatMessage("USER_INPUT"),
};

var requestOptions = new ChatCompletionOptions()
{
    Temperature = 1f,
    TopP = 1f,
};

var response = client.CompleteChat(messages, requestOptions);
System.Console.WriteLine(response.Value.Content[0].Text);
```
