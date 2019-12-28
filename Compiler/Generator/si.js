import instruction from "./instruction";

export default node => {
  const expression = node.value;
  const ifBody = node.then;
  const elseBody = node.else;
  const lines = [];
  const code = ["if ("];
  expression.value.forEach(arg => {
    let value = arg.value;
    if (arg.type === "str") {
      value = `"${value}"`;
    }
    if (arg.type === "bool") {
      value = value ? '"verdadero"' : '"falso"';
    }
    code.push(`${value}`);
  });
  code.push(") {");
  lines.push(code.join(""));
  ifBody.filter(Boolean).forEach(line => instruction(lines, line));
  lines.push("}");
  if (elseBody.length) {
    lines.push("else {");
    elseBody.filter(Boolean).forEach(line => instruction(lines, line));
    lines.push("}");
  }
  return lines.join("\n");
};
