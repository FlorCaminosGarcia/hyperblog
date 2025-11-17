"""
Script to check if WindowsAppRuntime is installed and install it if not present.
"""

import subprocess
import sys
import os
import tempfile
import urllib.request
import platform

def get_architecture_and_installer_url():
    """
    Detect the computer's architecture and return the appropriate installer URL.
    Returns tuple of (architecture, installer_url, installer_filename).
    """
    # Get system architecture
    arch = platform.machine().lower()

    if arch in ['amd64', 'x86_64']:
        architecture = "x64"
        installer_url = "https://aka.ms/windowsappsdk/1.8/1.8.250916003/windowsappruntimeinstall-x64.exe"
        installer_filename = "windowsappruntimeinstall-x64.exe"
    elif arch in ['arm64', 'aarch64']:
        architecture = "ARM64"
        installer_url = "https://aka.ms/windowsappsdk/1.8/1.8.250916003/windowsappruntimeinstall-arm64.exe"
        installer_filename = "windowsappruntimeinstall-arm64.exe"
    else:
        # Default to x64 for unknown architectures
        architecture = "x64 (default)"
        installer_url = "https://aka.ms/windowsappsdk/1.8/1.8.250916003/windowsappruntimeinstall-x64.exe"
        installer_filename = "windowsappruntimeinstall-x64.exe"
    
    print(f"Detected architecture: {architecture}")
    return architecture, installer_url, installer_filename


def is_windows_app_runtime_installed():
    """
    Check if WindowsAppRuntime version 1.8 is installed.
    Returns True if the correct version is installed, False otherwise.
    """
    main_version = '8000'
    min_sub_version = 625

    try:
        result = subprocess.run([
            "powershell", "-Command",
            "Get-AppxPackage -Name '*WindowsAppRuntime*' | Select-Object Version"
        ], capture_output=True, text=True, check=True)

        if result.stdout.strip():
            print("Found WindowsAppRuntime versions via Get-AppxPackage:")
            print(result.stdout)

            # Parse the versions and check the conditions
            lines = result.stdout.strip().split('\n')
            for line in lines:
                version = line.strip()
                if version:
                    parts = version.split('.')
                    if len(parts) == 4:
                        first_part = parts[0]
                        second_part = int(parts[1])

                        if first_part == main_version and second_part >= min_sub_version:
                            print(f"[SUCCESS] Found valid WindowsAppRuntime version: {version}")
                            return True

            print(f"[ERROR] No valid WindowsAppRuntime version found.")
            return False
    except Exception as e:
        print(f"Error checking for WindowsAppRuntime: {e}")

    print(f"[ERROR] WindowsAppRuntime not found")
    return False


def download_file(url, destination):
    """
    Download a file from the given URL to the destination path.
    """
    print(f"Downloading from: {url}")
    print(f"Saving to: {destination}")
    
    try:
        urllib.request.urlretrieve(url, destination)
        print("Download completed successfully.")
        return True
    except Exception as e:
        print(f"Error downloading file: {e}")
        return False


def install_windows_app_runtime(installer_path):
    """
    Install WindowsAppRuntime using the downloaded installer.
    """
    print(f"Installing WindowsAppRuntime from: {installer_path}")
    
    try:
        # First try with no arguments (some installers work better this way)
        print("Attempting installation with default parameters...")
        result = subprocess.run([
            installer_path
        ], check=True, capture_output=True, text=True, timeout=300)
        
        print("WindowsAppRuntime installation completed successfully.")
        return True
        
    except subprocess.CalledProcessError as e:
        # If default fails, try with silent installation flags
        print(f"Default installation failed (return code {e.returncode}), trying with silent flags...")
        
        # Try different silent installation parameters
        silent_params = [
            [installer_path, "/S"],  # NSIS installer
            [installer_path, "/SILENT"],  # InnoSetup installer
            [installer_path, "/s"],  # Case sensitive
            [installer_path, "--silent"],  # GNU-style
            [installer_path, "/q"],  # MSI-style quiet
            [installer_path, "/qn"],  # MSI-style quiet no UI
        ]
        
        for params in silent_params:
            try:
                print(f"Trying installation with parameters: {' '.join(params[1:])}")
                result = subprocess.run(params, check=True, capture_output=True, text=True, timeout=300)
                print("WindowsAppRuntime installation completed successfully.")
                return True
            except subprocess.CalledProcessError as silent_error:
                print(f"Failed with return code {silent_error.returncode}")
                continue
            except subprocess.TimeoutExpired:
                print("Installation timed out")
                continue
        
        # If all silent methods fail, show the original error
        print(f"All installation methods failed. Original error:")
        print(f"Installation failed with return code {e.returncode}")
        if e.stderr:
            print(f"Error output: {e.stderr}")
        if e.stdout:
            print(f"Standard output: {e.stdout}")
        return False
        
    except subprocess.TimeoutExpired:
        print("Installation timed out after 5 minutes")
        return False
    except Exception as e:
        print(f"Error during installation: {e}")
        return False


def main():
    """
    Main function to check for WindowsAppRuntime and install if needed.
    """
    print("Checking for WindowsAppRuntime installation...")
    
    # Check if WindowsAppRuntime is already installed
    if is_windows_app_runtime_installed():
        print("[SUCCESS] WindowsAppRuntime is already installed.")
        return 0
    
    print("[INFO] WindowsAppRuntime not found. Proceeding with installation...")
    
    # Get architecture-specific installer URL
    architecture, installer_url, installer_filename = get_architecture_and_installer_url()
    
    # Create a temporary directory for the installer
    with tempfile.TemporaryDirectory() as temp_dir:
        installer_path = os.path.join(temp_dir, installer_filename)
        
        # Download the installer
        if not download_file(installer_url, installer_path):
            print("[ERROR] Failed to download WindowsAppRuntime installer.")
            return 1
        
        # Verify the file was downloaded
        if not os.path.exists(installer_path):
            print("[ERROR] Installer file not found after download.")
            return 1
        
        print(f"Downloaded installer size: {os.path.getsize(installer_path)} bytes")
        
        # Install WindowsAppRuntime
        if not install_windows_app_runtime(installer_path):
            print("[ERROR] Failed to install WindowsAppRuntime.")
            return 1
    
    # Verify installation was successful
    print("\nVerifying installation...")
    if is_windows_app_runtime_installed():
        print("[SUCCESS] WindowsAppRuntime has been successfully installed!")
        return 0
    else:
        print("[ERROR] Installation verification failed. WindowsAppRuntime may not have installed correctly.")
        return 1


if __name__ == "__main__":
    try:
        exit_code = main()
        sys.exit(exit_code)
    except KeyboardInterrupt:
        print("\n[ERROR] Operation cancelled by user.")
        sys.exit(1)
    except Exception as e:
        print(f"[ERROR] Unexpected error: {e}")
        sys.exit(1)
