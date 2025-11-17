# MSIX packaging helpers

import os
import subprocess
from pathlib import Path

def get_makeappx_path():
    makeappx_path = None
    
    try:
        import winreg
        
        # Open the Windows Kits registry key
        with winreg.OpenKey(
            winreg.HKEY_LOCAL_MACHINE,
            r"SOFTWARE\Microsoft\Windows Kits\Installed Roots"
        ) as key:
            # Get the Windows SDK installation path
            sdk_root = winreg.QueryValueEx(key, "KitsRoot10")[0]
            
            # Get all version directories
            sdk_versions = []
            i = 0
            while True:
                try:
                    version = winreg.EnumKey(key, i)
                    if version.startswith("10."):
                        sdk_versions.append(version)
                    i += 1
                except OSError:
                    break
            
            # Sort versions to get the latest
            sdk_versions.sort(reverse=True)
            
            # Try each version, starting with the latest
            for version in sdk_versions:
                bin_path = Path(sdk_root) / "bin" / version / "x64" / "makeappx.exe"
                if bin_path.exists():
                    makeappx_path = str(bin_path)
                    print(f"Found makeappx.exe in Windows SDK version {version}")
                    break
            
            # If no version-specific path found, try the x64 folder directly
            if not makeappx_path:
                bin_path = Path(sdk_root) / "bin" / "x64" / "makeappx.exe"
                if bin_path.exists():
                    makeappx_path = str(bin_path)
                    print("Found makeappx.exe in Windows SDK common bin folder")
    except (ImportError, FileNotFoundError, OSError) as e:
        print(f"Could not query Windows SDK from registry: {str(e)}")
        
        # Fall back to well-known paths if registry query fails
        sdk_paths = [
            "C:\\Program Files (x86)\\Windows Kits\\10\\bin\\10.0.22621.0\\x64\\makeappx.exe",
            "C:\\Program Files (x86)\\Windows Kits\\10\\bin\\10.0.19041.0\\x64\\makeappx.exe",
            "C:\\Program Files (x86)\\Windows Kits\\10\\bin\\10.0.18362.0\\x64\\makeappx.exe",
            "C:\\Program Files (x86)\\Windows Kits\\10\\bin\\10.0.17763.0\\x64\\makeappx.exe",
            "C:\\Program Files (x86)\\Windows Kits\\10\\bin\\x64\\makeappx.exe"
        ]
        
        for path in sdk_paths:
            if os.path.exists(path):
                makeappx_path = path
                print(f"Found makeappx.exe at hardcoded path: {path}")
                break
    
    # Try environment variable as a last resort
    if not makeappx_path:
        sdk_path = os.environ.get("WindowsSdkDir")
        if sdk_path:
            for bin_dir in Path(sdk_path).glob("**/x64"):
                possible_path = bin_dir / "makeappx.exe"
                if possible_path.exists():
                    makeappx_path = str(possible_path)
                    print(f"Found makeappx.exe in WindowsSdkDir: {makeappx_path}")
                    break
    
    # If not found in SDK, use PATH
    if not makeappx_path:
        makeappx_path = "makeappx.exe"
        print("Using makeappx.exe from PATH - may fail if not in PATH")
        
    print(f"Using makeappx at: {makeappx_path}")
    return makeappx_path

def build_msix_package():
    """
    Create an MSIX package from a model directory.      
    """
    # Ensure we're on Windows
    if os.name != 'nt':
        print("MSIX packaging is only supported on Windows.")
        return None    
    
    script_dir = Path(os.path.abspath(os.path.dirname(__file__)))
    model_dir = script_dir.parent / "model"
    output_msix_path = script_dir / "build.msix"

    makeappx_path = get_makeappx_path()
    
    # Remove existing file to avoid overwrite prompt
    if output_msix_path.exists():
        print(f"Removing existing file {output_msix_path}")
        os.remove(output_msix_path)
    
    # Call makeappx.exe to create the MSIX package
    cmd = [
        makeappx_path,
        "pack", 
        "/d", str(model_dir),
        "/p", str(output_msix_path)
    ]
    
    print(f"Creating MSIX package with command: {' '.join(cmd)}")
    process = subprocess.run(
        cmd,
        capture_output=True,
        text=True,
        check=False
    )
    
    if process.returncode != 0:
        print(f"Failed to create MSIX package: {process.stderr}")
        print(f"makeappx output: {process.stdout}")
        return None
        
    print(f"Successfully created MSIX package at {output_msix_path}")
    return output_msix_path

if __name__ == "__main__":
    build_msix_package()