import instruction from "./instruction";

import expression from "./expression";

export default (node) => {
  const body = node.body;
  const lines = [];
  const code = ["while ("];
  expression(node.value.value, code);
  code.push(") {");
  lines.push(code.join(""));
  body.filter(Boolean).forEach((line) => instruction(lines, line));
  lines.push("}");
  return lines.join("\n");
};
