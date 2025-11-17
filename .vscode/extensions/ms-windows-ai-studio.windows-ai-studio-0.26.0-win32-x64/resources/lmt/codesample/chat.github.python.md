### Azure AI Inference Python SDK

- Dependency
  ``` python
  """Run in Python
  > pip install azure-ai-inference
  """
  import os
  from azure.ai.inference import ChatCompletionsClient
  from azure.ai.inference.models import SystemMessage, UserMessage
  from azure.core.credentials import AzureKeyCredential
  ```

- Use GitHub model
  ``` python
  endpoint = "https://models.github.ai/inference"
  model = "openai/gpt-4.1" # gpt-4.1 as example
  token = os.environ["GITHUB_TOKEN"]
  ```

- Chat with Model
  ``` python
  client = ChatCompletionsClient(
      endpoint=endpoint,
      credential=AzureKeyCredential(token),
  )

  response = client.complete(
      messages=[
          SystemMessage("INPUT_SYSTEM_INSTRUCTION"),
          UserMessage("USER_INPUT"),
      ],
      temperature=1,
      top_p=1,
      model=model
  )

  print(response.choices[0].message.content)
  ```

### OpenAI Python SDK

- Dependency
  ``` python
  """Run in Python
  > pip install openai
  """
  import os
  ```

- Use GitHub model
  ``` python
  from openai import OpenAI

  endpoint = "https://models.github.ai/inference"
  model = "openai/gpt-4.1" # gpt-4.1 as example
  token = os.environ["GITHUB_TOKEN"]

  client = OpenAI(
      base_url=endpoint,
      api_key=token,
  )
  ```

- Chat with model
  ``` python
  response = client.chat.completions.create(
      messages=[
          {
              "role": "system",
              "content": "INPUT_SYSTEM_INSTRUCTION",
          },
          {
              "role": "user",
              "content": "USER_INPUT",
          }
      ],
      temperature=1,
      top_p=1,
      model=model
  )

  print(response.choices[0].message.content)
  ```
