# Using a Model from an Installed MSIX Package

## 1. Create a [Model Catalog Source](./catalog.json)

Use the following PowerShell command to get your `PackageFamilyName` and Update the catalog.json with the correct value:
```powershell
Get-AppxPackage -AllUsers *YourPackage*
```
- For test, you just need to replace [YourPackageFamilyName] with the one you just installed.

## 2 Follow the [sample project](https://github.com/microsoft/WindowsAppSDK-Samples/tree/main/Samples/WindowsML/cs/HelloPhi) to create your own.
If you are using a C# console project, ensure you add the following to your `.csproj` file:
```xml
<PropertyGroup>
    <TargetFramework>net8.0-windows10.0.19041.0</TargetFramework>
    <TargetPlatformMinVersion>10.0.17763.0</TargetPlatformMinVersion>
    <WindowsPackageType>None</WindowsPackageType>
</PropertyGroup>
<ItemGroup>
    <PackageReference Include="Microsoft.ML.OnnxRuntimeGenAI.WinML" Version="0.10.1" />
    <PackageReference Include="Microsoft.Windows.SDK.BuildTools" Version="10.0.26100.6901" />
    <PackageReference Include="Microsoft.WindowsAppSDK" Version="2.0.250930001-experimental1" />
</ItemGroup>
```

## 3. Load the Model via catalog.json from the Installed Windows App

> ⚠️ **Warning :**  If you see the error "**File does not exist or cannot be accessed**", it is likely because the file path contains spaces. Please move `catalog.json` to a directory without spaces in its path.

``` csharp
// Referenc: https://learn.microsoft.com/en-us/windows/ai/new-windows-ml/model-catalog/get-started#complete-example
var catalogJsonPath = YourCatalogJsonPath;

var source = await CatalogModelSource.CreateFromUri(new Uri(catalogJsonPath));
var catalog = new WinMLModelCatalog([source]);

// Find a model
Console.WriteLine("Searching for model...");
var models = await catalog.FindAllModels();
if (models == null || !models.Any())
{
    throw new Exception("No models found.");
}
else
{
    Console.WriteLine("Load model succeed!");
}

var result = await models.First().GetInstance();
using var instance = result.Instance;

// Use the model...
var path = instance.ModelPaths.FirstOrDefault();
if (!Directory.Exists(path) && !File.Exists(path))
{
    throw new Exception("Model path not found at: " + path);
}
Console.WriteLine("Model path: " + path);
//await ModelInference.RunInference(path);

```

## 4. Use the Loaded Model to inference (sample for Large Language Models)
You can also find the following code in: AI TOOLKIT->MY RESOURCES->ONNX (Converted)->Playground->View Code
``` csharp
// project smaple: https://github.com/microsoft/WindowsAppSDK-Samples/blob/main/Samples/WindowsML/cs/HelloPhi/Program.cs
// Reference: https://learn.microsoft.com/en-us/windows/ai/new-windows-ml/get-started?tabs=csharp#step-1-install-or-update-the-windows-app-sdk
using Microsoft.ML.OnnxRuntime;
using Microsoft.ML.OnnxRuntimeGenAI;
using Microsoft.Windows.AI.MachineLearning;
using System.Text.Json;

public static class ModelInference
{
    public static string defaultModelFolder = "{{{model_folder}}}";
    public static async Task RunInference(string? path = null)
    {
        var text = "Who is Isaac Newton?";

        var promptMessageData = new
        {
            role = "user",
            content = text
        };
        string messagesJson = JsonSerializer.Serialize(new[] { promptMessageData });

        var OrtEnv = await RegisterProvider();
        RunGenerator(OrtEnv, messagesJson, path ?? defaultModelFolder);
    }

    // Reference: https://learn.microsoft.com/en-us/windows/ai/new-windows-ml/get-started?tabs=csharp#step-2-download-and-register-eps
    private static async Task<OrtEnv> RegisterProvider()
    {
        // First we create a new instance of EnvironmentCreationOptions
        EnvironmentCreationOptions envOptions = new()
        {
            logId = "WinMLDemo", // Use an ID of your own choice
            logLevel = OrtLoggingLevel.ORT_LOGGING_LEVEL_ERROR
        };

        // And then use that to create the ORT environment
        var ortEnv = OrtEnv.CreateInstanceWithOptions(ref envOptions);

        // Get the default ExecutionProviderCatalog
        var catalog = ExecutionProviderCatalog.GetDefault();

        // Ensure and register all compatible execution providers with ONNX Runtime
        // This downloads any necessary components and registers them
        await catalog.EnsureAndRegisterCertifiedAsync();
        return ortEnv;
    }

    private static void RunGenerator(OrtEnv ortEnv, string messages, string modelFolder)
    {
        using var model = new Model(modelFolder);
        using var tokenizer = new Tokenizer(model);
        using var tokenizerStream = tokenizer.CreateStream();

        string prompt = tokenizer.ApplyChatTemplate(
           template_str: "",
           messages: messages,
           tools: "",
           add_generation_prompt: true
       );

        using var genParams = new GeneratorParams(model);
        genParams.SetSearchOption("max_length", 512);
        genParams.SetSearchOption("temperature", 0.6);
        genParams.SetSearchOption("top_k", 5);
        genParams.SetSearchOption("top_p", 0.95);

        using var generator = new Generator(model, genParams);
        using var sequences = tokenizer.Encode(prompt);

        Console.WriteLine();
        Console.Write("Output: ");

        var tokenTimes = new List<double>();
        var now = DateTime.Now;
        generator.AppendTokenSequences(sequences);
        var ftl = (DateTime.Now - now).TotalSeconds;

        while (true)
        {
            now = DateTime.Now;

            if (generator.IsDone())
                break;
            generator.GenerateNextToken();

            ReadOnlySpan<int> tokens = generator.GetSequence(0);

            int lastToken = tokens[tokens.Length - 1];
            string piece = tokenizerStream.Decode(lastToken);
            var costTime = (DateTime.Now - now).TotalSeconds + ftl;
            ftl = 0;

            tokenTimes.Add(costTime);

            Console.Write(piece);
        }
        Console.WriteLine();

        if (tokenTimes.Count > 0)
        {
            double avg = tokenTimes.Average();
            double tps = 1 / avg;

            Console.WriteLine($"Total tokens generated: {tokenTimes.Count}");
            Console.WriteLine($"Average time per token: {avg:F4} seconds");
            Console.WriteLine($"Tokens per second: {tps:F2}");
        }
    }
}


```

## 5. More Information

For more details, please refer to the [official documentation](https://learn.microsoft.com/en-us/windows/ai/new-windows-ml/model-catalog/get-started).