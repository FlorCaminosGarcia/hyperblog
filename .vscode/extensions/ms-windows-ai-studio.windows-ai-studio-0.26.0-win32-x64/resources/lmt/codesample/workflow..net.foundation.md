### Foundation Patterns via Microsoft Agent Framework (.NET)

These samples introduce the core ideas of executors, edges, agents in workflows, and streaming.

For more patterns, SEARCH the GitHub repository (github.com/microsoft/agent-framework) to get code snippets like: Agent as Edge, Custom Agent Executor, Workflow as Agent, Reflection, Condition, Switch-Case, Fan-out/Fan-in, Loop, Human in Loop, Concurrent, etc.

#### 1. Executors and edges
```csharp
// dotnet add package Microsoft.Agents.AI.Workflows --prerelease (or version *-*)
using Microsoft.Agents.AI.Workflows;
namespace MyWorkflow;

/// <summary>
/// This sample introduces the concepts of executors and edges in a workflow.
///
/// Workflows are built from executors (processing units) connected by edges (data flow paths).
/// In this example, we create a simple text processing pipeline that:
/// 1. Takes input text and converts it to uppercase using an UppercaseExecutor
/// 2. Takes the uppercase text and reverses it using a ReverseTextExecutor
///
/// The executors are connected sequentially, so data flows from one to the next in order.
/// For input "Hello, World!", the workflow produces "!DLROW ,OLLEH".
/// </summary>
public static class Program
{
    private static async Task Main()
    {
        // Create the executors
        UppercaseExecutor uppercase = new();
        ReverseTextExecutor reverse = new();

        // Build the workflow by connecting executors sequentially
        WorkflowBuilder builder = new(uppercase);
        builder.AddEdge(uppercase, reverse).WithOutputFrom(reverse);
        var workflow = builder.Build();

        // Execute the workflow with input data
        // Here uses RunAsync() for simplicity; streaming mode is preferred for best practice and production use. See the next example.
        await using Run run = await InProcessExecution.RunAsync(workflow, "Hello, World!");
        foreach (WorkflowEvent evt in run.NewEvents)
        {
            if (evt is ExecutorCompletedEvent executorComplete)
            {
                Console.WriteLine($"{executorComplete.ExecutorId}: {executorComplete.Data}");
            }
        }
        // UppercaseExecutor: HELLO, WORLD!
        // ReverseTextExecutor: !DLROW ,OLLEH
    }
}

/// <summary>
/// First executor: converts input text to uppercase.
/// </summary>
internal sealed class UppercaseExecutor() : Executor<string, string>("UppercaseExecutor")
{
    /// <summary>
    /// Processes the input message by converting it to uppercase.
    /// </summary>
    /// <param name="message">The input text to convert</param>
    /// <param name="context">Workflow context for accessing workflow services and adding events</param>
    /// <param name="cancellationToken">The <see cref="CancellationToken"/> to monitor for cancellation requests.
    /// The default is <see cref="CancellationToken.None"/>.</param>
    /// <returns>The input text converted to uppercase</returns>
    public override ValueTask<string> HandleAsync(string message, IWorkflowContext context, CancellationToken cancellationToken = default) =>
        ValueTask.FromResult(message.ToUpperInvariant()); // The return value will be sent as a message along an edge to subsequent executors
}

/// <summary>
/// Second executor: reverses the input text and completes the workflow.
/// </summary>
internal sealed class ReverseTextExecutor() : Executor<string, string>("ReverseTextExecutor")
{
    /// <summary>
    /// Processes the input message by reversing the text.
    /// </summary>
    /// <param name="message">The input text to reverse</param>
    /// <param name="context">Workflow context for accessing workflow services and adding events</param>
    /// <param name="cancellationToken">The <see cref="CancellationToken"/> to monitor for cancellation requests.
    /// The default is <see cref="CancellationToken.None"/>.</param>
    /// <returns>The input text reversed</returns>
    public override ValueTask<string> HandleAsync(string message, IWorkflowContext context, CancellationToken cancellationToken = default)
    {
        // Because we do not suppress it, the returned result will be yielded as an output from this executor.
        return ValueTask.FromResult(string.Concat(message.Reverse()));
    }
}
```

#### 2. Agents in a Workflow streaming
```csharp
// dotnet add package Azure.AI.OpenAI
// dotnet add package Azure.Identity --prerelease (or version *-*)
// dotnet add package Microsoft.Agents.AI.Workflows --prerelease (or version *-*)
// dotnet add package Microsoft.Extensions.AI.OpenAI --prerelease (or version *-*)
using Azure.AI.OpenAI;
using Azure.Identity;
using Microsoft.Agents.AI;
using Microsoft.Agents.AI.Workflows;
using Microsoft.Extensions.AI;

namespace MyWorkflow;

/// <summary>
/// This sample introduces the use of AI agents as executors within a workflow.
///
/// Instead of simple text processing executors, this workflow uses three translation agents:
/// 1. French Agent - translates input text to French
/// 2. Spanish Agent - translates French text to Spanish
/// 3. English Agent - translates Spanish text back to English
///
/// The agents are connected sequentially, creating a translation chain that demonstrates
/// how AI-powered components can be seamlessly integrated into workflow pipelines.
/// </summary>
/// <remarks>
/// Pre-requisites:
/// - An Azure OpenAI chat completion deployment must be configured.
/// </remarks>
public static class Program
{
    private static async Task Main()
    {
        // Set up the Azure OpenAI client
        var endpoint = "<your-azure-openai-endpoint>"; // Azure OpenAI endpoint, not Foundry Project endpoint
        var deploymentName = "<your-azure-openai-deployment-name>";
        var chatClient = new AzureOpenAIClient(new Uri(endpoint), new DefaultAzureCredential()).GetChatClient(deploymentName).AsIChatClient();

        // Create agents
        AIAgent frenchAgent = GetTranslationAgent("French", chatClient);
        AIAgent spanishAgent = GetTranslationAgent("Spanish", chatClient);
        AIAgent englishAgent = GetTranslationAgent("English", chatClient);

        // Build the workflow by adding executors and connecting them
        var workflow = new WorkflowBuilder(frenchAgent)
            .AddEdge(frenchAgent, spanishAgent)
            .AddEdge(spanishAgent, englishAgent)
            .Build();

        // Execute the workflow
        await using StreamingRun run = await InProcessExecution.StreamAsync(workflow, new ChatMessage(ChatRole.User, "Hello World!"));

        // Must send the turn token to trigger the agents.
        // The agents are wrapped as executors. When they receive messages,
        // they will cache the messages and only start processing when they receive a TurnToken.
        await run.TrySendMessageAsync(new TurnToken(emitEvents: true));
        await foreach (WorkflowEvent evt in run.WatchStreamAsync())
        {
            if (evt is AgentRunUpdateEvent executorComplete)
            {
                Console.WriteLine($"{executorComplete.ExecutorId}: {executorComplete.Data}");
            }
        }
    }

    /// <summary>
    /// Creates a translation agent for the specified target language.
    /// </summary>
    /// <param name="targetLanguage">The target language for translation</param>
    /// <param name="chatClient">The chat client to use for the agent</param>
    /// <returns>A ChatClientAgent configured for the specified language</returns>
    private static ChatClientAgent GetTranslationAgent(string targetLanguage, IChatClient chatClient) =>
        new(chatClient, $"You are a translation assistant that translates the provided text to {targetLanguage}.");
}
```
