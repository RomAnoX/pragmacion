import Symbols from "../Symbols";

const parseVariable = token => {
  switch (Symbols.list[token.value].type) {
    case "int":
      return `(isNaN(parseFloat(${token.value})) ? 0 : parseFloat(${token.value}))`;
    case "bool":
      return `(!!${token.value} ? "verdadero" : "falso")`;
    default:
      return token.value;
  }
};

export default node => {
  const code = ["print(''"];
  node.args.forEach(expression => {
    const exp = ["("];
    expression.value.forEach(arg => {
      let value = arg.value;
      if (arg.type === "str") {
        value = `"${value}"`;
      }
      if (arg.type === "bool") {
        value = value ? '"verdadero"' : '"falso"';
      }
      if (arg.type === "var") {
        value = parseVariable(arg);
      }
      exp.push(`${value}`);
    });
    exp.push(")");
    code.push(`, ${exp.join("")}`);
  });
  code.push(");");
  return code.join("");
};
