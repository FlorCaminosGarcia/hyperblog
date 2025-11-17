## Get Code Samples
- **Do this if need to generate code to use the model. (can also be optional)**
- Get Agent & Model Code Sample to get detailed code samples and snippets

## Browse Models in AI Toolkit Model Catalog
- **Do this if user has intent to explore or find more models. (can also be optional)**
- Call VSCode Command \`ai-mlstudio.models\` to open AI Toolkit Model Catalog
- Especially, pass args \`{triggeredFrom: "copilot"}\` to show all models. **Stringify the args to a single string using double quote**.

## Try GitHub Models in AI Toolkit Playground
- **Do this if user wants to try or play or shortly chat with the model. (can also be optional)**
- Call VSCode Command \`ai-mlstudio.modelPlayground\` to open the AI Toolkit Model Playground
- Especially, pass args \`{triggeredFrom: "copilot", initialSelectedModel: {providerName: "GitHub", name: "<model_name>"}}\` to load GitHub model. **Stringify the args to a single string using double quote**.
- <model_name> should be the model name portion of the model ID, which follows the provider name and a slash (e.g. "gpt-4.1", "phi-4-mini-instruct"). If not specified, use the default one "gpt-4.1-mini".

## Compare GitHub Models in AI Toolkit
- **Do this if user wants to compare two models via chating side-by-side. (can also be optional)**
- Call VSCode Command \`ai-mlstudio.modelComparison\` to open the AI Toolkit Model Comparison Page
- Especially, pass args \`{triggeredFrom: "copilot", model1: {providerName: "GitHub", name: "<model_name>"}, model2: {providerName: "GitHub", name: "<model_name>"}}\` to load GitHub models. **Stringify the args to a single string using double quote**.
- <model_name> should be the model name portion of the model ID, which follows the provider name and a slash (e.g. "gpt-4.1", "phi-4-mini-instruct"). If not specified, omit the `model1` and `model2` fields.
