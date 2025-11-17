### Microsoft Agent Framework code samples (.NET)

Agent Framework supports various Client. SEARCH the GitHub repository (github.com/microsoft/agent-framework) to get code snippets like: Anthropic, OpenAI, Copilot Studio, Ollama, Assistants API, Responses API, etc.

#### Quick Start
Create some Client first, then create the agent instance:

``` csharp
// dotnet add package Microsoft.Agents.AI --prerelease (or version *-*)
// dotnet add package Microsoft.Agents.AI.<some-client> --prerelease (or version *-*)
// dotnet add package <other-client-package>
using Microsoft.Agents.AI;
// using Microsoft.Agents.AI.<some-client> or <other-client-package>
namespace MyAgent;
public static class Program
{
    public static async Task Main(string[] args)
    {
        const string AgentName = "MyAgent";
        const string AgentInstructions = "You are a helpful agent.";
        // Create AIAgent
        AIAgent agent = new SomeClient(
            //...
        )
        //...
        .CreateAIAgent(
            AgentInstructions,
            AgentName
        );

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
        AIAgent agent =
        // ...
        .CreateAIAgent(
            AgentInstructions,
            AgentName,
            tools: [AIFunctionFactory.Create(GetWeather)]
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
        AIAgent agent =
        // ...
        .CreateAIAgent(
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
        AIAgent agent =
        // ...
        .CreateAIAgent(
            AgentInstructions,
            AgentName,
            tools: tools
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
    }
}
```
