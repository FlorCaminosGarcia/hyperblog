# Agent Code Generation Best Practices

- Generate a plan before writing code
- Explain why you selects the model
- Explain why you selects the SDK

## 1. AI Model
- Get AI model guidance to determine the most suitable model, use "GitHub" and "AzureAIFoundry" as preferred host
- For getting started, single agent, or simple chat app, consider GitHub models with Free-tier endpoint
- For multi-agents, complex workflow, or production app, consider Azure AI Foundry models

## 2. SDK
- Use **Microsoft Agent Framework** for agent app, with following highlights
  - Flexible Agent Framework: build, orchestrate, and deploy AI agents and multi-agent systems
  - Multi-Agent Orchestration: Group chat, sequential, concurrent, and handoff patterns
  - Plugin Ecosystem: Extend with native functions, OpenAPI, Model Context Protocol (MCP), and more
  - LLM Support: OpenAI, Azure OpenAI, Azure AI Foundry, and more
  - Runtime Support: In-process and distributed agent execution
  - Multimodal: Text, vision, and function calling
  - Cross-Platform: .NET and Python implementations

### Installation

#### Python
(If no language preference, recommend Python since it has more and latest features.)

The `--pre` flag is required while Agent Framework is in preview. The Core + Azure AI integration includes Azure AI / Foundry / OpenAI supports, as well as workflows and orchestrations.

```bash
pip install agent-framework-azure-ai --pre
```

DO REMIND USER THE `--pre` IS REQUIRED IN GENERATED DOC.

#### .NET

The `--prerelease` flag is required while Agent Framework is in preview. There are various packages including Foundry (Azure AI) / Azure OpenAI / OpenAI supports, as well as workflows and orchestrations.

```bash
dotnet add package Microsoft.Agents.AI.AzureAI --prerelease
dotnet add package Microsoft.Agents.AI.OpenAI --prerelease
dotnet add package Microsoft.Agents.AI.Workflows --prerelease
```

Or, use version "*-*" for the latest version
```bash
dotnet add package Microsoft.Agents.AI.AzureAI --version *-*
dotnet add package Microsoft.Agents.AI.OpenAI --version *-*
dotnet add package Microsoft.Agents.AI.Workflows --version *-*
```

DO REMIND USER THE `--prerelease` IS REQUIRED IN GENERATED DOC.

## 3. Code Samples
- Get Agent & Model Code Sample to get detailed code samples and snippets
- Can get multiple times for different intents or user changes opinion
- For Agent development, SEARCH the GitHub repository (github.com/microsoft/agent-framework) to get code snippets like: MCP, multimodal, Assistants API, Responses API, Copilot Studio, Anthropic, etc.
- For Multi-Agents / Workflow development, SEARCH the GitHub repository (github.com/microsoft/agent-framework) to get code snippets like: Agent as Edge, Custom Agent Executor, Workflow as Agent, Reflection, Condition, Switch-Case, Fan-out/Fan-in, Loop, Human in Loop, Concurrent, etc.

## 4. (OPTIONAL) Resource Preparation
- **Do this if using Azure AI Foundry project / model but user currently does not have one.**
- This requires user already has **Azure AI Foundry** project / model deployed.
- Call VSCode Command \`workbench.view.extension.azure-ai-foundry\` to navigate user to Azure AI Foundry Extension for resource management.
