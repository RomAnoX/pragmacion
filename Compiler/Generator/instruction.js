import read from "./read";
import print from "./print";
import assign from "./assign";

export default (lines, node) => {
  if (node) {
    switch (node.type) {
      case "print":
        lines.push(print(node));
        break;
      case "assign":
        lines.push(assign(node));
        break;
      case "read":
        lines.push(read(node));
        break;
      default:
        throw new Error(`La instruccion "${node.type}" no es reconocida`);
    }
  }
};
