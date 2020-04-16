import Symbols from "../Symbols";

export default (node) => {
  const variable = node.value;
  const type = Symbols.list[variable.value].type;
  return `${variable.value} = await read('${type}', '${variable.value}');`;
};
