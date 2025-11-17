# Evaluation Code Generation Best Practices

## ⚠️ CRITICAL: Understanding Azure AI Evaluation SDK

**Before implementing any evaluation code, you MUST understand the Azure AI Evaluation SDK architecture and components:**

**🔍 MANDATORY STEP: Use the github_repo tool** to search the `Azure/azure-sdk-for-python` repository for `azure.ai.evaluation` to understand:
- Available built-in evaluators and their capabilities
- Evaluator class structure and required methods (`__init__()` and `__call__()`)
- The `evaluate()` API and its parameters
- Data format requirements and column mapping

**Specific search terms to use:**
```
- "azure.ai.evaluation" - SDK overview and main components
- "evaluate" - Main evaluation API and its parameters
- "Evaluator" - Base evaluator classes and patterns
- "_evaluators" - Built-in evaluators list and usage
```

**Why Critical**: Without proper SDK understanding, you risk:
- Implementing unnecessary custom evaluators when built-ins exist
- Incorrect evaluator structure leading to runtime errors
- Improper data formatting causing evaluation failures
- Missing key SDK features that optimize performance

## Core Principles

- Use Azure AI Evaluation SDK (azure-ai-evaluation)
- Generate a plan before writing code

## Implement Evaluators

### Understanding Evaluator Architecture

All evaluators in Azure AI Evaluation SDK follow a consistent class structure with two essential methods:

| Method | Purpose | Details |
|--------|---------|---------|
| `__init__()` | **Setup** | Initializes evaluator with configuration (model settings, parameters, file paths) |
| `__call__()` | **Evaluation Logic** | Processes inputs from your data and returns evaluation results |

### Choose Your Evaluator Type

Azure AI Evaluation SDK supports three types of evaluators:

| Type | Best For | Complexity | Priority |
|------|----------|------------|----------|
| **🔌 Built-in** | Common AI metrics (task adherence, intent resolution, tool accuracy, etc.) | Low | **1st Choice** |
| **🔧 Custom Code-based** | Business-specific objective metrics with custom logic | Medium | 2nd Choice |
| **🤖 Custom Prompt-based** | Business-specific subjective metrics requiring LLM judgment | High | 3rd Choice |

For each evaluator you need to implement, follow this decision tree:

1. **Check Built-in Evaluators First**: Always start by checking if your evaluator can be satisfied via SDK's built-in evaluators
   - ✅ **If available**: Use the built-in evaluator
   - ❌ **If not available**: Proceed to step 2

2. **Determine Custom Evaluator Type**: If no built-in evaluator meets your needs, choose the appropriate custom implementation:
   - **Code-based Evaluator**: For objective, measurable criteria that require specific business logic
   - **Prompt-based Evaluator**: For subjective criteria requiring human-like judgment that an LLM can assess

#### Option A: Built-in Evaluators (⭐ Start Here First)

Built-in evaluators are pre-implemented and ready to use. They follow the same `__init__` and `__call__` pattern internally. **Always check these first** before implementing custom evaluators.

**⭐ Available Built-in Evaluators:**

##### Agent Evaluators

**TaskAdherenceEvaluator**
- **Type**: Prompt-based
- **Purpose**: Assesses how well an AI-generated response follows the assigned task based on alignment with instructions and definitions, accuracy and clarity of the response, and proper use of provided tool definitions
- **Required Data Columns**: `query`, `response` (optional: `tool_definitions`)

**IntentResolutionEvaluator**
- **Type**: Prompt-based  
- **Purpose**: Assesses whether the user intent was correctly identified and resolved
- **Required Data Columns**: `query`, `response` (optional: `tool_definitions`)

**ToolCallAccuracyEvaluator**
- **Type**: Prompt-based
- **Purpose**: Assesses how accurately an AI uses tools by examining relevance to the conversation, parameter correctness according to tool definitions, and parameter value extraction from the conversation
- **Required Data Columns**: `query`, `tool_definitions` (optional: `tool_calls`, `response`)

**Note**: When including data for tool evaluation:

**`tool_definitions`** - Each tool definition must have the following structure:
```json
{
  "name": "function_name",
  "description": "function_description", 
  "parameters": {...}
}
```

**`tool_calls`** - Each tool call must have the following structure:
```json
{
  "type": "tool_call",
  "name": "function_name",
  // ... other tool call data
}
```
The `type` field must be set to `"tool_call"` and the `name` field must specify the function name.

##### General Purpose Evaluators

**CoherenceEvaluator**
- **Type**: Prompt-based
- **Purpose**: Assesses the ability of the language model to generate text that reads naturally, flows smoothly, and resembles human-like language in its responses
- **Required Data Columns**: `query`, `response`

**FluencyEvaluator**
- **Type**: Prompt-based
- **Purpose**: Assesses the extent to which the generated text conforms to grammatical rules, syntactic structures, and appropriate vocabulary usage
- **Required Data Columns**: `response`

##### Textual Similarity Evaluators

**SimilarityEvaluator**
- **Type**: Code-based
- **Purpose**: Evaluates the likeness between a ground truth sentence and the AI model's generated prediction using sentence-level embeddings. Similarity scores range from 1 to 5
- **Required Data Columns**: `query`, `response`, `ground_truth`

**F1ScoreEvaluator**
- **Type**: Code-based
- **Required Data Columns**: `response`, `ground_truth`

**BleuScoreEvaluator**
- **Type**: Code-based
- **Required Data Columns**: `response`, `ground_truth`

**GleuScoreEvaluator**
- **Type**: Code-based
- **Required Data Columns**: `response`, `ground_truth`

**RougeScoreEvaluator**
- **Type**: Code-based
- **Required Data Columns**: `response`, `ground_truth`

**MeteorScoreEvaluator**
- **Type**: Code-based
- **Required Data Columns**: `response`, `ground_truth`

##### Retrieval-Augmented Generation (RAG) Evaluators

**DocumentRetrievalEvaluator**
- **Type**: Code-based
- **Purpose**: Measures how well the RAG retrieves the correct documents from the document store, calculating document retrieval metrics such as NDCG, XDCG, Fidelity, Top K Relevance and Holes
- **Required Data Columns**: `retrieval_ground_truth` (list with structure `{"document_id": str, "query_relevance_label": int}`), `retrieved_documents` (list with structure `{"document_id": str, "relevance_score": float}`)

**RetrievalEvaluator**
- **Type**: Prompt-based
- **Purpose**: Assesses the AI system's performance in retrieving information for additional context (e.g. a RAG scenario)
- **Required Data Columns**: `query`, `context`

**GroundednessEvaluator**
- **Type**: Prompt-based
- **Purpose**: Assesses the correspondence between claims in an AI-generated answer and the source context, making sure that these claims are substantiated by the context
- **Required Data Columns**: `response`, `context` (optional: `query`)

**RelevanceEvaluator**
- **Type**: Prompt-based
- **Purpose**: Assesses the ability of answers to capture the key points of the context and produce coherent and contextually appropriate outputs
- **Required Data Columns**: `query`, `response`

**ResponseCompletenessEvaluator**
- **Type**: Prompt-based
- **Purpose**: Assesses how thoroughly an AI model's generated response aligns with the key information, claims, and statements established in the ground truth
- **Required Data Columns**: `response`, `ground_truth`

#### Option B: Custom Code-based Evaluators

Use the **github_repo** tool to search the `MicrosoftDocs/azure-ai-docs` repository for "custom code-based evaluators" to understand custom code-based evaluators.

#### Option C: Custom Prompt-based Evaluators (LLM as Judge)

Use the **github_repo** tool to search the `MicrosoftDocs/azure-ai-docs` repository for "custom prompt-based evaluators" to understand custom prompt-based evaluators.

### Set Model Configuration

For built-in prompt-based evaluators and custom prompt-based evaluators that need model configuration, you need to set model configuration (`OpenAIModelConfiguration` or `AzureOpenAIModelConfiguration`). Reuse the existing model used in user workspace if applicable.

For example:
- For OpenAI compatible models:
  ```python
  from azure.ai.evaluation import OpenAIModelConfiguration
  model_config = OpenAIModelConfiguration(
      type="openai", # type is required and must be "openai"
      model="<YOUR_MODEL>",
      base_url="<YOUR_API_BASE_URL>",
      api_key=os.environ["<YOUR_API_KEY_ENV_VAR>"]
  )
  ```
- For Azure OpenAI models:
  ```python
  from azure.ai.evaluation import AzureOpenAIModelConfiguration
  model_config = AzureOpenAIModelConfiguration(
      azure_deployment="<YOUR_MODEL_DEPOOYMENT_NAME>",
      azure_endpoint="<YOUR_AZURE_OPENAI_ENDPOINT>", # Use Azure OpenAI endpoint, NOT Azure AI Foundry project endpoint
      api_key=os.environ["<YOUR_AZURE_OPENAI_API_KEY>"]
      api_version="2025-04-01-preview" # optional
  )
  ```
  
  **⚠️ Important**: Use the **Azure OpenAI endpoint** (e.g., `https://your-resource.openai.azure.com/`), **NOT** the Azure AI Foundry project endpoint. The Azure AI Evaluation SDK requires direct Azure OpenAI service endpoints.

**Note**: The `type` parameter is required for `OpenAIModelConfiguration`:
- Use `type="openai"` for `OpenAIModelConfiguration`

#### Authentication with Credentials

For model configurations that do not use API keys, initialize the built-in prompt-based evaluators with credentials:

```python
from azure.identity import DefaultAzureCredential
from azure.ai.evaluation import ToolCallAccuracyEvaluator, AzureOpenAIModelConfiguration

# Model config without API key
model_config = AzureOpenAIModelConfiguration(
    azure_deployment="<YOUR_MODEL_DEPLOYMENT_NAME>",
    azure_endpoint="<YOUR_AZURE_OPENAI_ENDPOINT>"
    # No api_key parameter
)

# Initialize evaluator with credential
tool_call_accuracy_evaluator = ToolCallAccuracyEvaluator(
    model_config=model_config, 
    credential=DefaultAzureCredential()
)
```

## Execute Unified Evaluation using evaluate() API

**🔍 First: Use github_repo tool** to search the `Azure/azure-sdk-for-python` repository for `evaluate` to understand the API parameters, usage patterns, and examples.

- **⚠️ CRITICAL: Always use the `evaluate()` API** - Do not manually iterate through data, call each evaluator separately, or implement custom aggregation logic
- The `evaluate()` API is the **only recommended way** to run evaluations as it:
  - **Handles all evaluators simultaneously** in a single, optimized execution
  - **Automatically manages data processing** across all evaluators
  - **Automatically aggregates metrics** - No need to implement custom aggregation logic; the API computes summary statistics, averages, and performance metrics for you
  - **Provides comprehensive results** including both row-level data and aggregate metrics
  - **Ensures consistent evaluation execution** and proper error handling
  - **Optimizes performance** by running evaluators in parallel where possible
- **Dataset Requirements:** The `evaluate()` API accepts only data in **JSONL format** (JSON Lines), where each line is a separate JSON object. Your dataset must include all required fields for your chosen evaluators:
    - **Format**: JSONL (JSON Lines) - each line is a separate JSON object
    - **DO NOT INCLUDE TIMESTAMPS IN YOUR DATASET**: Fields with timestamp values (e.g., `2025-08-25T11:27:49.437767`) will cause SDK errors
    - **Include required columns**: Ensure all columns needed by your evaluators are present
    - **Consistent naming**: Use column mapping in evaluator_config to map your data fields to evaluator parameters. Use `${data.column_name}` to refer the column in dataset
- Set `output_path` to make sure evaluation results is saved
- Results will include:
  - **Row-level evaluation data**: Individual scores and reasons for each data point
  - **Aggregate metrics**: Summary statistics across all evaluated data **automatically computed by the API**
  - **Per-evaluator metrics**: Detailed performance metrics for each evaluator **with built-in aggregation**

## Complete Example: Combining Three Types of Evaluators

Here's a complete example combining built-in evaluator, custom code-based evaluator and custom prompt-based evaluator:

```python
from azure.ai.evaluation import evaluate, TaskAdherenceEvaluator, OpenAIModelConfiguration, AzureOpenAIModelConfiguration
import os
import json
from promptflow.client import load_flow # used by custom prompt-based evaluators

# 1. Configure model
# Use Azure OpenAI model configuration
model_config = AzureOpenAIModelConfiguration(
    azure_deployment="<YOUR_MODEL_DEPOOYMENT_NAME>",
    azure_endpoint="<YOUR_AZURE_OPENAI_ENDPOINT>",
    api_key=os.environ["<YOUR_AZURE_OPENAI_API_KEY>"]
    api_version="2025-04-01-preview"
)

# Use OpenAI model configuration
# model_config = OpenAIModelConfiguration(
#     type="openai",
#     model="<YOUR_MODEL>",
#     base_url="<YOUR_API_BASE_URL>",
#     api_key=os.environ["<YOUR_API_KEY_ENV_VAR>"]
# )

# 2. Define custom code-based evaluators
class AnswerLengthEvaluator:
    def __init__(self):
        pass
    
    # A class is made callable by implementing the special method __call__
    def __call__(self, *, answer: str, **kwargs):
        return {"answer_length": len(answer)}

# 3. Define custom prompt-based evaluators
class FriendlinessEvaluator:
    def __init__(self, model_config):
        self._flow = load_flow(source="friendliness.prompty", model={"configuration": model_config})

    def __call__(self, *, response: str, **kwargs):
        llm_response = self._flow(response=response)
        try:
            response = json.loads(llm_response)
        except Exception as ex:
            response = llm_response
        return response

# 4. Create evaluators
task_adherence_evaluator = TaskAdherenceEvaluator(model_config=model_config) # built-in evaluator
answer_length_evaluator = AnswerLengthEvaluator() # custom code-based evaluator
friendliness_evaluator = FriendlinessEvaluator(model_config)


# 5. Run evaluation
result = evaluate(
    data="your_data.jsonl",
    evaluators={
        "task_adherence": task_adherence_evaluator,
        "answer_length": answer_length_evaluator,
        "friendliness": friendliness_evaluator
    },
    evaluator_config={
        "task_adherence": {
            "column_mapping": {
                "query": "${data.query}",
                "response": "${data.response}"
            }
        },
        "answer_length": {
            "column_mapping": {
                "answer": "${data.response}"
            }
        },
        "friendliness": {
            "response": "${data.response}"
        }
    }
)
```