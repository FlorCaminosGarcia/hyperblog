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

- Use GitHub model
  ``` javascript
  const endpoint = "https://models.github.ai/inference";
  const model = "openai/gpt-4.1"; // gpt-4.1 as example
  const token = process.env["GITHUB_TOKEN"];
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

### OpenAI Node.js SDK

- Dependency
  ``` javascript
  /**
   * Run in Node.js
   * > npm install openai
   */
  ```

- Use GitHub model
  ``` javascript
  import OpenAI from "openai";

  const endpoint = "https://models.github.ai/inference";
  const model = "openai/gpt-4.1"; // gpt-4.1 as example
  const token = process.env["GITHUB_TOKEN"];

  const client = new OpenAI({ baseURL: endpoint, apiKey: token });
  ```

- Chat with model
  ``` javascript
  const response = await client.chat.completions.create({
    messages: [
        { role:"system", content: "INPUT_SYSTEM_INSTRUCTION" },
        { role:"user", content: "USER_INPUT" }
      ],
      temperature: 1,
      top_p: 1,
      model: model
    });

  console.log(response.choices[0].message.content);
  ```
