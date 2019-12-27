// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
// import { log } from "console";
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
});

execute.addEventListener("click", () => {
  output(cm.getValue(), __OUTPUT, __READ);
});
