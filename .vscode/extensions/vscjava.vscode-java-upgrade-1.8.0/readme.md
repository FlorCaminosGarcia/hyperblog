# GitHub Copilot app modernization - upgrade for Java

**GitHub Copilot app modernization - upgrade for Java** helps you upgrade your Java applications. It's an extension for Visual Studio Code which can help:

- Analyze your project, assess your dependencies and propose an upgrade plan
- Execute the plan to transform your project
- Automatically fix issues during the progress
- Report all details including commits, logs and output
- Show a summary including file changes, updated dependencies and commits in the working branch when update is finished
- Generate unit test cases separately from the upgrade process.

## How to use

- [Overview/Quickstart](https://aka.ms/java-upgrade-docs)
- [FAQ](https://aka.ms/ghcp-appmod/java-upgrade-faq)

## Key Capabilities

### 🔍 Intelligent Analysis and Upgrade Planning

Modernization starts with understanding your code. The extension automatically analyzes your Java code and generates a customizable upgrade plan that you can review and edit within VS Code.

![Plan](https://raw.githubusercontent.com/microsoft/vscode-app-mod-pack/refs/heads/main/docs/vscode-java-upgrade/plan.png)

### 🔧 Automatic Code Transformation and Error Fixing

Modernization isn’t complete until your application builds successfully. GitHub Copilot app modernization - upgrade for Java executes tools like open-source tools like [OpenRewrite](https://docs.openrewrite.org/) to apply code transformations, automatically resolve build issues, and run test validations — ensuring a smooth, error-free upgrade process.

![Build and Fix](https://raw.githubusercontent.com/microsoft/vscode-app-mod-pack/refs/heads/main/docs/vscode-java-upgrade/buildfix.png)

### 🛡️ Post-Upgrade CVE Validation

After the upgrade process is completed, the tool scans for CVE (Common Vulnerabilities and Exposures) issues and code inconsistencies. When such issues are detected, it automatically applies fixes within VS Code Agent Mode, allowing the user to review the changes. This enhances the application's security posture and ensures compliance with organizational guidelines.

![CVE Check](https://raw.githubusercontent.com/microsoft/vscode-app-mod-pack/refs/heads/main/docs/vscode-java-upgrade/cve.png)

### 🔄 Summarizing the Upgrade Process

The summary at the end of upgrade provides you with an overview of key details, including file changes, updated dependencies, test validation results and remaining minor issues.

![Summary](https://raw.githubusercontent.com/microsoft/vscode-app-mod-pack/refs/heads/main/docs/vscode-java-upgrade/summary.png)

### 🧪 Unit Test Generation

In addition to Java upgrade, GitHub Copilot app modernization - upgrade for Java can also help generate unit test cases separately to boost the unit test coverage.

## Feedback

We value your feedback — share [your thoughts here](https://aka.ms/AM4JFeedback) to help us continue improving the product.

## License

This extension is licensed under [GitHub Copilot Product Specifc Terms](https://github.com/customer-terms/github-copilot-product-specific-terms).

## Telemetry

VS Code collects usage data and sends it to Microsoft to help improve our products and services. Read our [privacy statement](https://go.microsoft.com/fwlink/?LinkId=521839) to learn more. If you don’t wish to send usage data to Microsoft, you can set the `telemetry.enableTelemetry` setting to `false`. Learn more in our [FAQ](https://code.visualstudio.com/docs/supporting/faq#_how-to-disable-telemetry-reporting).

## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft
trademarks or logos is subject to and must follow
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general).
Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.

## Disclaimer

Unless otherwise permitted under applicable license(s), users may not decompile, modify, repackage, or redistribute any assets, prompts, or internal tools provided as part of this product without prior written consent from Microsoft.
