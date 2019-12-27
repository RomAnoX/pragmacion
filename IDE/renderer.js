// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
// import { log } from "console";
import CodeMirror from "./syntax";
import output from "./output";
import printer from "./printer";

const area = document.getElementById("ide");
const execute = document.getElementById("execute");
const __OUTPUT = printer(document.getElementById("output"));

const cm = CodeMirror(area, {
  lineNumbers: true,
  theme: "abcdef",
  mode: "pragma",
});

execute.addEventListener("click", () => {
  output(cm, __OUTPUT)
    .then(() => console.log("Done"))
    .catch(err => __OUTPUT.log(err.message));
});
