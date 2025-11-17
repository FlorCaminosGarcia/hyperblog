### Foundry Agent as Executor

Each `Executor` can be Foundry / Azure AI Agent. (Get Agent code sample for Agent basic constructors if needed)

Following sample uses simple student and teacher agents as executors.

Note: this sample uses foundry project endpoint, which is different from previous foundation samples which use Azure OpenAI endpoint.

``` python
from agent_framework import (
    AgentRunEvent,
    ChatAgent,
    ChatMessage,
    Executor,
    Role,
    WorkflowBuilder,
    WorkflowContext,
    WorkflowOutputEvent,
    handler,
)
from agent_framework_azure_ai import AzureAIAgentClient
from azure.identity.aio import DefaultAzureCredential

# Azure AI Agent Configuration
# AzureAIAgentClient requires Foundry project endpoint, not Azure OpenAI endpoint.
ENDPOINT = "<your-foundry-project-endpoint>"
MODEL_DEPLOYMENT_NAME = "<your-foundry-model-deployment>"

class StudentAgentExecutor(Executor):
    """
    Executor that handles a "teacher question" event by re-invoking the agent with
    the current conversation messages and requesting a response.
    """

    agent: ChatAgent

    def __init__(self, agent: ChatAgent, id="student"):
        self.agent = agent
        super().__init__(id=id)

    @handler
    async def handle_teacher_question(
        self, messages: list[ChatMessage], ctx: WorkflowContext[list[ChatMessage]]
    ) -> None:
        response = await self.agent.run(messages)
        # Extract just the text content from the last message
        print(f"Student: {response.messages[-1].contents[-1].text}")

        messages.extend(response.messages)
        await ctx.send_message(messages)


class TeacherAgentExecutor(Executor):
    """
    - Start the conversation by sending the initial teacher prompt to the agent.
    - Receive the student's responses, track the number of turns, and decide when to
      end the workflow.
    - Re-invoke the teacher agent to ask the next question when appropriate.
    """

    turn_count: int = 0
    agent: ChatAgent

    def __init__(self, agent: ChatAgent, id="teacher"):
        self.agent = agent
        super().__init__(id=id)

    @handler
    async def handle_start_message(
        self, message: str, ctx: WorkflowContext[list[ChatMessage]]
    ) -> None:
        """
        The incoming message is treated as a user chat message sent to the teacher agent.
        """
        # Build a user message for the teacher agent and request a response
        chat_message = ChatMessage(Role.USER, text=message)
        messages: list[ChatMessage] = [chat_message]
        response = await self.agent.run(messages)
        # Extract just the text content from the last message
        print(f"Teacher: {response.messages[-1].contents[-1].text}")

        messages.extend(response.messages)
        await ctx.send_message(messages)

    @handler
    async def handle_student_answer(
        self, messages: list[ChatMessage], ctx: WorkflowContext[list[ChatMessage], str]
    ) -> None:
        """
        - Increment the turn counter each time the teacher processes a student's answer.
        - If the turn limit is reached, yield the output and end the workflow.
        - Otherwise, forward the conversation messages back to the teacher agent and request
          the next question.
        """
        self.turn_count += 1

        # End after 5 turns to avoid infinite conversation loops
        if self.turn_count >= 5:
            await ctx.yield_output("Done!")
            return

        # Otherwise, ask the teacher agent to produce the next question using the current messages
        response = await self.agent.run(messages)
        print(f"Teacher: {response.messages[-1].contents[-1].text}")

        messages.extend(response.messages)
        await ctx.send_message(messages)

async def main():
    async with (
        DefaultAzureCredential() as credential,
        ChatAgent(
            chat_client=AzureAIAgentClient( # Agent basic construct
                project_endpoint=ENDPOINT,
                model_deployment_name=MODEL_DEPLOYMENT_NAME,
                async_credential=credential,
                agent_name="StudentAgent",
            ),
            instructions="""You are Jamie, a student. Your role is to answer the teacher's questions briefly and clearly.

            IMPORTANT RULES:
            1. Answer questions directly and concisely
            ...""",
        ) as student_agent,
        ChatAgent(
            chat_client=AzureAIAgentClient( # Agent basic construct
                project_endpoint=ENDPOINT,
                model_deployment_name=MODEL_DEPLOYMENT_NAME,
                async_credential=credential,
                agent_name="TeacherAgent",
            ),
            instructions="""You are Dr. Smith, a teacher. Your role is to ask the student different, simple questions to test their knowledge.

            IMPORTANT RULES:
            1. Ask ONE simple question at a time
            ...""",
        ) as teacher_agent
    ):
        student_executor = StudentAgentExecutor(
            student_agent,
        )
        teacher_executor = TeacherAgentExecutor(
            teacher_agent,
        )
        workflow = (
            WorkflowBuilder()
            .add_edge(teacher_executor, student_executor)
            .add_edge(student_executor, teacher_executor)
            .set_start_executor(teacher_executor)
            .build()
        )

        async for event in workflow.run_stream("Start the quiz session."):
            if isinstance(event, AgentRunEvent):
                agent_name = event.executor_id
                print(f"\n{agent_name}: {event.data}")
            elif isinstance(event, WorkflowOutputEvent):
                print(f"\n🎉 {event.data}")
                break

    # Give additional time for all async cleanup to complete
    await asyncio.sleep(1.0)
```
