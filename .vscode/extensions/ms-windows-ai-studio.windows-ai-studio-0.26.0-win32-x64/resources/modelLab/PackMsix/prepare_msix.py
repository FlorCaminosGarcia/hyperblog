# MSIX packaging helpers

import os
from pathlib import Path

def create_appx_manifest(
    model_dir: Path, 
    package_name="YourPackageName", 
    publisher_name="YourPublisherName"
):
    """
    Create an AppxManifest.xml file for MSIX packaging.
    
    Args:
        model_dir: Directory to model directory
        package_name: Name of the package (typically repo name)
        publisher_name: Publisher name (typically repo owner)
        
    Returns:
        Path to the created manifest file
    """

    print("Creating AppxManifest.xml")
    # Clean package and publisher names - remove spaces and special characters
    clean_package_name = ''.join(c for c in package_name if c.isalnum())
    clean_publisher_name = ''.join(c for c in publisher_name if c.isalnum())
    
    manifest_content = f"""<?xml version="1.0" encoding="utf-8"?>
<Package
  xmlns="http://schemas.microsoft.com/appx/manifest/foundation/windows10"
  xmlns:uap="http://schemas.microsoft.com/appx/manifest/uap/windows10"
  IgnorableNamespaces="uap">

  <Identity
    Name="{clean_package_name}ModelPackage"
    Publisher="CN={clean_publisher_name}"
    Version="1.0.0.0" />

  <Properties>
    <DisplayName>{clean_package_name} Model Package</DisplayName>
    <PublisherDisplayName>{clean_publisher_name}</PublisherDisplayName>
    <Logo>Images\\StoreLogo.png</Logo>
    <Framework>true</Framework>
  </Properties>

  <Dependencies>
    <TargetDeviceFamily Name="Windows.Desktop" MinVersion="10.0.17763.0" MaxVersionTested="10.0.22621.0" />
  </Dependencies>

  <Resources>
    <Resource Language="en-us" />
  </Resources>
</Package>"""

    model_dir.mkdir(parents=True, exist_ok=True)
    
    manifest_path = model_dir / "AppxManifest.xml"
    with open(manifest_path, "w", encoding="utf-8") as f:
        f.write(manifest_content)
        
    return manifest_path

def create_placeholder_images(model_dir: Path):
    """
    Create placeholder image files required for MSIX packaging.
    
    Args:
        model_dir: Directory to model directory
    """

    print("Creating placeholder images")
    images_dir = model_dir / "Images"
    images_dir.mkdir(exist_ok=True, parents=True)
    
    try:
        # Create simple placeholder PNG files of required sizes
        from PIL import Image
        
        # Create a simple colored image for each required size
        sizes = {
            "AppList.png": (44, 44),
            "MedTile.png": (150, 150),
            "StoreLogo.png": (50, 50)
        }
        
        for filename, size in sizes.items():
            img = Image.new('RGBA', size, color=(0, 120, 212, 255))
            img.save(images_dir / filename)
            print(f"Created image: {images_dir / filename}")
    except ImportError:
        print("PIL not installed. Creating empty placeholder files.")
        # Create empty files as placeholders
        for filename in ["AppList.png", "MedTile.png", "StoreLogo.png"]:
            with open(images_dir / filename, "wb") as f:
                f.write(b"")
            print(f"Created empty placeholder: {images_dir / filename}")

def prepare_msix_package():
    # Ensure we're on Windows
    if os.name != 'nt':
        print("MSIX packaging is only supported on Windows.")
        return None
    
    script_dir = Path(os.path.abspath(os.path.dirname(__file__)))
    model_dir = script_dir.parent / "model"

    # Create AppxManifest.xml    
    manifest_path = create_appx_manifest(model_dir)
    print(f"Created manifest at {manifest_path}")
    
    # Create placeholder images    
    create_placeholder_images(model_dir)


if __name__ == "__main__":
    prepare_msix_package()