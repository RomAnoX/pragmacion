// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import __READ from "electron-prompt";
import CodeMirror from "./syntax";
import printer from "./printer";
import output from "../Compiler/Execute/ide";

const area = document.getElementById("ide");
const execute = document.getElementById("execute");
const __OUTPUT = printer(document.getElementById("output"));

const cm = CodeMirror(area, {
  lineNumbers: true,
  theme: "abcdef",
  mode: "pragma",
  extraKeys: {
    "Cmd-Enter": codeMirror => {
      output(codeMirror.getValue(), __OUTPUT, __READ);
    },
  },
});

cm.on("keyHandled", (...args) => {
  console.log(args);
});

execute.addEventListener("click", () => {
  output(cm.getValue(), __OUTPUT, __READ);
});
