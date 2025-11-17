### Foundation Patterns via Microsoft Agent Framework (Python)

These samples introduce the core ideas of executors, edges, agents in workflows, and streaming.

For more patterns, SEARCH the GitHub repository (github.com/microsoft/agent-framework) to get code snippets like: Agent as Edge, Custom Agent Executor, Workflow as Agent, Reflection, Condition, Switch-Case, Fan-out/Fan-in, Loop, Human in Loop, Concurrent, etc.

#### 1. Executors and edges
```python
from typing_extensions import Never

from agent_framework import (
    Executor,
    WorkflowBuilder,
    WorkflowContext,
    executor,
    handler,
)

"""
Foundational patterns: Executors and edges

What this example shows
- Two ways to define a unit of work (an Executor node):
    1) Custom class that subclasses Executor with an async method marked by @handler.
         Possible handler signatures:
            - (text: str, ctx: WorkflowContext) -> None,
            - (text: str, ctx: WorkflowContext[str]) -> None, or
            - (text: str, ctx: WorkflowContext[Never, str]) -> None.
         The first parameter is the typed input to this node, the input type is str here.
         The second parameter is a WorkflowContext[T_Out, T_W_Out].
         WorkflowContext[T_Out] is used for nodes that send messages to downstream nodes with ctx.send_message(T_Out).
         WorkflowContext[T_Out, T_W_Out] is used for nodes that also yield workflow
            output with ctx.yield_output(T_W_Out).
         WorkflowContext without type parameters is equivalent to WorkflowContext[Never, Never], meaning this node
            neither sends messages to downstream nodes nor yields workflow output.

    2) Standalone async function decorated with @executor using the same signature.
         Simple steps can use this form; a terminal step can yield output
         using ctx.yield_output() to provide workflow results.

- Fluent WorkflowBuilder API:
    add_edge(A, B) to connect nodes, set_start_executor(A), then build() -> Workflow.

- Running and results:
    workflow.run(initial_input) executes the graph. Terminal nodes yield
    outputs using ctx.yield_output(). The workflow runs until idle.
    Here uses run() for simplicity; run_stream() is preferred for best practice and production use. See the next example.
"""


# Example 1: A custom Executor subclass
# ------------------------------------
#
# Subclassing Executor lets you define a named node with lifecycle hooks if needed.
# The work itself is implemented in an async method decorated with @handler.
#
# Handler signature contract:
# - First parameter is the typed input to this node (here: text: str)
# - Second parameter is a WorkflowContext[T_Out], where T_Out is the type of data this
#   node will emit via ctx.send_message (here: T_Out is str)
#
# Within a handler you typically:
# - Compute a result
# - Forward that result to downstream node(s) using ctx.send_message(result)
class UpperCase(Executor):
    def __init__(self, id: str):
        super().__init__(id=id)

    @handler
    async def to_upper_case(self, text: str, ctx: WorkflowContext[str]) -> None:
        """Convert the input to uppercase and forward it to the next node.

        Note: The WorkflowContext is parameterized with the type this handler will
        emit. Here WorkflowContext[str] means downstream nodes should expect str.
        """
        result = text.upper()

        # Send the result to the next executor in the workflow.
        await ctx.send_message(result)


# Example 2: A standalone function-based executor
# -----------------------------------------------
#
# For simple steps you can skip subclassing and define an async function with the
# same signature pattern (typed input + WorkflowContext[T_Out, T_W_Out]) and decorate it with
# @executor. This creates a fully functional node that can be wired into a flow.


@executor(id="reverse_text_executor")
async def reverse_text(text: str, ctx: WorkflowContext[Never, str]) -> None:
    """Reverse the input string and yield the workflow output.

    This node yields the final output using ctx.yield_output(result).
    The workflow will complete when it becomes idle (no more work to do).

    The WorkflowContext is parameterized with two types:
    - T_Out = Never: this node does not send messages to downstream nodes.
    - T_W_Out = str: this node yields workflow output of type str.
    """
    result = text[::-1]

    # Yield the output - the workflow will complete when idle
    await ctx.yield_output(result)


async def main():
    """Build and run a simple 2-step workflow using the fluent builder API."""

    upper_case = UpperCase(id="upper_case_executor")

    # Build the workflow using a fluent pattern:
    # 1) add_edge(from_node, to_node) defines a directed edge upper_case -> reverse_text
    # 2) set_start_executor(node) declares the entry point
    # 3) build() finalizes and returns an immutable Workflow object
    workflow = WorkflowBuilder().add_edge(upper_case, reverse_text).set_start_executor(upper_case).build()

    # Run the workflow by sending the initial message to the start node.
    # The run(...) call returns an event collection; its get_outputs() method
    # retrieves the outputs yielded by any terminal nodes.
    events = await workflow.run("hello world")
    print(events.get_outputs())
    # Summarize the final run state (e.g., IDLE)
    print("Final state:", events.get_final_state())

    """
    Sample Output:

    ['DLROW OLLEH']
    Final state: WorkflowRunState.IDLE
    """
```

#### 2. Agents in a Workflow streaming
```python
from agent_framework import (
    ChatAgent,
    ChatMessage,
    Executor,
    ExecutorFailedEvent,
    WorkflowBuilder,
    WorkflowContext,
    WorkflowFailedEvent,
    WorkflowOutputEvent,
    WorkflowRunState,
    WorkflowStatusEvent,
    handler,
)
from agent_framework.azure import AzureOpenAIChatClient
from azure.identity import DefaultAzureCredential
from typing_extensions import Never

"""
Agents in a workflow with streaming

A Writer agent generates content,
then passes the conversation to a Reviewer agent that finalizes the result.
The workflow is invoked with run_stream so you can observe events as they occur.

Purpose:
Show how to wrap chat agents created by AzureOpenAIChatClient inside workflow executors, wire them with WorkflowBuilder,
and consume streaming events from the workflow. Demonstrate the @handler pattern with typed inputs and typed
WorkflowContext[T_Out, T_W_Out] outputs. Agents automatically yield outputs when they complete.
The streaming loop also surfaces WorkflowEvent.origin so you can distinguish runner-generated lifecycle events
from executor-generated data-plane events.
"""


class Writer(Executor):
    """Custom executor that owns a domain specific agent for content generation.

    This class demonstrates:
    - Attaching a ChatAgent to an Executor so it participates as a node in a workflow.
    - Using a @handler method to accept a typed input and forward a typed output via ctx.send_message.
    """

    agent: ChatAgent

    def __init__(self, chat_client: AzureOpenAIChatClient, id: str = "writer"):
        # Create a domain specific agent using your configured AzureOpenAIChatClient.
        self.agent = chat_client.create_agent(
            instructions=(
                "You are an excellent content writer. You create new content and edit contents based on the feedback."
            ),
        )
        # Associate this agent with the executor node.
        super().__init__(id=id)

    @handler
    async def handle(self, message: ChatMessage, ctx: WorkflowContext[list[ChatMessage]]) -> None:
        """Generate content and forward the updated conversation.

        Contract for this handler:
        - message is the inbound user ChatMessage.
        - ctx is a WorkflowContext that expects a list[ChatMessage] to be sent downstream.

        Pattern shown here:
        1) Seed the conversation with the inbound message.
        2) Run the attached agent to produce assistant messages.
        3) Forward the cumulative messages to the next executor with ctx.send_message.
        """
        # Start the conversation with the incoming user message.
        messages: list[ChatMessage] = [message]
        # Run the agent and extend the conversation with the agent's messages.
        response = await self.agent.run(messages)
        messages.extend(response.messages)
        # Forward the accumulated messages to the next executor in the workflow.
        await ctx.send_message(messages)


class Reviewer(Executor):
    """Custom executor that owns a review agent and completes the workflow."""

    agent: ChatAgent

    def __init__(self, chat_client: AzureOpenAIChatClient, id: str = "reviewer"):
        # Create a domain specific agent that evaluates and refines content.
        self.agent = chat_client.create_agent(
            instructions=(
                "You are an excellent content reviewer. You review the content and provide feedback to the writer."
            ),
        )
        super().__init__(id=id)

    @handler
    async def handle(self, messages: list[ChatMessage], ctx: WorkflowContext[Never, str]) -> None:
        """Review the full conversation transcript and yield the final output.

        This node consumes all messages so far. It uses its agent to produce the final text,
        then yields the output. The workflow completes when it becomes idle.
        """
        response = await self.agent.run(messages)
        await ctx.yield_output(response.text)


async def main():
    """Build the two node workflow and run it with streaming to observe events."""
    # Create the Azure chat client. DefaultAzureCredential uses your current az login.
    # AzureOpenAIChatClient requires AzureOpenAI endpoint, not Foundry project endpoint.
    chat_client = AzureOpenAIChatClient(credential=DefaultAzureCredential())
    # Instantiate the two agent backed executors.
    writer = Writer(chat_client)
    reviewer = Reviewer(chat_client)

    # Build the workflow using the fluent builder.
    # Set the start node and connect an edge from writer to reviewer.
    workflow = WorkflowBuilder().set_start_executor(writer).add_edge(writer, reviewer).build()

    # Run the workflow with the user's initial message and stream events as they occur.
    # This surfaces executor events, workflow outputs, run-state changes, and errors.
    async for event in workflow.run_stream(
        ChatMessage(role="user", text="Create a slogan for a new electric SUV that is affordable and fun to drive.")
    ):
        if isinstance(event, WorkflowStatusEvent):
            prefix = f"State ({event.origin.value}): "
            if event.state == WorkflowRunState.IN_PROGRESS:
                print(prefix + "IN_PROGRESS")
            elif event.state == WorkflowRunState.IN_PROGRESS_PENDING_REQUESTS:
                print(prefix + "IN_PROGRESS_PENDING_REQUESTS (requests in flight)")
            elif event.state == WorkflowRunState.IDLE:
                print(prefix + "IDLE (no active work)")
            elif event.state == WorkflowRunState.IDLE_WITH_PENDING_REQUESTS:
                print(prefix + "IDLE_WITH_PENDING_REQUESTS (prompt user or UI now)")
            else:
                print(prefix + str(event.state))
        elif isinstance(event, WorkflowOutputEvent):
            print(f"Workflow output ({event.origin.value}): {event.data}")
        elif isinstance(event, ExecutorFailedEvent):
            print(
                f"Executor failed ({event.origin.value}): "
                f"{event.executor_id} {event.details.error_type}: {event.details.message}"
            )
        elif isinstance(event, WorkflowFailedEvent):
            details = event.details
            print(f"Workflow failed ({event.origin.value}): {details.error_type}: {details.message}")
        else:
            print(f"{event.__class__.__name__} ({event.origin.value}): {event}")

    """
    Sample Output:

    State (RUNNER): IN_PROGRESS
    ExecutorInvokedEvent (RUNNER): ExecutorInvokedEvent(executor_id=writer)
    ExecutorCompletedEvent (RUNNER): ExecutorCompletedEvent(executor_id=writer)
    ExecutorInvokedEvent (RUNNER): ExecutorInvokedEvent(executor_id=reviewer)
    Workflow output (EXECUTOR): Drive the Future. Affordable Adventure, Electrified.
    ExecutorCompletedEvent (RUNNER): ExecutorCompletedEvent(executor_id=reviewer)
    State (RUNNER): IDLE
    """
```
