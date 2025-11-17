
# Reference: https://learn.microsoft.com/en-us/windows/ai/new-windows-ml/get-started?tabs=python#step-1-install-or-update-the-windows-app-sdk
# pip install wasdk-Microsoft.Windows.AI.MachineLearning[all] wasdk-Microsoft.Windows.ApplicationModel.DynamicDependency.Bootstrap
# pip install --pre --index-url https://aiinfra.pkgs.visualstudio.com/PublicPackages/_packaging/ORT-Nightly/pypi/simple/ --extra-index-url https://pypi.org/simple onnxruntime-winml
# Reference: https://pypi.org/project/onnxruntime-genai-winml/
# pip install onnxruntime-genai-winml

text = 'Who is Isaac Newton?'
model_folder = '{{{model_folder}}}'

import sys
import os

# Suppress stderr output from WinML initialization
original_stderr_fd = sys.stderr.fileno()
devnull = os.open(os.devnull, os.O_WRONLY)
os.dup2(devnull, original_stderr_fd)
os.close(devnull)

# Reference: https://learn.microsoft.com/en-us/windows/ai/new-windows-ml/get-started?tabs=python#step-2-download-and-register-eps
import sys
from pathlib import Path
import traceback

_winml_instance = None

class WinML:
    def __new__(cls, *args, **kwargs):
        global _winml_instance
        if _winml_instance is None:
            _winml_instance = super(WinML, cls).__new__(cls, *args, **kwargs)
            _winml_instance._initialized = False
        return _winml_instance

    def __init__(self):
        if self._initialized:
            return
        self._initialized = True

        self._fix_winrt_runtime()
        from winui3.microsoft.windows.applicationmodel.dynamicdependency.bootstrap import (
            InitializeOptions,
            initialize
        )
        import winui3.microsoft.windows.ai.machinelearning as winml
        self._win_app_sdk_handle = initialize(options=InitializeOptions.ON_NO_MATCH_SHOW_UI)
        self._win_app_sdk_handle.__enter__()
        catalog = winml.ExecutionProviderCatalog.get_default()
        self._providers = catalog.find_all_providers()
        self._ep_paths : dict[str, str] = {}
        for provider in self._providers:
            provider.ensure_ready_async().get()
            if provider.library_path == '':
                continue
            self._ep_paths[provider.name] = provider.library_path
        self._registered_eps : list[str] = []

    def __del__(self):
        self._providers = None
        self._win_app_sdk_handle.__exit__(None, None, None)

    def _fix_winrt_runtime(self):
        """
        This function removes the msvcp140.dll from the winrt-runtime package.
        So it does not cause issues with other libraries.
        """
        from importlib import metadata
        site_packages_path = Path(str(metadata.distribution('winrt-runtime').locate_file('')))
        dll_path = site_packages_path / 'winrt' / 'msvcp140.dll'
        if dll_path.exists():
            dll_path.unlink()

    def register_execution_providers_to_ort(self) -> list[str]:
        import onnxruntime_genai as og
        for name, path in self._ep_paths.items():
            if name not in self._registered_eps:
                try:
                    og.register_execution_provider_library(name, path)
                    self._registered_eps.append(name)
                except Exception as e:
                    print(f"Failed to register execution provider {name}: {e}", file=sys.stderr)
                    traceback.print_exc()
        return self._registered_eps

WinML().register_execution_providers_to_ort()

import onnxruntime_genai as og
import time
import json

model = og.Model(model_folder)
tokenizer = og.Tokenizer(model)
tokenizer_stream = tokenizer.create_stream()

prompt_message_data = {
    "role": "user",
    "content": text
}
json_string = "[ " + json.dumps(prompt_message_data) + " ]"
prompt = tokenizer.apply_chat_template(messages=json_string, add_generation_prompt=True)
input_tokens = tokenizer.encode(prompt)



params = og.GeneratorParams(model)
params.set_search_options(**{
    "max_length": {{{parameters.max_tokens}}},
    "temperature": {{{parameters.temperature}}},
    "top_k": {{{parameters.top_k}}},
    "top_p": {{{parameters.top_p}}}
})
generator = og.Generator(model, params)



print("")
print("Output: ", end="", flush=True)

token_times = []

start_time = time.time()
generator.append_tokens(input_tokens)
ftl = time.time() - start_time

while True:
    start_time = time.time()
    if generator.is_done():
        break
    generator.generate_next_token()
    new_token = generator.get_next_tokens()[0]
    # Record the time for this token generation
    token_times.append(time.time() - start_time + ftl)
    ftl = 0.0

    print(tokenizer_stream.decode(new_token), end="", flush=True)
print()

# Calculate and display timing statistics
if token_times:
    total_tokens = len(token_times)
    avg_time = sum(token_times) / total_tokens
    
    print(f"Total tokens generated: {total_tokens}")
    print(f"Average time per token: {avg_time:.4f} seconds")
    print(f"Tokens per second: {total_tokens / sum(token_times):.2f}")

del generator
