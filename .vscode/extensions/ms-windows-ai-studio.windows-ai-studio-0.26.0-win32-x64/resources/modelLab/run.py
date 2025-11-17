import argparse
import json
from pathlib import Path
from modelLab import logger
import json

def is_winml_runtime(runtime):
    return runtime == "WCR" or runtime == "WCR_CUDA" or runtime == "QNN_LLM"

def parse_arguments():
    parser = argparse.ArgumentParser()
    parser.add_argument("--config", required=True, help="path to input config file")
    parser.add_argument("--runtime", required=True, help="runtime")
    parser.add_argument("--aitk_version", type=str, help="AITK version")
    return parser.parse_args()


def add_aitk_version(history_folder: Path, aitk_version: str):
    import onnx
    from olive.passes.onnx.common import model_proto_to_file

    onnx_files = list((history_folder / "model").glob("*.onnx"))
    if len(onnx_files) == 0:
        onnx_files = list(history_folder.glob("*.onnx"))
    metadata = {"aitk_version": aitk_version}
    for file in onnx_files:
        onnx_model = onnx.load_model(file, load_external_data=False)
        new_metadata_props = {entry.key: entry.value for entry in onnx_model.metadata_props}
        new_metadata_props.update(metadata)
        onnx.helper.set_model_props(onnx_model, new_metadata_props)
        # Look like it is better
        model_proto_to_file(onnx_model, file)
        logger.info("Added AITK version %s to ONNX model %s.", aitk_version, file.name)


def main():
    args = parse_arguments()
    if is_winml_runtime(args.runtime):
        from modelLab import register_execution_providers_to_onnxruntime
        register_execution_providers_to_onnxruntime()
    import olive
    import olive.workflows

    with open(args.config, 'r', encoding='utf-8') as file:
        oliveJson = json.load(file)
        # TODO disable evaluator
        oliveJson.pop("evaluator", None)
        oliveJson.pop("evaluators", None)

    olive.workflows.run(oliveJson)
    # TODO use WorkflowOutput
    model_config = Path(args.config).parent / "model_config.json"
    if not model_config.is_file():
        error = f"Model config file not generated: {model_config}"
        logger.error(error)
        raise Exception(error)
    if args.aitk_version:
        add_aitk_version(model_config.parent, args.aitk_version)
    logger.info("Model lab succeeded for conversion.\nModel config: %s", model_config)

if __name__ == "__main__":
    main()
