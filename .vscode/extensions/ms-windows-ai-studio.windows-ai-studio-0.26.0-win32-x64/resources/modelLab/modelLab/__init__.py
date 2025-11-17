import logging
import sys

logger = logging.getLogger(__name__)

if not logger.hasHandlers():
    logger.setLevel(logging.INFO)
    _sc = logging.StreamHandler(stream=sys.stdout)
    # JobLogger already has [%(asctime)s] [%(levelname)s]
    _formatter = logging.Formatter("[%(filename)s:%(lineno)d:%(funcName)s] %(message)s")
    _sc.setFormatter(_formatter)
    _sc.stream.reconfigure(encoding='utf-8')
    logger.addHandler(_sc)
    logger.propagate = False

def register_execution_providers_to_onnxruntime():
    import subprocess
    import json
    from pathlib import Path
    import onnxruntime as ort
    
    worker_script = str(Path(__file__).parent / 'winml.py')
    result = subprocess.check_output([sys.executable, worker_script], text=True)
    paths = json.loads(result)
    for item in paths.items():
        print(f"----register ort ep---- {item[0]} {item[1]}")
        ort.register_execution_provider_library(item[0], item[1])

def register_execution_providers_to_onnxruntime_genai():
    import subprocess
    import json
    from pathlib import Path
    import onnxruntime_genai as og
    
    worker_script = str(Path(__file__).parent / 'winml.py')
    result = subprocess.check_output([sys.executable, worker_script], text=True)
    paths = json.loads(result)
    for item in paths.items():
        print(f"----register ort genai ep---- {item[0]} {item[1]}")
        og.register_execution_provider_library(item[0], item[1])
