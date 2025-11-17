import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const provider = new DeepSeekChatViewProvider(context);
  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      'deepseekChatView',
      provider,
      {
        webviewOptions: { retainContextWhenHidden: true } // Preserve webview state
      }
    )
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('deepseek.openChat', () => {
      // Open the chat view
                              vscode.commands.executeCommand('simpleBrowser.show', 'https://web.chatboxai.app/');
      vscode.commands.executeCommand('workbench.view.extension.deepseekWeb');
    })
  );

  const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
  statusBarItem.text = "$(comment-discussion) DeepSeek";
  statusBarItem.tooltip = "Open DeepSeek Chat";
  statusBarItem.command = "deepseek.openChat";
  statusBarItem.show();
  context.subscriptions.push(statusBarItem);

  // Show a notification about the CSP issue
  showCSPNotification(context);
}

class DeepSeekChatViewProvider implements vscode.WebviewViewProvider {
  private webviewView?: vscode.WebviewView;
  private context: vscode.ExtensionContext;

  constructor(context: vscode.ExtensionContext) {
    this.context = context;
  }

  resolveWebviewView(webviewView: vscode.WebviewView) {
    this.webviewView = webviewView;
    webviewView.webview.options = {
      enableScripts: true,
      enableForms: true,
    };

    // Load the saved session URL or the default URL
    const config = vscode.workspace.getConfiguration('deepseekWeb');
    const defaultUrl = config.get<string>('chatUrl', 'https://chat.deepseek.com/');
    const sessionUrl = this.context.globalState.get<string>('deepseekSessionUrl', defaultUrl);

    this.updateWebview(sessionUrl);

    // Listen for messages from the webview
    webviewView.webview.onDidReceiveMessage((message) => {
      switch (message.command) {
        case 'navigate':
          // Save the new URL to global state
          this.context.globalState.update('deepseekSessionUrl', message.url);
          break;
      }
    });
  }

  public updateWebview(url: string) {
    if (this.webviewView) {
      this.webviewView.webview.html = `
        <html>
          <head>
             <meta http-equiv="Content-Security-Policy" content="default-src 'self' https://chat.deepseek.com/; script-src 'self' https://chat.deepseek.com/ 'unsafe-inline' 'unsafe-eval'; connect-src 'self' https://chat.deepseek.com/; style-src 'self' https://chat.deepseek.com/ 'unsafe-inline';">
            <style>
              .notification {
                background-color: #ffeb3b;
                color: #000;
                padding: 10px;
                border-radius: 4px;
                margin-bottom: 10px;
                font-family: Arial, sans-serif;
                font-size: 14px;
              }
              .notification strong {
                font-weight: bold;
              }
            </style>
          </head>
          <body style="margin: 0; padding: 0; height: 100vh; overflow: hidden;">
            <div class="notification" id="notificationBox">
              <span style="float: right; cursor: pointer;" id="closeNotification">&times;</span>
              <strong>Important Notice:</strong> Due to DeepSeek's Content Security Policy (CSP), this extension may not work after restarting the editor. If the chat is already open, we recommend keeping the editor running to avoid disruptions. We are actively working on a solution. Thank you for your patience!
              <br><br>
              <strong>Known Issues:</strong> DeepSeek access via sidebar webview is not working at the moment.
              <br><br>
              You can access DeepSeek models locally via Ollama, with tons of features at <a href="https://web.chatboxai.app/">https://web.chatboxai.app/</a>.
              <br><br>Click the DeepSeek status bar button located in the bottom right corner.
              <br><br>
              To access Ollama via this URL, set the following environment variables:<br>
              <code>OLLAMA_HOST=0.0.0.0</code><br>
              <code>OLLAMA_ORIGINS=*</code>
              
              <br><br>
              Access the URL directly in the VS code editor using <a href="https://marketplace.visualstudio.com/items?itemName=Kingleo.openurl">Open I</a>.
              <br>
              You can split editor and open the URL in the second editor pane which is almost like accessing it in the sidebar.<br>
              Alternatively, you can access any other URL by changing the URL value from settings for this extension.
              <br><br>
              You may want to check these extensions as well:
              <a href="https://marketplace.visualstudio.com/items?itemName=Kingleo.qwen">qwenlm.ai</a>
              <br>
              <a href="https://marketplace.visualstudio.com/items?itemName=Kingleo.kimi-vscode">kimi.ai</a>
              <br>
              <a href="https://marketplace.visualstudio.com/items?itemName=Kingleo.sonus-web">sonus.ai</a>
              <br>
              <a href="https://marketplace.visualstudio.com/items?itemName=Kingleo.llmtext">LLMText</a>
            </div>
            <script>
               document.getElementById('closeNotification').addEventListener('click', function() {
                 document.getElementById('notificationBox').style.display = 'none';
               });
            </script>
            <iframe
              sandbox="allow-scripts allow-forms"
              id="deepseekIframe"
              src="${url}"
              style="width: 100%; height: calc(100% - 100px); border: none;"
            ></iframe>
            <script>
              const vscode = acquireVsCodeApi();
              const iframe = document.getElementById('deepseekIframe');

              // Notify the extension when the iframe navigates
              iframe.onload = () => {
                const currentUrl = iframe.src;
                vscode.postMessage({
                  command: 'navigate',
                  url: currentUrl
                });
              };

              // Notify the extension if the iframe fails to load
              iframe.onerror = () => {
                vscode.postMessage({
                  command: 'error',
                  message: 'Failed to load the DeepSeek chat.'
                });
              };
            </script>
          </body>
        </html>
      `;
    }
  }
}

// Function to show a notification about the CSP issue
function showCSPNotification(context: vscode.ExtensionContext) {
  const notificationKey = 'deepseek.cspNotificationShown';
  const hasShownNotification = context.globalState.get<boolean>(notificationKey, false);

  if (!hasShownNotification) {
    vscode.window.showWarningMessage(
      'Important Notice: Due to DeepSeek\'s Content Security Policy (CSP), this extension may not work after restarting the editor. If the chat is already open, we recommend keeping the editor running to avoid disruptions. We are actively working on a solution. Thank you for your patience!',
      { modal: false }
    );

    // Mark the notification as shown
    context.globalState.update(notificationKey, true);
  }
}

export function deactivate() {}