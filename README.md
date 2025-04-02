# GradioHelper README

GradioHelper is a VS Code extension designed to help developers quickly generate Python template files for Gradio applications. This extension provides multiple pre-built templates that users can choose from to get started with Gradio effortlessly.

## Features

- **Quick Template Selection**: Choose from multiple Gradio template options.
- **Automatic File Creation**: Generates a Python file in the current workspace with the selected template.
- **Preconfigured Gradio Examples**: Includes templates for Quickstart, Image Classification, Chatbot, and Voice Transcription.
- **One-Click Open**: Opens the generated template file automatically after creation.

### Usage
1. Open a workspace folder in VS Code.
2. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS) to open the Command Palette.
3. Type and select `GradioHelper: Create Python File`.
4. Choose a template from the list.
5. The corresponding Python file will be created and opened automatically.

## Available Templates

1. **Gradio Quickstart**: A basic example showcasing Gradio's `Interface` with text and slider inputs.
2. **Image Classifier**: A template for building an image classification Gradio app.
3. **Chatbot**: A chat-based Gradio template for interactive conversations.
4. **Voice Transcription (Python)**: A simple example using `gradio_client` for voice transcription.

## Requirements

- **Python** installed on your system.
- **Gradio** installed via `pip install gradio` (required for running the generated templates).

## Extension Settings

This extension does not require additional settings or configurations.

## Known Issues

- Ensure you have an active workspace folder before running the command.
- If Python or Gradio is not installed, the generated files may not run properly.

## Release Notes

### 1.0.0
- Initial release with multiple Gradio templates.
- Allows users to create Python files based on selected templates.

## Following Extension Guidelines

Ensure that you've read through the VS Code extension guidelines and follow the best practices for development.

- [VS Code Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## For More Information

- [Gradio Documentation](https://www.gradio.app/)
- [Visual Studio Code API](https://code.visualstudio.com/api)

**Enjoy coding with GradioHelper! 🚀**

