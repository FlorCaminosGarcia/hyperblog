"""Build Agent using Microsoft Agent Framework in Python
# Run this python script
> pip install agent-framework --pre
> python <this-script-path>.py
"""

import asyncio
import os

from agent_framework import ChatAgent, MCPStdioTool, MCPStreamableHTTPTool, ToolProtocol
from agent_framework_azure_ai import AzureAIAgentClient
from agent_framework.openai import OpenAIChatClient
from openai import AsyncOpenAI
from azure.identity.aio import DefaultAzureCredential

# Azure AI Foundry Agent Configuration
ENDPOINT = "{{{projectEndpoint}}}"
MODEL_DEPLOYMENT_NAME = "{{{model}}}"

AGENT_NAME = "mcp-agent"
{{#parameters.systemWithQuote}}
AGENT_INSTRUCTIONS = {{{parameters.systemWithQuote}}}
{{/parameters.systemWithQuote}}
{{^parameters.systemWithQuote}}
AGENT_INSTRUCTIONS = "Use the provided tools to answer questions. You have access to MCP tools for various functionalities."
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
        DefaultAzureCredential() as credential,
{{#agentToolConfigs}}
        ChatAgent(
{{#agentToolModelIsOpenAI}}
            chat_client=OpenAIChatClient(
                async_client=AsyncOpenAI(
                    api_key = os.environ["OPENAI_API_KEY"],
                ),
                model_id="{{{agentToolModel}}}"
            ),
{{/agentToolModelIsOpenAI}}
{{#agentToolModelIsGithub}}
            chat_client=OpenAIChatClient(
                async_client=AsyncOpenAI(
                    base_url = "https://models.github.ai/inference",
                    api_key = os.environ["GITHUB_TOKEN"],
{{#agentToolModelApiVersion}}
                    default_query = {
                        "api-version": "{{agentToolModelApiVersion}}",
                    },
{{/agentToolModelApiVersion}}
                ),
                model_id="{{{agentToolModel}}}"
            ),
{{/agentToolModelIsGithub}}
{{#agentToolModelIsAzureAIFoundry}}
            chat_client=AzureAIAgentClient(
                project_endpoint="{{{agentToolModelProjectEndpoint}}}",
                model_deployment_name="{{{agentToolModel}}}",
                async_credential=credential,
                agent_name="{{{agentToolName}}}",
                agent_id=None,  # Since no Agent ID is provided, the agent will be automatically created and deleted after getting response
            ),
{{/agentToolModelIsAzureAIFoundry}}
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
{{/agentToolMcpConfigs}}
            ]
        ) as {{{agentToolName}}}_agent,
{{/agentToolConfigs}}
        ChatAgent(
            chat_client=AzureAIAgentClient(
                project_endpoint=ENDPOINT,
                model_deployment_name=MODEL_DEPLOYMENT_NAME,
                async_credential=credential,
                agent_name=AGENT_NAME,
                agent_id=None,  # Since no Agent ID is provided, the agent will be automatically created and deleted after getting response
            ),
            instructions=AGENT_INSTRUCTIONS,
{{#parameters.temperature}}
            temperature={{parameters.temperature}},
{{/parameters.temperature}}
{{#parameters.top_p}}
            top_p={{parameters.top_p}},
{{/parameters.top_p}}
{{#parameters.max_tokens}}
            max_completion_tokens={{parameters.max_tokens}},
{{/parameters.max_tokens}}
            tools=[
                *create_mcp_tools(),
{{#agentToolConfigs}}
                {{{agentToolName}}}_agent.as_tool(
                    name="{{{agentToolName}}}",
                    description="{{{description}}}",
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
                    chunk.raw_representation
                    and chunk.raw_representation.raw_representation
                    and hasattr(chunk.raw_representation.raw_representation, "status")
                    and hasattr(chunk.raw_representation.raw_representation, "type")
                    and chunk.raw_representation.raw_representation.status == "completed"
                    and hasattr(chunk.raw_representation.raw_representation, "step_details")
                    and hasattr(chunk.raw_representation.raw_representation.step_details, "tool_calls")
                ):
                    print("")
                    print("Tool calls: ", chunk.raw_representation.raw_representation.step_details.tool_calls)
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
