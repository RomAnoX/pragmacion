import instruction from "./instruction";
import expression from "./expression";

export default (node) => {
  const ifBody = node.then;
  const elseBody = node.else;
  const lines = [];
  const code = ["if ("];
  expression(node.value.value, code);
  code.push(") {");
  lines.push(code.join(""));
  ifBody.filter(Boolean).forEach((line) => instruction(lines, line));
  lines.push("}");
  if (elseBody.length) {
    lines.push("else {");
    elseBody.filter(Boolean).forEach((line) => instruction(lines, line));
    lines.push("}");
  }
  return lines.join("\n");
};
