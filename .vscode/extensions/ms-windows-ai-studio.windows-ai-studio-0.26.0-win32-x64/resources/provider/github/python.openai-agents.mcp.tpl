"""Connect model with mcp tools in Python
# Run this python script
> pip install openai-agents==0.*
> python <this-script-path>.py
"""
import asyncio
{{#hasImage}}
import base64
{{/hasImage}}
import json
import logging
import os
import sys
from typing import Any

from agents import Agent, AgentOutputSchemaBase, ModelSettings, OpenAIChatCompletionsModel, Runner, set_tracing_disabled
from agents.mcp import MCPServerSse, MCPServerStdio, MCPServerStreamableHttp

from openai import AsyncOpenAI

{{#hasImage}}
def encodeImage(path, mime_type):
    with open(path, "rb") as image:
        encoded = base64.b64encode(image.read())
    return f"data:{mime_type};base64,{encoded.decode()}"

{{/hasImage}}
{{#response_format_json_schema}}
class CustomOutputSchema(AgentOutputSchemaBase):
    def is_plain_text(self) -> bool:
        return False

    def name(self) -> str:
        return "CustomOutputSchema"

    def json_schema(self) -> dict[str, Any]:
        return  {{{response_format_json_schema.schema}}}
    def is_strict_json_schema(self) -> bool:
        return {{{response_format_json_schema.strict}}}

    def validate_json(self, json_str: str) -> Any:
        return json.loads(json_str)

{{/response_format_json_schema}}
{{#agentToolConfigs}}
{{#agentToolResponseFormatJsonSchema}}
class {{{agentToolName}}}OutputSchema(AgentOutputSchemaBase):
    def is_plain_text(self) -> bool:
        return False

    def name(self) -> str:
        return "{{{agentToolName}}}OutputSchema"

    def json_schema(self) -> dict[str, Any]:
        return  {{{agentToolResponseFormatJsonSchema.schema}}}
    def is_strict_json_schema(self) -> bool:
        return {{{agentToolResponseFormatJsonSchema.strict}}}

    def validate_json(self, json_str: str) -> Any:
        return json.loads(json_str)

{{/agentToolResponseFormatJsonSchema}}
{{/agentToolConfigs}}
async def main():
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
    # init agent tools
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

    {{{agentToolName}}}_servers = [
{{#agentToolMcpConfigs}}
{{#isStdio}}
        MCPServerStdio(
            params = {
                "command": {{{commandWithQuote}}},
                "args": [
{{#argsWithQuote}}
                    {{{.}}},
{{/argsWithQuote}}
                ],
                "env": {
{{#env}}
                    "{{.}}": os.environ["{{.}}"],
{{/env}}
                }
            },
            name = "{{{serverName}}}",
            client_session_timeout_seconds = 30,
        ),
{{/isStdio}}
{{#isSse}}
        MCPServerSse(
            params = {
                "url": {{{urlWithQuote}}},
                "timeout": 30,
                "headers": {
{{#headers}}
{{#isAuthorization}}
                    "{{key}}": "Bearer " + os.environ["YOUR_AUTH_TOKEN"],
{{/isAuthorization}}
{{^isAuthorization}}
                    "{{key}}": "{{value}}",
{{/isAuthorization}}
{{/headers}}
                },
            },
            name = "{{{serverName}}}",
            client_session_timeout_seconds = 30,
        ),
{{/isSse}}
{{#isHttp}}
        MCPServerStreamableHttp(
            params = {
                "url": {{{urlWithQuote}}},
                "timeout": 30,
                "headers": {
{{#headers}}
{{#isAuthorization}}
                    "{{key}}": "Bearer " + os.environ["YOUR_AUTH_TOKEN"],
{{/isAuthorization}}
{{^isAuthorization}}
                    "{{key}}": "{{value}}",
{{/isAuthorization}}
{{/headers}}
                },
            },
            name = "{{{serverName}}}",
            client_session_timeout_seconds = 30,
        ),
{{/isHttp}}
{{/agentToolMcpConfigs}}
   ]

    {{{agentToolName}}}_agent = Agent(
        name = "{{{agentToolDisplayName}}}",
{{#agentToolParameters.systemWithQuote}}
        instructions = {{{agentToolParameters.systemWithQuote}}},
{{/agentToolParameters.systemWithQuote}}
        mcp_servers = {{{agentToolName}}}_servers,
        model = OpenAIChatCompletionsModel("{{{agentToolModel}}}", {{{agentToolName}}}_client),
        model_settings = ModelSettings(
{{#agentToolParameters.temperature}}
            temperature = {{.}},
{{/agentToolParameters.temperature}}
{{#agentToolParameters.top_p}}
            top_p = {{.}},
{{/agentToolParameters.top_p}}
{{#agentToolParameters.frequency_penalty}}
            frequency_penalty = {{.}},
{{/agentToolParameters.frequency_penalty}}
{{#agentToolParameters.presence_penalty}}
            presence_penalty = {{.}},
{{/agentToolParameters.presence_penalty}}
{{#agentToolParameters.max_tokens}}
{{^agentToolModelIsOSeries}}
            max_tokens = {{agentToolParameters.max_tokens}},
{{/agentToolModelIsOSeries}}
{{/agentToolParameters.max_tokens}}
{{#agentToolParameters.verbosity}}
            verbosity = "{{.}}",
{{/agentToolParameters.verbosity}}
            reasoning = {
{{#agentToolParameters.reasoning_effort}}
                "effort": "{{.}}",
{{/agentToolParameters.reasoning_effort}}
{{#agentToolParameters.reasoning_summary}}
                "summary": "{{.}}",
{{/agentToolParameters.reasoning_summary}}
            },
{{#agentToolResponseFormatJsonSchema}}
        output_type = {{{agentToolName}}}OutputSchema(),
{{/agentToolResponseFormatJsonSchema}}
        ),
    )

{{/agentToolConfigs}}
    # init MCP servers
    servers = [
{{#mcpConfigs}}
{{#isStdio}}
        MCPServerStdio(
            params = {
                "command": {{{commandWithQuote}}},
                "args": [
{{#argsWithQuote}}
                    {{{.}}},
{{/argsWithQuote}}
                ],
                "env": {
{{#env}}
                    "{{.}}": os.environ["{{.}}"],
{{/env}}
                }
            },
            name = "{{{serverName}}}",
            client_session_timeout_seconds = 30,
        ),
{{/isStdio}}
{{#isSse}}
        MCPServerSse(
            params = {
                "url": {{{urlWithQuote}}},
                "timeout": 30,
                "headers": {
{{#headers}}
{{#isAuthorization}}
                    "{{key}}": "Bearer " + os.environ["YOUR_AUTH_TOKEN"],
{{/isAuthorization}}
{{^isAuthorization}}
                    "{{key}}": "{{value}}",
{{/isAuthorization}}
{{/headers}}
                },
            },
            name = "{{{serverName}}}",
            client_session_timeout_seconds = 30,
        ),
{{/isSse}}
{{#isHttp}}
        MCPServerStreamableHttp(
            params = {
                "url": {{{urlWithQuote}}},
                "timeout": 30,
                "headers": {
{{#headers}}
{{#isAuthorization}}
                    "{{key}}": "Bearer " + os.environ["YOUR_AUTH_TOKEN"],
{{/isAuthorization}}
{{^isAuthorization}}
                    "{{key}}": "{{value}}",
{{/isAuthorization}}
{{/headers}}
                },
            },
            name = "{{{serverName}}}",
            client_session_timeout_seconds = 30,
        ),
{{/isHttp}}
{{/mcpConfigs}}
    ]

    # setup logger
    logger = logging.getLogger("openai.agents")
    logger.setLevel(logging.DEBUG)
    logHandler = logging.StreamHandler(sys.stdout)
    logHandler.setFormatter(logging.Formatter('[Agent Log]: %(message)s'))
    logger.addHandler(logHandler)
    set_tracing_disabled(True)

    agent = Agent(
        name = "agent",
{{#parameters.systemWithQuote}}
        instructions = {{{parameters.systemWithQuote}}},
{{/parameters.systemWithQuote}}
        mcp_servers = servers,
        model = OpenAIChatCompletionsModel("{{{model}}}", openaiClient),
        model_settings = ModelSettings(
{{#parameters.temperature}}
            temperature = {{.}},
{{/parameters.temperature}}
{{#parameters.top_p}}
            top_p = {{.}},
{{/parameters.top_p}}
{{#parameters.frequency_penalty}}
            frequency_penalty = {{.}},
{{/parameters.frequency_penalty}}
{{#parameters.presence_penalty}}
            presence_penalty = {{.}},
{{/parameters.presence_penalty}}
{{#parameters.max_tokens}}
{{^o1}}
            max_tokens = {{parameters.max_tokens}},
{{/o1}}
{{/parameters.max_tokens}}
{{#parameters.verbosity}}
            verbosity = "{{.}}",
{{/parameters.verbosity}}
            reasoning = {
{{#parameters.reasoning_effort}}
                "effort": "{{.}}",
{{/parameters.reasoning_effort}}
{{#parameters.reasoning_summary}}
                "summary": "{{.}}",
{{/parameters.reasoning_summary}}
            },
        ),
{{#response_format_json_schema}}
        output_type=CustomOutputSchema(),
{{/response_format_json_schema}}
        tools = [
{{#agentToolConfigs}}
            {{{agentToolName}}}_agent.as_tool(
                tool_name="{{{agentToolName}}}",
                tool_description="{{{agentToolDescription}}}",
            ),
{{/agentToolConfigs}}
        ],
    )

    try:
        for server in servers:
            await server.connect()
{{#agentToolConfigs}}
        for server in {{{agentToolName}}}_servers:
            await server.connect()
{{/agentToolConfigs}}
        result = await Runner.run(
            agent,
            [
{{#messages}}
{{#isUser}}
                {
                    "role": "{{role}}",
                    "content": [
{{#content}}
{{#isText}}
                        {
                            "type": "input_text",
                            "text": {{{textWithQuote}}},
                        },
{{/isText}}
{{#isImage}}
                        {
                            "type": "input_image",
                            "detail": "auto",
                            "image_url": encodeImage({{{localPathWithQuote}}}, "{{{mimeType}}}"),
                        },
{{/isImage}}
{{/content}}
                    ],
                },
{{/isUser}}
{{#isAssistant}}
{{#isContent}}
                {
                    "id": "",
                    "type": "message",
                    "role": "{{role}}",
                    "status": "completed",
                    "content": [
{{#content}}
{{#isText}}
                        {
                            "type": "output_text",
                            "text": {{{textWithQuote}}},
                            "annotations": [],
                        },
{{/isText}}
{{/content}}
                    ],
                },
{{/isContent}}
{{/isAssistant}}
{{#isTool}}
                {
                    "id": "",
                    "type": "message",
                    "role": "assistant",
                    "status": "completed",
                    "content": [
{{#content}}
{{#isText}}
                        {
                            "type": "output_text",
                            "text": {{{textWithQuote}}},
                            "annotations": [],
                        },
{{/isText}}
{{/content}}
                    ],
                },
{{/isTool}}
{{/messages}}
            ]
        )
        print("")
        print("[Model Response] " + str(result.final_output))
    except Exception as e:
        print(f"\nError: {str(e)}")
    finally:
        for server in servers:
            await server.cleanup()
{{#agentToolConfigs}}
        for server in {{{agentToolName}}}_servers:
            await server.cleanup()
{{/agentToolConfigs}}

if __name__ == "__main__":
    try:
        asyncio.run(main())
    except asyncio.exceptions.CancelledError:
        # ignore cleanup cancel error
        pass