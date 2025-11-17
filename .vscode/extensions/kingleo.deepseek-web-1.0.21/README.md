# DeepSeek.Chat - VS Code Extension

Embed **[DeepSeek Chat](https://chat.deepseek.com/)** (or any other website) directly into your VS Code **right sidebar**. Access any web application in a side panel without leaving your editor.


## Important Notice:
Due to DeepSeek's Content Security Policy (CSP), this extension may not work after restarting the editor. If the chat is already open, we recommend keeping the editor running to avoid disruptions. We are actively working on a solution. Thank you for your patience!

# Known Issues:
Acess to chat.deepseek is not working at the moment due to CSP.
You might want to try:

[Open I](https://marketplace.visualstudio.com/items?itemName=Kingleo.openurl)

[LLMText](https://marketplace.visualstudio.com/items?itemName=Kingleo.llmtext)

[kimi.ai](https://marketplace.visualstudio.com/items?itemName=Kingleo.kimi-vscode)

[qwenlm.ai](https://marketplace.visualstudio.com/items?itemName=Kingleo.qwen)

[sonus.ai](https://marketplace.visualstudio.com/items?itemName=Kingleo.sonus-web)

---

## Features

*   **Embed Web Apps**: Open DeepSeek Chat or any custom website in a Webview panel within VS Code.
*   **Right Sidebar Integration**: The webview opens in the **right sidebar** by default for easy access while coding.
*   **Customizable URL**: Configure the URL of the website you want to embed (e.g., for self-hosted instances or other tools).
*   **Persistent Session**: Saves your session URL so you don't have to reconfigure it every time.
*   **Easy Access**: Open the webview with a single click from the status bar or command palette.

---

## Usage

### Open DeepSeek.Chat

1.  Click the **DeepSeek icon** in the Activity Bar.
2.  Alternatively, use the **Command Palette** (`Ctrl+Shift+P`) and search for `Open DeepSeek Chat`.


### Customize the URL

1.  Open **Settings** (`Ctrl+,`).
2.  Search for `DeepSeek Web`.
3.  Update the `Chat URL` field with any URL (e.g., `https://chat.deepseek.com/` or a custom URL).

---

## Screenshots

### 1. Accessing DeepSeek.Chat from the Activity Bar
![Activity Bar](https://raw.githubusercontent.com/KingLeoJr/vscode-deepseek-web/refs/heads/main/images/screenshot-activitybar.png)

### 2. DeepSeek.Chat in the Right Sidebar
![Right Sidebar](https://raw.githubusercontent.com/KingLeoJr/vscode-deepseek-web/refs/heads/main/images/screenshot-rightsidebar.png)

### 3. Opening DeepSeek.Chat from the Command Palette
![Command Palette](https://raw.githubusercontent.com/KingLeoJr/vscode-deepseek-web/refs/heads/main/images/screenshot1.png)

---

## Commands

| Command               | Description                |
| --------------------- | -------------------------- |
| `deepseek.openChat` | Open the DeepSeek Webview. |

---

## Configuration

| Setting                 | Default Value                  | Description                                                                      |
| ----------------------- | ------------------------------ | -------------------------------------------------------------------------------- |
| `deepseekWeb.chatUrl` | `https://chat.deepseek.com/` | The URL of the website to embed. This can be any URL, such as<br />chat.sonus.ai |

---

## License

This project is licensed under the  **MIT License** . See the [LICENSE](https://chat.deepseek.com/a/chat/s/LICENSE) file for details.

---

## Acknowledgements

*   **[DeepSeek](https://www.deepseek.com/)** for providing the AI-powered chat interface.
*   **[VS Code](https://code.visualstudio.com/)** for the extensible editor platform.

---

Enjoy seamless integration with DeepSeek Chat in your **right sidebar**! 🚀