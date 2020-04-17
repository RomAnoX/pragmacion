// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import { remote } from "electron";
import __READ from "electron-prompt";
import interact from "interactjs";
import CodeMirror from "./syntax";
import printer from "./printer";
import output from "../Compiler/Execute/ide";

const area = document.getElementById("ide");
const minBtn = document.getElementById("min-btn");
const maxBtn = document.getElementById("max-btn");
const closeBtn = document.getElementById("close-btn");
const cleanBtn = document.getElementById("clean");
const executeBtn = document.getElementById("execute");
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

minBtn.addEventListener("click", () => {
  const window = remote.getCurrentWindow();
  window.minimize();
});

maxBtn.addEventListener("click", () => {
  const window = remote.getCurrentWindow();
  if (!window.isMaximized()) {
    window.maximize();
  } else {
    window.unmaximize();
  }
});

closeBtn.addEventListener("click", () => {
  const window = remote.getCurrentWindow();
  window.close();
});

cleanBtn.addEventListener("click", () => {
  cm.setValue("");
  cm.clearHistory();
});

executeBtn.addEventListener("click", () => {
  output(cm.getValue(), __OUTPUT, __READ);
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
