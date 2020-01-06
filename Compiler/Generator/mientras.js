import instruction from "./instruction";

export default node => {
  const expression = node.value;
  const body = node.body;
  const lines = [];
  const code = ["while ("];
  const boolOp = ["=", "&", "|"];
  expression.value.forEach(arg => {
    let value = arg.value;
    if (arg.type === "str") {
      value = `"${value}"`;
    }
    if (arg.type === "bool") {
      value = value ? '"verdadero"' : '"falso"';
    }
    if (boolOp.includes(arg.value)) {
      value = `${value}${value}`;
    }
    code.push(`${value}`);
  });
  code.push(") {");
  lines.push(code.join(""));
  body.filter(Boolean).forEach(line => instruction(lines, line));
  lines.push("}");
  return lines.join("\n");
};
