import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand("gradio-templates.createPythonFile", async () => {
    const workspaceFolders = vscode.workspace.workspaceFolders;
    
    if (!workspaceFolders) {
      vscode.window.showErrorMessage("Open a workspace folder first.");
      return;
    }

    const workspacePath = workspaceFolders[0].uri.fsPath;

    // List of available templates
    const templates: { [key: string]: string } = {
      "Gradio Quickstart": `import gradio as gr

# Please use pip install gradio
# Then run this file: python gradio_quickstart.py

def greet(name, intensity):
    return "Hello, " + name + "!" * int(intensity)

demo = gr.Interface(
    fn=greet,
    inputs=["text", "slider"],
    outputs=["text"],
)

demo.launch()
`,

      "Image Classifier": `import gradio as gr

# Please use pip install gradio
# Then run this file: python image_classifier.py
def classify_image(img):
    return "Image classification result"

demo = gr.Interface(
    fn=classify_image,
    inputs="image",
    outputs="label"
)

demo.launch()
`,

      "Chatbot": `import gradio as gr
# run pip install gradio
# Then run this file: python chatbot.py

gr.ChatInterface(
    fn=random_response, 
    type="messages"
).launch()
`,

      "Voice Transcription (Python)": `from gradio_client import Client, handle_file
# run pip install gradio
# Then run this file: python voice_transcription_(python).py

client = Client("abidlabs/whisper")

client.predict(
    audio=handle_file("audio_sample.wav")
)`
    };

    // Ask user to pick a template
    const templateName = await vscode.window.showQuickPick(Object.keys(templates), {
      placeHolder: "Select a Gradio template to create",
    });

    // If user cancels selection, exit the function
    if (!templateName) {
      return;
    }

    const selectedTemplate = templates[templateName];

    // If for some reason template is missing, show an error
    if (!selectedTemplate) {
      vscode.window.showErrorMessage("Selected template not found.");
      return;
    }

    // Create a valid filename
    const fileName = `${templateName.replace(/\s+/g, "_").toLowerCase()}.py`;
    const filePath = path.join(workspacePath, fileName);

    // Write template to file
    fs.writeFile(filePath, selectedTemplate, (err) => {
      if (err) {
        vscode.window.showErrorMessage("Failed to create Python file.");
      } else {
        vscode.window.showInformationMessage(`${templateName} template created!`);
        vscode.workspace.openTextDocument(filePath).then((doc) => {
          vscode.window.showTextDocument(doc);
        });
      }
    });
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
