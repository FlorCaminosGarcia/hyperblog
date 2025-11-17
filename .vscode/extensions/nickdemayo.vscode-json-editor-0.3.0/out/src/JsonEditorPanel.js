'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const vscode = require("vscode");
const enums_1 = require("./globals/enums");
class JsonEditorPanel {
    constructor(extensionPath, column, theme) {
        this._disposables = [];
        this._extensionPath = extensionPath;
        this._currentEditor = vscode.window.activeTextEditor;
        this._panel = vscode.window.createWebviewPanel(JsonEditorPanel.viewType, "Json editor", column, {
            enableScripts: true,
            localResourceRoots: [
                vscode.Uri.file(path.join(this._extensionPath, 'jsoneditor'))
            ]
        });
        this._panel.webview.html = this.getHtmlForWebview(this._extensionPath, theme);
        this._panel.onDidDispose(() => this.dispose(), null, this._disposables);
        this._panel.webview.onDidReceiveMessage(message => {
            if (this._currentEditor) {
                this._currentEditor.edit(editBuilder => {
                    const range = new vscode.Range(this._currentEditor.document.positionAt(0), this._currentEditor.document.positionAt(this._currentEditor.document.getText().length));
                    editBuilder.replace(range, message.json);
                });
            }
        });
        vscode.window.onDidChangeActiveTextEditor(() => this.onActiveEditorChanged());
        vscode.workspace.onDidSaveTextDocument(() => this.onDocumentChanged());
        this.onActiveEditorChanged();
    }
    // tslint:disable-next-line:function-name
    static CreateOrShow(extensionPath) {
        const column = vscode.ViewColumn.Three;
        const config = vscode.workspace.getConfiguration(this.extensionPrefix);
        const theme = config.get(enums_1.configurationSettings.theme);
        if (JsonEditorPanel.currentPanel) {
            JsonEditorPanel.currentPanel._panel.reveal(column);
        }
        else {
            JsonEditorPanel.currentPanel = new JsonEditorPanel(extensionPath, column, theme);
        }
    }
    dispose() {
        JsonEditorPanel.currentPanel = undefined;
        this._panel.dispose();
        while (this._disposables.length) {
            const x = this._disposables.pop();
            if (x) {
                x.dispose();
            }
        }
    }
    getJson() {
        let json = "";
        if (this._currentEditor) {
            json = this._currentEditor.document.getText();
        }
        return json;
    }
    onActiveEditorChanged() {
        if (vscode.window.activeTextEditor) {
            this._currentEditor = vscode.window.activeTextEditor;
            const json = this.getJson();
            this._panel.webview.postMessage({ json: json });
        }
    }
    onDocumentChanged() {
        const json = this.getJson();
        this._panel.webview.postMessage({ json: json });
    }
    getHtmlForWebview(extensionPath, theme) {
        const mainScriptPathOnDisk = vscode.Uri.file(path.join(extensionPath, 'jsoneditor', 'main.js'));
        const mainScriptUri = mainScriptPathOnDisk.with({ scheme: 'vscode-resource' });
        const scriptPathOnDisk = vscode.Uri.file(path.join(extensionPath, 'jsoneditor', 'jsoneditor.min.js'));
        const scriptUri = scriptPathOnDisk.with({ scheme: 'vscode-resource' });
        const cssPathOnDisk = vscode.Uri.file(path.join(extensionPath, 'jsoneditor', 'jsoneditor.min.css'));
        const cssUri = cssPathOnDisk.with({ scheme: 'vscode-resource' });
        const cssDarkPathOnDisk = vscode.Uri.file(path.join(extensionPath, 'jsoneditor', 'jsoneditor.dark.min.css'));
        const cssDarkUri = cssDarkPathOnDisk.with({ scheme: 'vscode-resource' });
        const darkTheme = theme === 'dark' ? `<link href="${cssDarkUri}" rel="stylesheet" type="text/css">` : '';
        return `
        <!DOCTYPE HTML>
        <html>
        <head>
            <!-- when using the mode "code", it's important to specify charset utf-8 -->
            <meta http-equiv="Content-Type" content="text/html;charset=utf-8">

            <link href="${cssUri}" rel="stylesheet" type="text/css">
            ${darkTheme}
            <script src="${scriptUri}"></script>
        </head>
        <body>
            <div id="jsoneditor"></div>

            <script src="${mainScriptUri}"></script>
        </body>
        </html>
        `;
    }
}
JsonEditorPanel.viewType = 'jsonEditor';
JsonEditorPanel.extensionPrefix = 'vscode-json-editor';
exports.JsonEditorPanel = JsonEditorPanel;
//# sourceMappingURL=JsonEditorPanel.js.map