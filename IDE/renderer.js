// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
// import { log } from "console";
import CodeMirror from "./syntax";
import output from "./output";
import StreamError from "../Compiler/Stream/StreamError";

const area = document.getElementById("ide");
const execute = document.getElementById("execute");

const cm = CodeMirror(area, {
  lineNumbers: true,
  theme: "abcdef",
  mode: "pragma",
});

window.editor = cm;

execute.addEventListener("click", () => {
  const __OUTPUT = document.getElementById("output");
  __OUTPUT.innerHTML = ""; // clean the results page
  console.log("Parsing: ", cm.getValue());

  output(cm, __OUTPUT)
    .then(() => {
      console.log("Done");
    })
    .catch(err => {
      if (err instanceof StreamError) {
        const { line, col } = err;
        const lines = [
          `ERROR: ${err.message}`,
          `Linea: ${line}, Columna: ${col}`,
        ];
        lines
          .map(text => {
            const line = document.createElement("p");
            line.appendChild(document.createTextNode(text));
            return line;
          })
          .forEach(line => __OUTPUT.appendChild(line));
      } else {
        const line = document.createElement("p");
        line.appendChild(document.createTextNode(err.message));
        __OUTPUT.appendChild(line);
      }
    });
});
