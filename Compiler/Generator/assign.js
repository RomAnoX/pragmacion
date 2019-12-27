export default node => {
  const code = [`${node.left.value} = `];
  const notValid = ["&", "|", "="];
  node.right.value.forEach(arg => {
    let value = arg.value;
    if (arg.type === "str") {
      value = `"${value}"`;
    }
    if (arg.type === "bool") {
      value = value ? '"verdadero"' : '"falso"';
    }
    if (notValid.includes(value)) {
      throw new Error(`El operador "${value}" no es valido`);
    }
    code.push(`${value}`);
  });
  code.push(";");
  return code.join("");
};
