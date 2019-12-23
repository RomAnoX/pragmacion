import print from "./print";

export default (lines, node) => {
  switch (node.type) {
    case "print":
      lines.push(print(node));
      break;
    default:
      throw new Error("La instruccion no se puede generar");
  }
};
