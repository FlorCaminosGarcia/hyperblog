### Microsoft Agent Framework code samples (.NET)

#### Quick Start
Create foundry server side agent using PersistentAgentsClient, then connect to the agent instance:

``` csharp
// dotnet add package Azure.AI.Agents.Persistent --prerelease (or version *-*)
// dotnet add package Azure.Identity --prerelease (or version *-*)
// dotnet add package Microsoft.Agents.AI.AzureAI --prerelease (or version *-*)
using Azure.AI.Agents.Persistent;
using Azure.Identity;
using Microsoft.Agents.AI;
namespace MyAgent;
public static class Program
{
    public static async Task Main(string[] args)
    {
        const string AgentName = "MyAgent";
        const string AgentInstructions = "You are a helpful agent.";

        // Get a client to create/connect server side agent.
        var persistentAgentsClient = new PersistentAgentsClient(
            "<your-foundry-project-endpoint>",
            new DefaultAzureCredential()
        );

        // Create a service side persistent agent.
        var persistentAgent = await persistentAgentsClient.Administration.CreateAgentAsync(
            model: "<your-foundry-model-deployment>",
            name: AgentName,
            instructions: AgentInstructions);

        // Get an existing server side agent. (here uses the created one)
        AIAgent agent = await persistentAgentsClient.GetAIAgentAsync(
            agentId: persistentAgent.Value.Id
        );

        // You can also create a server side persistent agent and return it as an AIAgent directly.
        // AIAgent agent = await persistentAgentsClient.CreateAIAgentAsync(
        //     model: "<your-foundry-model-deployment>",
        //     name: AgentName,
        //     instructions: AgentInstructions);

        // Run in streaming for best practice and production-grade app
        Console.Write("Agent: ");
        await foreach (var update in agent.RunStreamingAsync("hello"))
        {
            if (!string.IsNullOrEmpty(update.Text))
            {
                Console.Write(update.Text);
            }
        }
        Console.WriteLine();
        // Agent: Hello! How can I assist you today?

        // Or, run in non-streaming for testing
        // var response = await agent.RunAsync("hello");
        // Console.WriteLine($"Agent: {response}"); // Agent: Hello! How can I assist you today?

        // Clean up if needed
        await persistentAgentsClient.Administration.DeleteAgentAsync(agent.Id);
    }
}
```

#### Add tool
Tools (or Function Callings) can let Agent interact with external APIs or services, enhancing its capabilities.

``` csharp
using System.ComponentModel;
using Microsoft.Extensions.AI;
//...
public static class Program
{
    [Description("Get the weather for a given location.")]
    public static string GetWeather([Description("The location to get the weather for.")] string location)
    {
        Random rand = new();
        string[] conditions = { "sunny", "cloudy", "rainy", "stormy" };
        return $"The weather in {location} is {conditions[rand.Next(0, 4)]} with a high of {rand.Next(10, 30)}°C.";
    }

    public static async Task Main(string[] args)
    {
        //...
        AIAgent agent = await persistentAgentsClient.GetAIAgentAsync(
            agentId: //...
            new ChatOptions
            {
                Tools = [AIFunctionFactory.Create(GetWeather)]
            }
        );

        Console.Write("Agent: ");
        await foreach (var update in agent.RunStreamingAsync("What's the weather like in Seattle?"))
        {
            if (!string.IsNullOrEmpty(update.Text))
            {
                Console.Write(update.Text);
            }
        }
        Console.WriteLine();
        // Agent: The weather in Seattle is rainy with a high of 18°C.
        //...
    }
}
```

#### Multi-turn Conversation with Thread
Thread persistence across multiple conversations.

``` csharp
//...
public static class Program
{
    // ...
    public static async Task Main(string[] args)
    {
        //...
        AIAgent agent = await persistentAgentsClient.GetAIAgentAsync(
            //...
        );

        // Create a new thread that will be reused
        AgentThread thread = agent.GetNewThread();

        // First conversation
        Console.Write("Agent: ");
        await foreach (var update in agent.RunStreamingAsync("What's the weather like in Seattle?", thread))
        {
            if (!string.IsNullOrEmpty(update.Text))
            {
                Console.Write(update.Text);
            }
        }
        Console.WriteLine();
        // Agent: The weather in Seattle is rainy with a high of 18°C.

        // Second conversation using the same thread - maintains context
        Console.Write("Agent: ");
        await foreach (var update in agent.RunStreamingAsync("Pardon?", thread))
        {
            if (!string.IsNullOrEmpty(update.Text))
            {
                Console.Write(update.Text);
            }
        }
        Console.WriteLine();
        // Agent: Sure. The weather in Seattle is rainy with a high of 18°C.

        // Or, for testing
        // var response = await agent.RunAsync("Pardon?", thread);
        // Console.WriteLine($"Agent: {response}"); // Agent: Sure. The weather in Seattle is rainy with a high of 18°C.

        //...
    }
}
```

#### Model Context Protocol (MCP) tools
Connect with MCP tools

```csharp
// dotnet add package ModelContextProtocol --prerelease (or version *-*)
// ...
using ModelContextProtocol.Client;
// ...
public static class Program
{
    public static async Task<IList<McpClient>> CreateMcps()
    {
        return [
            // stdio sample - playwright
            await McpClient.CreateAsync(
                new StdioClientTransport(
                    new() {
                        Name = "Playwright MCP",
                        Command = "npx",
                        Arguments = [ "-y", "@playwright/mcp@latest" ]
                    }
                )
            ),
            // streamable http sample - microsoft learn
            await McpClient.CreateAsync(
                new HttpClientTransport(
                    new() {
                        Name = "Microsoft Learn MCP",
                        Endpoint = new Uri("https://learn.microsoft.com/api/mcp")
                    }
                )
            )
        ];
    }

    public static async Task Main(string[] args)
    {
        // ...
        // list MCP tools
        var mcps = await CreateMcps();
        var tools = new List<AITool>();
        foreach (var mcp in mcps)
        {
            var mcpTools = await mcp.ListToolsAsync().ConfigureAwait(false);
            tools.AddRange(mcpTools);
        }
        // ...
        AIAgent agent = await persistentAgentsClient.GetAIAgentAsync(
            agentId: //...
            new ChatOptions
            {
                Tools = tools
            }
        );

        Console.WriteLine();
        await foreach (var update in agent.RunStreamingAsync("<user-input>"))
        {
            if (!string.IsNullOrEmpty(update.Text))
            {
                Console.Write(update.Text);
            }
        }
        Console.WriteLine();

        // Clean up if needed
        foreach (var mcp in mcps)
        {
            await mcp.DisposeAsync();
        }
        await persistentAgentsClient.Administration.DeleteAgentAsync(agent.Id);
    }
}
```
