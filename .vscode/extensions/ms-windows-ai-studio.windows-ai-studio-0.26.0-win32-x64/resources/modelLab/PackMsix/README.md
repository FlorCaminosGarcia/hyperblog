# Build Model MSIX Package
## Prerequisites: python & pip install Pillow

## 1. Run [prepare_msix.py](./prepare_msix.py)

This script automatically:
- Generates [AppxManifest.xml](../model/AppxManifest.xml)
- Creates the [Images folder](../model/Images) folder with placeholder icons

No manual action needed for these steps.

## 2. (Optional) Edit manifest and images

- [AppxManifest.xml](../model/AppxManifest.xml)
- [Images folder](../model/Images)

You can change:
- Identity name, publisher, version
- Display name
- Replace icons (`AppList.png`, `MedTile.png`, `StoreLogo.png`)

## 3. Run [build_msix.py](./build_msix.py)

Automatically packages the directory into an MSIX file (default output: [./build.msix](./build.msix)).

## 4. Sign the generated MSIX with an existing code signing certificate (.pfx)

> If you don't have an existing code signing .pfx certificate, go to [Step 5](#5-sign-the-generated-msix-with-a-self-signed-certificate-pfx) to create and use a Self-signed certificate.

```powershell
$cert = [YourCertPath]\your_cert.pfx
$msix = [YourMsixPath]\build.msix
$pwd = [YourPassword]
signtool sign /f $cert /p your_password /fd SHA256 /a /v $msix
```

(Optional with timestamp service):
```powershell
signtool sign /tr http://timestamp.digicert.com /td SHA256 /fd SHA256 /f $cert /p your_password /v $msix
```

## 5. Sign the generated MSIX with a self-signed certificate (.pfx)

1.  
```powershell (admin)
New-SelfSignedCertificate -Type CodeSigningCert -Subject "CN=YourPublisherName" -CertStoreLocation "Cert:\CurrentUser\My"
```
>Make sure the Subject is the same as your Publisher in the Identity element.

2.  
```
Open Certificate Manager (certmgr.msc).
Locate the certificate you just created, right-click it, and select Export.
Choose Yes, export the private key.
Select PFX format, and set a password.
Save the file as your_cert.pfx.
```

3.
```powershell (admin)
$cert = [YourCertPath]\your_cert.pfx
$msix = [YourMsixPath]\build.msix
$pwd = [YourPassword]
```

4.  
```powershell (admin)
$pwdSecureStr = ConvertTo-SecureString -String $pwd -Force -AsPlainText
Import-PfxCertificate -FilePath $cert `
-CertStoreLocation Cert:\LocalMachine\TrustedPeople `
-Password $pwdSecureStr
```

5.  
```powershell (admin)
./signtool.exe sign /f $cert /p $pwd /fd SHA256 /tr http://timestamp.digicert.com /td SHA256 $msix
./signtool.exe verify /pa /v $msix
```

6.  
> (Optional) Remove the certificate after installation

- Open Certificate Manager (certmgr.msc).
- Navigate to **Trusted People** → **Certificates**
- Locate the certificate you just imported
- Right-click the certificate and select **Delete**
- Confirm the deletion when prompted

## Notes
- Requires Windows + Windows SDK (`makeappx.exe`, `signtool.exe`).
- If `Pillow` isn’t installed, placeholder image files are created as empty PNGs.
- Adjust paths inside scripts if you move the model directory.