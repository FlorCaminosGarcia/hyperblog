"""Build Agent using Microsoft Agent Framework in Python
# Run this python script
> pip install agent-framework --pre
> python <this-script-path>.py
"""

import asyncio
import os

from agent_framework import ChatAgent, MCPStdioTool, MCPStreamableHTTPTool, ToolProtocol
from agent_framework.openai import OpenAIChatClient
from openai import AsyncOpenAI

# To authenticate with the model you will need to generate a personal access token (PAT) in your GitHub settings.
# Create your PAT token by following instructions here: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens
openaiClient = AsyncOpenAI(
    base_url = "https://models.github.ai/inference",
    api_key = os.environ["GITHUB_TOKEN"],
{{#api_version}}
    default_query = {
        "api-version": "{{api_version}}",
    },
{{/api_version}}
)

{{#agentToolConfigs}}
{{{agentToolName}}}_client = AsyncOpenAI(
{{#agentToolModelIsGithub}}
    base_url = "https://models.github.ai/inference",
    api_key = os.environ["GITHUB_TOKEN"],
{{#agentToolModelApiVersion}}
    default_query = {
        "api-version": "{{agentToolModelApiVersion}}",
    },
{{/agentToolModelApiVersion}}
{{/agentToolModelIsGithub}}
{{#agentToolModelIsOpenAI}}
    api_key = os.environ["OPENAI_API_KEY"],
{{/agentToolModelIsOpenAI}}
{{#agentToolModelIsAzureAIFoundry}}
    base_url = "{{{agentToolModelBaseUrl}}}",
    api_key = os.environ["AZURE_AI_API_KEY"],
{{/agentToolModelIsAzureAIFoundry}}
)

{{/agentToolConfigs}}

AGENT_NAME = "ai-agent"
{{#parameters.systemWithQuote}}
AGENT_INSTRUCTIONS = {{{parameters.systemWithQuote}}}
{{/parameters.systemWithQuote}}
{{^parameters.systemWithQuote}}
AGENT_INSTRUCTIONS = "You are a helpful AI assistant."
{{/parameters.systemWithQuote}}

# User inputs for the conversation
USER_INPUTS = [
{{#messages}}
{{#isUser}}
{{#content}}
{{#isText}}
    {{{textWithQuote}}},
{{/isText}}
{{/content}}
{{/isUser}}
{{/messages}}
{{^messages}}
    "Hello",
{{/messages}}
]

def create_mcp_tools() -> list[ToolProtocol]:
    return [
{{#mcpConfigs}}
{{#isStdio}}
        MCPStdioTool(
            name="{{{serverName}}}".replace("-", "_"),
            description="MCP server for {{{serverName}}}",
            command={{{commandWithQuote}}},
            args=[
{{#argsWithQuote}}
                {{{.}}},
{{/argsWithQuote}}
            ]{{#env}},
            env={
{{#env}}
                "{{.}}": os.environ.get("{{.}}", ""),
{{/env}}
            }{{/env}}
        ),
{{/isStdio}}
{{#isHttp}}
        MCPStreamableHTTPTool(
            name="{{{serverName}}}".replace("-", "_"),
            description="MCP server for {{{serverName}}}",
            url={{{urlWithQuote}}},
            headers={
{{#headers}}
{{#isAuthorization}}
                "Authorization": "<your-auth-header>",
{{/isAuthorization}}
{{^isAuthorization}}
                "{{{key}}}": "{{{value}}}",
{{/isAuthorization}}
{{/headers}}
            }
        ),
{{/isHttp}}
{{/mcpConfigs}}
    ]

async def main() -> None:
    async with (
{{#agentToolConfigs}}
        ChatAgent(
            chat_client=OpenAIChatClient(
                async_client={{{agentToolName}}}_client,
                model_id="{{{agentToolModel}}}"
            ),
{{#agentToolParameters.systemWithQuote}}
            instructions={{{agentToolParameters.systemWithQuote}}},
{{/agentToolParameters.systemWithQuote}}
{{^agentToolParameters.systemWithQuote}}
            instructions="You are a helpful AI assistant.",
{{/agentToolParameters.systemWithQuote}}
{{#agentToolParameters.temperature}}
            temperature={{agentToolParameters.temperature}},
{{/agentToolParameters.temperature}}
{{#agentToolParameters.top_p}}
            top_p={{agentToolParameters.top_p}},
{{/agentToolParameters.top_p}}
{{#agentToolParameters.max_tokens}}
            max_tokens={{agentToolParameters.max_tokens}},
{{/agentToolParameters.max_tokens}}
            tools=[
{{#agentToolMcpConfigs}}
{{#isStdio}}
                MCPStdioTool(
                    name="{{{serverName}}}".replace("-", "_"),
                    description="MCP server for {{{serverName}}}",
                    command={{{commandWithQuote}}},
                    args=[
{{#argsWithQuote}}
                        {{{.}}},
{{/argsWithQuote}}
                    ]{{#env}},
                    env={
{{#env}}
                        "{{.}}": os.environ.get("{{.}}", ""),
{{/env}}
                    }{{/env}}
                ),
{{/isStdio}}
{{#isHttp}}
                MCPStreamableHTTPTool(
                    name="{{{serverName}}}".replace("-", "_"),
                    description="MCP server for {{{serverName}}}",
                    url={{{urlWithQuote}}}
                ),
{{/isHttp}}
{{/agentToolMcpConfigs}}
            ]
        ) as {{{agentToolName}}}_agent,
{{/agentToolConfigs}}
        ChatAgent(
            chat_client=OpenAIChatClient(
                async_client=openaiClient,
                model_id="{{{model}}}"
            ),
            instructions=AGENT_INSTRUCTIONS,
{{#parameters.temperature}}
            temperature={{parameters.temperature}},
{{/parameters.temperature}}
{{#parameters.top_p}}
            top_p={{parameters.top_p}},
{{/parameters.top_p}}
{{#parameters.max_tokens}}
            max_tokens={{parameters.max_tokens}},
{{/parameters.max_tokens}}
            tools=[
                *create_mcp_tools(),
{{#agentToolConfigs}}
                {{{agentToolName}}}_agent.as_tool(
                    name="{{{agentToolName}}}",
                    description="{{{agentToolDescription}}}",
                ),
{{/agentToolConfigs}}
            ],
        ) as agent
    ):
        # Create a new thread that will be reused
        thread = agent.get_new_thread()

        # Process user messages
        for user_input in USER_INPUTS:
            print(f"\n# User: '{user_input}'")
            async for chunk in agent.run_stream([user_input], thread=thread):
                if chunk.text:
                    print(chunk.text, end="")
                elif (
                    # log tool calls if any
                    chunk.raw_representation
                    and chunk.raw_representation.raw_representation
                    and hasattr(chunk.raw_representation.raw_representation, "choices")
                    and chunk.raw_representation.raw_representation.choices is not None
                    and len(chunk.raw_representation.raw_representation.choices) > 0
                    and hasattr(chunk.raw_representation.raw_representation.choices[0], "delta")
                    and hasattr(chunk.raw_representation.raw_representation.choices[0].delta, "tool_calls")
                    and chunk.raw_representation.raw_representation.choices[0].delta.tool_calls is not None
                    and len(chunk.raw_representation.raw_representation.choices[0].delta.tool_calls) > 0
                ):
                    toolCalls = list(filter(lambda call: call.function.name != None, chunk.raw_representation.raw_representation.choices[0].delta.tool_calls))
                    if len(toolCalls) > 0:
                        print("")
                        print("Tool calls:", list(map(lambda call: call.function.name, toolCalls)))
            print("")
        
        print("\n--- All tasks completed successfully ---")

    # Give additional time for all async cleanup to complete
    await asyncio.sleep(1.0)

if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("\nProgram interrupted by user")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
        import traceback
        traceback.print_exc()
    finally:
        print("Program finished.")
