const print = node => {
  const code = ["console.log(''"];
  node.args.forEach(arg => {
    const value = arg.type === "str" ? `"${arg.value}"` : arg.value;
    code.push(` + ${value}`);
  });
  code.push(");");
  return code.join("");
};

const instruction = (lines, node) => {
  switch (node.type) {
    case "print":
      lines.push(print(node));
      break;
    default:
      throw new Error("La instruccion no se puede generar");
  }
};

const program = (lines, node) => {
  if (!node.type === "prog") {
    throw new Error("Error de generador, programa no inicializado");
  }
  node.body.forEach(line => instruction(lines, line));
};

export default node => {
  const lines = [];
  program(lines, node);
  return lines.join("\n");
};
