### Azure AI Inference Node.js SDK

- Dependency
  ``` javascript
  /**
   * Run in Node.js
   * > npm install @azure-rest/ai-inference @azure/core-auth
   */
  import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
  import { AzureKeyCredential } from "@azure/core-auth";
  ```

- Use Azure AI Foundry model
  ``` javascript
  const endpoint = "<your-own-foundry-model-endpoint>";
  const model = "<your-own-model-deploy-name>";
  const token = process.env["AZURE_API_KEY"];
  ```

- Chat with Model
  ``` javascript
  const client = ModelClient(
    endpoint,
    new AzureKeyCredential(token),
  );

  const response = await client.path("/chat/completions").post({
    body: {
      messages: [
        { role:"system", content: "INPUT_SYSTEM_INSTRUCTION" },
        { role:"user", content: "USER_INPUT" }
      ],
      temperature: 1,
      top_p: 1,
      model: model
    }
  });

  if (isUnexpected(response)) {
    throw response.body.error;
  }

  console.log(response.body.choices[0].message.content);
  ```
