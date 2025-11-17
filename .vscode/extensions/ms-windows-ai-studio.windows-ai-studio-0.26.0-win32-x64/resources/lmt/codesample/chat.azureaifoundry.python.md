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

- Use Azure AI Foundry model
  ``` python
  endpoint = "<your-own-foundry-model-endpoint>"
  model = "<your-own-model-deploy-name>"
  token = os.environ["AZURE_API_KEY"]
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
