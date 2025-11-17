# Convert Declarative Agent To Code Guidance

Follow this workflow whenever the user asks to convert declarative agent specifications into runnable agent code:

1. Call the `aitk_get_agent_code_gen_best_practices` tool right away to gather the latest guidance to ground your solution.
2. Call the `aitk_get_agent_model_code_sample` tool next, setting its `language` parameter based on user preference:
   - Use `Python` if the user specifies Python or no language preference (Python is recommended)
   - Use `.NET` if the user specifically requests .NET
   - Include any additional parameters the user supplies (for example, category or host) so the sample aligns with the scenario.
3. Review the declarative workflow reference at https://github.com/microsoft/agent-framework/blob/main/dotnet/src/Microsoft.Agents.AI.Workflows.Declarative/README.md and weave in any relevant insights.

## Language Recommendations
- **Python**: Recommended for most use cases due to its extensive AI/ML ecosystem and ease of use
- **.NET**: Choose when integrating with existing .NET applications or when C# is preferred

Use the information from these steps to synthesize the final response, highlighting how the declarative agent specifications map to the generated code and pointing the user to the declarative workflow documentation when appropriate.