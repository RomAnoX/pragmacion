import instruction from "./instruction";

export default (lines, node) => {
  if (!node.type === "prog") {
    throw new Error("Error de generador, programa no inicializado");
  }
  node.body.forEach(line => instruction(lines, line));
};
