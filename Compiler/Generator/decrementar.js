export default (node) => {
  const variable = node.value;
  return `${variable.value}--;`;
};
