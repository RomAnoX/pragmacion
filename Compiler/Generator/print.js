export default node => {
  const code = ["print(''"];
  node.args.forEach(arg => {
    let value = arg.value;
    if (arg.type === "str") {
      value = `"${value}"`;
    }
    if (arg.type === "bool") {
      value = value ? '"verdadero"' : '"falso"';
    }
    code.push(`, ${value}`);
  });
  code.push(");");
  return code.join("");
};
