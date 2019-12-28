import StreamError from "../Stream/StreamError";

export default node => {
  const code = [`${node.left.value} = `];
  const boolOps = ["&", "|", "="];
  node.right.value.forEach(arg => {
    let value = arg.value;
    if (arg.type === "str") {
      value = `"${value}"`;
    }
    if (arg.type === "bool") {
      value = value ? '"verdadero"' : '"falso"';
    }
    if (boolOps.includes(value)) {
      value = `${value}${value}`;
      // throw new StreamError(`El operador "${value}" no es valido`, node.pos);
    }
    code.push(`${value}`);
  });
  code.push(";");
  return code.join("");
};
