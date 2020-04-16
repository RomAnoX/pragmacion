// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import __READ from "electron-prompt";
import interact from "interactjs";
import CodeMirror from "./syntax";
import printer from "./printer";
import output from "../Compiler/Execute/ide";

const area = document.getElementById("ide");
const clean = document.getElementById("clean");
const execute = document.getElementById("execute");
const __OUTPUT = printer(document.getElementById("output"));

const cm = CodeMirror(area, {
  lineNumbers: true,
  theme: "pragma",
  mode: "pragma",
  extraKeys: {
    "Cmd-Enter": (codeMirror) => {
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

clean.addEventListener("click", () => {
  cm.setValue("");
  cm.clearHistory();
});

interact(".console-wrapper")
  .resizable({
    edges: {
      top: true,
      left: false,
      bottom: false,
      right: false,
    },
    modifiers: [
      interact.modifiers.restrictSize({
        max: { height: 400 },
        min: { height: 145 },
      }),
    ],
  })
  .on("resizemove", (event) => {
    let { y } = event.target.dataset;

    y = parseFloat(y) || 0;

    Object.assign(event.target.style, {
      height: `${event.rect.height}px`,
      transform: `translate(${event.deltaRect.left}px, ${event.deltaRect.top}px)`,
    });

    Object.assign(event.target.dataset, { y });
  });
