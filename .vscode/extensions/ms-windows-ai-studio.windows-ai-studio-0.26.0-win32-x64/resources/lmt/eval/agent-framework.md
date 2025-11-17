### SDK-Specific Practices

#### agent-framework SDK
The agent-framework SDK provides built-in support for capturing both final outputs and conversation histories:

- **Final Output**: Available in the `text` property of the `AgentRunResponse` object returned by `agent.run()`
- **Conversation Histories**: Available in the `messages` property of the `AgentRunResponse` object
- **Usage**: Since this SDK returns conversation histories directly, you can collect comprehensive data without requiring additional tracing infrastructure
- **Data Collection**: Extract both `response.text` (final output) and `response.messages` (conversation histories) from the `AgentRunResponse` for complete datasets

#### Understanding Key Classes (Critical for Dataset Collection)

**⚠️ Important**: Understanding these key classes is essential when implementing dataset collection and preparation scripts. Without proper knowledge of the data structures, you cannot parse agent responses successfully or extract meaningful data.

For detailed information about the agent-framework SDK's data structures, use the **github_repo** tool to search the `microsoft/agent-framework` repository:

- **AgentRunResponse**: Search for `AgentRunResponse` to understand the complete response structure and available properties
  - *Critical for*: Accessing both final outputs (`text`) and conversation histories (`messages`)
  - *Why important*: This is your primary data source for datasets
  
- **ChatMessage**: Search for `ChatMessage` to understand the message format used in conversation histories
  - *Critical for*: Parsing individual messages in the conversation flow
  - *Why important*: Enables extraction of system messages, user inputs, agent responses, tool calls and tool results
  
- **Contents**: Search for `Contents` to understand how message content is structured
  - *Critical for*: Processing different content types (tool calls, tool results, etc.)
  - *Why important*: Ensures proper handling of various message formats in your dataset

**Before implementing any dataset collection script**, thoroughly understand these classes to ensure your parsing logic correctly extracts and structures the data from agent responses.