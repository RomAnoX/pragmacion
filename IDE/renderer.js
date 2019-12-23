// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
// import { log } from "console";
import CodeMirror from "./syntax";
import output from "./output";
import StreamError from "../Compiler/Stream/StreamError";

const area = document.getElementById("ide");
const execute = document.getElementById("execute");

const cm = CodeMirror.fromTextArea(area, {
  lineNumbers: true,
  theme: "base16-dark",
  mode: "pragmacion",
});

execute.addEventListener("click", () => {
  const __OUTPUT = document.getElementById("output");
  __OUTPUT.innerHTML = ""; // clean the results page

  output(cm, __OUTPUT)
    .then(() => {
      cm.focus();
      console.log("Done");
    })
    .catch(err => {
      if (err instanceof StreamError) {
        const lines = [`ERROR: ${err.message}`];
        lines
          .map(text => {
            const line = document.createElement("p");
            line.appendChild(document.createTextNode(text));
            return line;
          })
          .forEach(line => __OUTPUT.appendChild(line));
        const { line, col: ch } = error;
        cm.getDoc().setSelection({ line, ch });
        cm.getDoc().focus();
      } else {
        throw err;
      }
    });
});
