// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import { log } from "console";
import CodeMirror from "codemirror";

log("Hello from the renderer process!");
const area = document.getElementById("ide");
CodeMirror.fromTextArea(area, { lineNumbers: true });
