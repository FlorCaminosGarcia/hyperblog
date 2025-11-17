# AI Toolkit for Visual Studio Code

![Feature Highlight](https://aka.ms/ai-toolkit/feature-highlights-image)

## What is AI Toolkit

AI Toolkit is a powerful extension for Visual Studio Code that streamlines agent development. With AI Toolkit, you can:

- 🔍 **Explore and evaluate models** from a wide range of providers—including Anthropic, OpenAI, GitHub—or run models locally using ONNX and Ollama.
- ⚡ **Build and test agents in minutes** with prompt generation, quick starters, and seamless MCP tool integrations.

Complete features include:

| Feature | Description | Screenshot |
|---------|-------------|------------|
| [Model Catalog](https://code.visualstudio.com/docs/intelligentapps/models.md) | Discover and access AI models from multiple sources including GitHub, ONNX, Ollama, OpenAI, Anthropic, and Google. Compare models side-by-side and find the perfect fit for your use case. | ![Screenshot showing the AI Toolkit Model Catalog interface with various AI model options](https://code.visualstudio.com/assets/docs/intelligentapps/overview/catalog.png) |
| [Playground](https://code.visualstudio.com/docs/intelligentapps/playground.md) | Interactive chat environment for real-time model testing. Experiment with different prompts, parameters, and multi-modal inputs including images and attachments. | ![Screenshot showing the AI Toolkit Playground interface with chat messaging and model parameter controls](https://code.visualstudio.com/assets/docs/intelligentapps/overview/playground.png) |
| [Agent Builder](https://code.visualstudio.com/docs/intelligentapps/agentbuilder) | Streamlined prompt engineering and agent development workflow. Create sophisticated prompts, integrate MCP tools, and generate production-ready code with structured outputs. | ![Screenshot showing the Agent Builder interface for creating and managing AI agents](https://code.visualstudio.com/assets/docs/intelligentapps/overview/agent-builder.png) |
| [Bulk Run](https://code.visualstudio.com/docs/intelligentapps/bulkrun) | Execute batch prompt testing across multiple models simultaneously. Ideal for comparing model performance and testing at scale with various input scenarios. | ![Screenshot showing the Bulk Run interface for batch testing prompts across multiple AI models](https://code.visualstudio.com/assets/docs/intelligentapps/overview/bulk-run.png) |
| [Model Evaluation](https://code.visualstudio.com/docs/intelligentapps/evaluation) | Comprehensive model assessment using datasets and standard metrics. Measure performance with built-in evaluators (F1 score, relevance, similarity, coherence) or create custom evaluation criteria. | ![Screenshot showing the Model Evaluation interface with metrics and performance analysis tools](https://code.visualstudio.com/assets/docs/intelligentapps/overview/eval.png) |
| [Fine-tuning](https://code.visualstudio.com/docs/intelligentapps/finetune) | Customize and adapt models for specific domains and requirements. Train models locally with GPU support or leverage Azure Container Apps for cloud-based fine-tuning. | ![Screenshot showing the Fine-tuning interface with model adaptation and training controls](https://code.visualstudio.com/assets/docs/intelligentapps/overview/fine-tune.png) |
| [Model Conversion](https://code.visualstudio.com/docs/intelligentapps/modelconversion) | Convert, quantize, and optimize machine learning models for local deployment. Transform models from Hugging Face and other sources to run efficiently on Windows with CPU, GPU, or NPU acceleration. | ![Screenshot showing the Model Conversion interface with tools for optimizing and transforming AI models](https://code.visualstudio.com/assets/docs/intelligentapps/overview/conversion.png) |
| [Tracing](https://code.visualstudio.com/docs/intelligentapps/tracing) | Monitor and analyze the performance of your AI applications. Collect and visualize trace data to gain insights into model behavior and performance. | ![Screenshot showing the Tracing interface with tools for monitoring AI applications](https://code.visualstudio.com/assets/docs/intelligentapps/overview/tracing.png) |

## Getting started

![Getting started](https://raw.githubusercontent.com/MuyangAmigo/MuyangAmigo/main/assets/vsc_readme/GettingStarted0731.gif)

We recommend starting with models hosted by GitHub.
- Follow the [installation guide](https://code.visualstudio.com/docs/intelligentapps/overview#_install-and-setup) to set up AI Toolkit for your device.
- From the extension tree view, select **CATALOG** > **Models** to explore models available. We recommend to getting started with models hosted by GitHub.
- From the model card, select **Try in Playground** to start experimenting the capability of an AI Model.

## Build AI agents

The key feature of AI Toolkit is to build AI agents. The agent builder provides a set of tools to help you create and optimize your AI agents. You can use the agent builder to:
- ✨ Generate and improve prompts with natural language
- 🔁 Iterate and refine prompts based on model responses
- 🧩 Break down tasks with prompt chaining and structured outputs
- ⚡ Test integrations with real-time runs and tool use such as MCP servers
- 💡 Generate production-ready code for rapid app development
- 🧷 Use variables in prompts
- 🧪 Run agents with test cases to validate your agent easily
- 📊 Evaluate the accuracy and performance of your agent with built-in or custom metrics
- 🔗 Function calling support: Enable agents to invoke external functions dynamically
- 🗂️ Agent versioning and version comparison for evaluation results
- 🐞 Local tracing and debugging of agents
- 🚀 Deploy your models and agents to Azure AI Foundry

And a lot of features are coming soon, stay tuned for:

- ☁️ Deploy your agent to the cloud

Agents can now connect to external tools through MCP (Model Control Protocol) servers, enabling them to perform real-world actions like querying a database, accessing APIs, or executing custom logic.

| Feature | Description | Screenshot |
|---------|-------------|------------|
| Connect to an Existing MCP Server | Use tools from command(stdio) or HTTP (server-sent event) | <img src="https://raw.githubusercontent.com/MuyangAmigo/MuyangAmigo/main/assets/vsc_readme/mcp_existing.gif" width="350"> |
| Build and Scaffold a New MCP Server | Start creating your own MCP server from a simple scaffold and test in Agent Builder | <img src="https://raw.githubusercontent.com/MuyangAmigo/MuyangAmigo/main/assets/vsc_readme/scaffold_mcp.gif" width="350"> |

## Feedback and resources

We value your feedback to help shape our roadmap. Explore our [developer documentation](https://aka.ms/AIToolkit/doc) for more features, [open issues or share suggestions on GitHub](https://aka.ms/AIToolkit/feedback), or join our [Discord community](https://aka.ms/azureaifoundry/discord) to connect with other developers.

AI Toolkit ❤️ Developer Community.

## Data and telemetry

The AI Toolkit for Visual Studio Code collects usage data and sends it to Microsoft to help improve our products and services. Read our [privacy statement](https://privacy.microsoft.com/privacystatement) to learn more. This extension respects the `telemetry.enableTelemetry` setting which you can learn more about at [disable telemetry reporting](https://code.visualstudio.com/docs/supporting/faq#_how-to-disable-telemetry-reporting).
