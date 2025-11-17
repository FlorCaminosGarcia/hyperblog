'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const JsonEditorPanel_1 = require("./JsonEditorPanel");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
// tslint:disable-next-line:export-name
function activate(context) {
    const startCommand = vscode.commands.registerCommand('vscode-json-editor.start', () => {
        JsonEditorPanel_1.JsonEditorPanel.CreateOrShow(context.extensionPath);
    });
    context.subscriptions.push(startCommand);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map