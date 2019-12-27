export default dom => ({
  log(...args) {
    args.forEach(arg => {
      arg.split("\n").forEach(item => {
        const line = document.createElement("pre");
        line.appendChild(document.createTextNode(`${item}`));
        dom.appendChild(line);
      });
    });
  },
  clear() {
    dom.innerHTML = "";
  },
});
