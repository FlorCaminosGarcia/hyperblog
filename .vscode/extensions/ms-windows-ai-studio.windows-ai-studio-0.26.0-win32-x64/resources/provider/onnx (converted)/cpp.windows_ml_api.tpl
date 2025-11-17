// project sample: https://github.com/microsoft/WindowsAppSDK-Samples/blob/main/Samples/WindowsML/cpp/CppConsoleDesktop.GenAI/program.cpp
// reference: https://learn.microsoft.com/en-us/windows/ai/new-windows-ml/get-started?tabs=cppwinrt#step-1-install-or-update-the-windows-app-sdk
#include "pch.h"
#include <iostream>
#include <vector>
#include <numeric>
#include <chrono>
#include <iomanip>

#include <winrt/Windows.Foundation.h>
#include <winrt/Microsoft.Windows.AI.MachineLearning.h>
#include <winml/onnxruntime_cxx_api.h>

#include "ort_genai.h"

using namespace std::chrono;
namespace {
    constexpr const char* kDefaultModelFolder = "{{{model_folder}}}";
}
class ModelInference {
public:
    static void RunInference(const std::string& modelFolder = "");

private:
    static void RegisterProviders();
    static void RunGenerator(
        const std::string& messages_json,
        const std::string& model_folder);
};

// reference: https://learn.microsoft.com/en-us/windows/ai/new-windows-ml/get-started?tabs=cppwinrt#step-2-download-and-register-eps
void ModelInference::RegisterProviders() {
    // First we need to create an ORT environment
    Ort::Env env(ORT_LOGGING_LEVEL_ERROR, "WinMLDemo"); // Use an ID of your own choice

    // Get the default ExecutionProviderCatalog
    winrt::Microsoft::Windows::AI::MachineLearning::ExecutionProviderCatalog catalog =
        winrt::Microsoft::Windows::AI::MachineLearning::ExecutionProviderCatalog::GetDefault();

    // Ensure and register all compatible execution providers with ONNX Runtime
    catalog.EnsureAndRegisterCertifiedAsync().get();
}

void ModelInference::RunGenerator(const std::string& messages_json,
                                  const std::string& model_folder) {
    auto model = OgaModel::Create(model_folder.c_str());
    auto tokenizer = OgaTokenizer::Create(*model);
    auto tk_stream = OgaTokenizerStream::Create(*tokenizer);

    auto prompt = tokenizer->ApplyChatTemplate(
        "",
        messages_json.c_str(),
        "",
        true
    );

    auto params = OgaGeneratorParams::Create(*model);
    params->SetSearchOption("max_length", {{{parameters.max_tokens}}});
    params->SetSearchOption("temperature", {{{parameters.temperature}}});
    params->SetSearchOption("top_k", {{{parameters.top_k}}});
    params->SetSearchOption("top_p", {{{parameters.top_p}}});

    auto generator = OgaGenerator::Create(*model, *params);
    auto sequences = OgaSequences::Create();
    tokenizer->Encode(prompt, *sequences);

    std::cout << "\nOutput: ";

    std::vector<double> token_times;
    auto t0 = std::chrono::steady_clock::now();
    generator->AppendTokenSequences(*sequences);
    double first_token_latency = std::chrono::duration<double>(std::chrono::steady_clock::now() - t0).count();

    while (true) {
        auto t_start = std::chrono::steady_clock::now();

        if (generator->IsDone()) {
			break;
        }
        generator->GenerateNextToken();
        size_t seq_count = generator->GetSequenceCount(0);
        auto tokens = generator->GetSequenceData(0);
        int last_token = tokens[seq_count - 1];
        std::string piece = tk_stream->Decode(last_token);

        double cost = std::chrono::duration<double>(std::chrono::steady_clock::now() - t_start).count() + first_token_latency;
        first_token_latency = 0.0;
        token_times.push_back(cost);
        std::cout << piece << std::flush;
    }
    std::cout << std::endl;

    if (!token_times.empty()) {
        double sum = 0.0;
        for (double v : token_times) sum += v;
        double avg = sum / token_times.size();
        double tps = 1.0 / avg;

        std::cout << "Total tokens generated: " << token_times.size() << "\n";
        std::cout << "Average time per token: " << std::fixed << std::setprecision(4) << avg << " seconds\n";
        std::cout << "Tokens per second: " << std::fixed << std::setprecision(2) << tps << "\n";
    }

}

// ---------- public static ----------
void ModelInference::RunInference(const std::string& modelFolder) {
    std::string text = "Who is Isaac Newton?";
    std::string messages_json = R"([{"role":"user","content":")" + text + R"("}])";
    RegisterProviders();
    RunGenerator(messages_json, modelFolder.empty() ? kDefaultModelFolder : modelFolder);
}