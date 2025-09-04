// The module 'vscode' contains the VS Code extensibility API
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function activate(context) {
    console.log('Unnarize Language Support is now active!');
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
    activate,
    deactivate
};
