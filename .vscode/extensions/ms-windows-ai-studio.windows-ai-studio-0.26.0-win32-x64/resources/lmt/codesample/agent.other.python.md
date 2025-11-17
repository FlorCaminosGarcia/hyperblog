### Microsoft Agent Framework code samples (Python)

Agent Framework supports various Client. SEARCH the GitHub repository (github.com/microsoft/agent-framework) to get code snippets like: Anthropic, OpenAI, Copilot Studio, Ollama, Assistants API, Responses API, etc.

#### Quick Start
Connect foundry model using some Client, then create the agent instance:

``` python
from agent_framework import ChatAgent
from azure.identity.aio import DefaultAzureCredential
# import some-client from agent framework

async def quick_start() -> None:
    # Since no Agent ID is provided, the agent will be automatically created
    # and deleted after getting response
    async with ChatAgent(
        chat_client=SomeClient(...),
        instructions="You are a helpful agent.",
    ) as agent:
        # use run_stream for best practice and production-grade app
        print("Agent: ", end="", flush=True)
        async for chunk in agent.run_stream("hello"):
            if chunk.text:
                print(chunk.text, end="", flush=True)
        print("\n")
        # Agent: Hello! How can I assist you today?
        # or, use run for testing
        # result = await agent.run("hello")
        # print(f"Agent: {result.text}") # Agent: Hello! How can I assist you today?
```

#### Add tool
Tools (or Function Callings) can let Agent interact with external APIs or services, enhancing its capabilities.

``` python
from random import randint
from typing import Annotated

# Define tool(s) and add to 'ChatAgent'
def get_weather(
    location: Annotated[str, "The location to get the weather for."],
) -> str:
    """Get the weather for a given location."""
    conditions = ["sunny", "cloudy", "rainy", "stormy"]
    return f"The weather in {location} is {conditions[randint(0, 3)]} with a high of {randint(10, 30)}°C."

async def quick_start_tools() -> None:
    #...
    async with ChatAgent(
        chat_client=SomeClient(...),
        instructions="You are a helpful agent.",
        tools=[get_weather],
    ) as agent:
        print("Agent: ", end="", flush=True)
        async for chunk in agent.run_stream("What's the weather like in Seattle?"):
            if chunk.text:
                print(chunk.text, end="", flush=True)
        print("\n")
        # Agent: The weather in Seattle is rainy with a high of 18°C.
```

#### Multi-turn Conversation with Thread
Thread persistence across multiple conversations.

``` python
async def quick_start_thread() -> None:
    #...
    async with ChatAgent(
        ...
    ) as agent:
        # Create a new thread that will be reused
        thread = agent.get_new_thread()

        # First conversation
        print("Agent: ", end="", flush=True)
        async for chunk in agent.run_stream("What's the weather like in Seattle?", thread=thread):
            if chunk.text:
                print(chunk.text, end="", flush=True)
        print("\n")
        # Agent: The weather in Seattle is rainy with a high of 18°C.

        # Second conversation using the same thread - maintains context
        print("Agent: ", end="", flush=True)
        async for chunk in agent.run_stream("Pardon?", thread=thread):
            if chunk.text:
                print(chunk.text, end="", flush=True)
        print("\n")
        # Agent: Sure. The weather in Seattle is rainy with a high of 18°C.

        # or, for testing
        # result = await agent.run("Pardon?", thread=thread)
        # print(f"Agent: {result.text}") # Agent: Sure. The weather in Seattle is rainy with a high of 18°C.
```

#### Model Context Protocol (MCP) tools
Connect with MCP tools

```python
from agent_framework import MCPStdioTool, ToolProtocol, MCPStreamableHTTPTool
from typing import Any

def create_mcp_tools() -> list[ToolProtocol | Any]:
    return [
        # stdio sample - playwright
        MCPStdioTool(
            name="Playwright MCP",
            description="provides browser automation capabilities using Playwright",
            command="npx",
            args=[
                "-y",
                "@playwright/mcp@latest",
            ]
        ),
        # streamable http sample - microsoft learn
        MCPStreamableHTTPTool(
            name="Microsoft Learn MCP",
            description="bring trusted and up-to-date information directly from Microsoft's official documentation",
            url="https://learn.microsoft.com/api/mcp",
        )
    ]

async def quick_start_mcp() -> None:
    #...
    async with ChatAgent(
        chat_client=SomeClient(...),
        instructions="You are a helpful agent.",
        tools=create_mcp_tools(), # use MCP tools
    ) as agent:
        #...
        thread = agent.get_new_thread()
        async for chunk in agent.run_stream(USER_INPUTS, thread=thread):
            if chunk.text:
                print(chunk.text, end="")
            elif (
                # print other details
                chunk.raw_representation
                and chunk.raw_representation.raw_representation
            ):
                print("")
                print("Running: ", chunk.raw_representation.raw_representation)
        print("")
```
