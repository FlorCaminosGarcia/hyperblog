import argparse
from pathlib import Path
from typing import cast
from modelLab import logger

def parse_arguments():
    parser = argparse.ArgumentParser()
    parser.add_argument("--config", required=True, help="path to input config file")
    parser.add_argument("--model_config", required=True, help="path to input model config file")
    parser.add_argument("--built-in", action="store_true", help="use built-in evaluator")
    parser.add_argument("--runtime", required=True, help="runtime")
    return parser.parse_args()

def main():
    args = parse_arguments()

    p = Path(args.model_config)
    if not p.exists():
        raise FileNotFoundError(f"Model config file {p} does not exist.")
    
    if args.built_in:
        from modelLab import register_execution_providers_to_onnxruntime_genai
        register_execution_providers_to_onnxruntime_genai()
        built_in_evaluator(args)
        return

    from modelLab import register_execution_providers_to_onnxruntime
    register_execution_providers_to_onnxruntime()

    from olive.evaluator.metric_result import MetricResult
    from olive.model.config import ModelConfig
    from olive.resource_path import create_resource_path, LocalFile
    from olive.systems.accelerator_creator import create_accelerators
    from olive.systems.olive_system import OliveSystem
    from olive.workflows.run.config import RunConfig

    logger.info("Loading model and configuration ...")
    run_config = cast(RunConfig, RunConfig.parse_file_or_obj(args.config))

    engine = run_config.engine.create_engine(
        olive_config=run_config,
        workflow_id=run_config.workflow_id,
    )
    engine.initialize()

    accelerator_specs = create_accelerators(
        engine.target_config,
        skip_supported_eps_check=True,
        is_ep_required=True,
    )

    target: OliveSystem = engine.target_config.create_system()

    model_config_file: LocalFile = cast(LocalFile, create_resource_path(p))
    model_config = cast(
        ModelConfig,
        ModelConfig.parse_file_or_obj(model_config_file.get_path()),
    )

    logger.info("Evaluating model ...")
    result: MetricResult = target.evaluate_model(
        model_config=model_config,
        evaluator_config=engine.evaluator_config,
        accelerator=accelerator_specs[0],
    )

    output_file = Path(args.config).parent / "metrics.json"
    resultStr = str(result)
    with open(output_file, 'w') as file:
        file.write(resultStr)
    logger.info("Model lab succeeded for evaluation.\n%s", resultStr)

# https://github.com/microsoft/onnxruntime-genai/blob/main/benchmark/python/benchmark_e2e.py

def built_in_get_input_tokens(prompts, tokenizer, prompt_length: int, prompt_index: int, text_template: str):
    prompt = prompts[str(prompt_length)][prompt_index % len(prompts[str(prompt_length)])]
    prompt = text_template.replace("{Content}", prompt)
    return tokenizer.encode(prompt)

def built_in_run_one(model, params, input_tokens, generation_length, tokenizer = None):
    import onnxruntime_genai as og
    import time

    search_options = {}
    search_options["max_length"] = len(input_tokens) + generation_length
    params.set_search_options(**search_options)

    latencies = []    
    ftlTime = time.perf_counter()
    generator = og.Generator(model, params)
    generator.append_tokens(input_tokens)
    generator.generate_next_token()
    ftl = time.perf_counter() - ftlTime

    # AMD NPU del generator will crash when generator not done 
    while True:
        geneStart = time.perf_counter()
        if generator.is_done():
            break
        generator.generate_next_token()
        latencies.append(time.perf_counter() - geneStart)

    if tokenizer:
        logger.info(tokenizer.decode(generator.get_sequence(0)))
    del generator
    return latencies, ftl

def latency_avg(latencies: list[float]) -> float:
    return round(sum(latencies) / len(latencies) * 1000, 5)

def get_results(latencies: list[list[float]], ftls: list[float]) -> dict:
    import json
    logger.info("Latencies (ms): %s", json.dumps([round(float(x) * 1000, 1) for x in latencies[0][:50]]))
    logger.info("FTLs (ms): %s", json.dumps([round(float(x) * 1000, 1) for x in ftls[:10]]))

    metrics_res = {}
    flatten_latencies = [item for sublist in latencies for item in sublist]
    metrics_res["latency-avg"] = latency_avg(flatten_latencies)
    metrics_res["throughput-avg"] = round(1 / metrics_res["latency-avg"] * 1000, 5)
    metrics_res["FTL-avg"] = latency_avg(ftls)
    return metrics_res

def get_device_from_olive_config(olive_config):
    # Get the target system key from olive_config
    target_key = olive_config.get("target")
    if not target_key:
        return None
    
    # Get the specific system using the target key
    systems = olive_config.get("systems", {})
    target_system = systems.get(target_key)
    if not target_system:
        return None
    
    # Get accelerators and return the device from the first one
    accelerators = target_system.get("accelerators", [])
    if accelerators and "device" in accelerators[0]:
        return accelerators[0]["device"].upper()
    return None

def update_device_type_in_json(genai_config_path, device_type):
    if not device_type or not genai_config_path.exists():
        return
    import json
    """
    Update the device_type in the provider_options item that contains device_type.
    If not found, do nothing. If found and different, update and save.
    """
    with open(genai_config_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    # Navigate to provider_options array
    provider_options = (
        data.get("model", {})
            .get("decoder", {})
            .get("session_options", {})
            .get("provider_options", [])
    )

    updated = False
    for item in provider_options:
        # Each item is a dict, e.g. {"OpenVINO": {...}}
        for provider, opts in item.items():
            if "device_type" in opts:
                if opts["device_type"] != device_type:
                    opts["device_type"] = device_type
                    updated = True

    if updated:
        logger.info(f"Updated device_type to {device_type} in {genai_config_path}")
        with open(genai_config_path, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=4)

def syncDeviceTypeToGenaiConfig(olive_config, model_folder):
    device_type = get_device_from_olive_config(olive_config)
    update_device_type_in_json(model_folder / "genai_config.json", device_type)

def built_in_evaluator(args):
    import onnxruntime_genai as og
    import json
    import shutil

    # Get configurations
    logger.info("Loading model and configuration ...")

    inferenceModeConfig = "inference_model.json"
    inferenceModelDir = "model"
    warmup = 5
    repetitions = 10

    history_model_folder = Path(args.model_config).parent
    project_folder = history_model_folder.parent.parent

    historyInferenceModelPath = history_model_folder / inferenceModelDir / inferenceModeConfig
    if not historyInferenceModelPath.exists():
        projInferenceModelPath = project_folder / inferenceModeConfig
        if not projInferenceModelPath.exists():
            logger.warning(f"Model config file {inferenceModeConfig} does not exist. The evaluation result may be inaccurate.")
        else:
            shutil.copyfile(projInferenceModelPath, historyInferenceModelPath)

    if historyInferenceModelPath.exists():
        with open(historyInferenceModelPath, "r", encoding="utf-8") as file:
            inference_config = json.load(file)
            text_template = inference_config["PromptTemplate"]["prompt"]
    else:
        text_template = "{Content}"

    with open(args.config, "r", encoding="utf-8") as file:
        olive_config = json.load(file)
    evaluator_config = olive_config["evaluators"]["modelLab_llm_evaluator"]
    prompt_length = evaluator_config["prompt_length"]
    generation_length = evaluator_config["generation_length"]

    # Create model
    model_folder = history_model_folder / "model"

    syncDeviceTypeToGenaiConfig(olive_config, model_folder)

    model = og.Model(str(model_folder))
    tokenizer = og.Tokenizer(model)
    
    params = og.GeneratorParams(model)

    logger.info("Evaluating model ...")

    # not exactly same length
    with open(Path(__file__).parent / "built_in_prompts.json", "r", encoding="utf-8") as file:
        import json
        prompts = json.load(file)

    for i in range(warmup):
        input_tokens = built_in_get_input_tokens(prompts, tokenizer, prompt_length, i, text_template)
        built_in_run_one(model, params, input_tokens, generation_length, tokenizer)

    result = []
    ftls = []
    for i in range(repetitions):
        input_tokens = built_in_get_input_tokens(prompts, tokenizer, prompt_length, i + warmup, text_template)
        latencies, ftl = built_in_run_one(model, params, input_tokens, generation_length, tokenizer)
        result.append(latencies)
        ftls.append(ftl)

    # Output metrics
    metrics = get_results(result, ftls)
    output_file = Path(args.config).parent / "metrics.json"
    resultStr = json.dumps(metrics, indent=4)
    with open(output_file, 'w') as file:
        file.write(resultStr)
    logger.info("Model lab succeeded for evaluation.\n%s", resultStr)

if __name__ == "__main__":
    main()
