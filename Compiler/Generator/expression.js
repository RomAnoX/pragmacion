// import StreamError from "../Stream/StreamError";

export default (expression, code) => {
  const boolOps = ["&", "|", "="];
  expression.forEach((arg) => {
    let value = arg.value;
    if (arg.type === "str") {
      value = `"${value}"`;
    }
    if (arg.type === "bool") {
      value = value ? '"verdadero"' : '"falso"';
    }
    if (boolOps.includes(value)) {
      value = `${value}${value}`;
    }
    code.push(`${value}`);
  });
};
