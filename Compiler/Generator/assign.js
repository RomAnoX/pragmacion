import expression from "./expression";

export default (node) => {
  const code = [`${node.left.value} = `];
  expression(node.right.value, code);
  return code.join("");
};
