import read from "./read";
import print from "./print";
import assign from "./assign";
import si from "./si";
import mientras from "./mientras";
import incrementar from "./incrementar";
import decrementar from "./decrementar";
import StreamError from "../Stream/StreamError";

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
      case "if":
        lines.push(si(node));
        break;
      case "mientras":
        lines.push(mientras(node));
        break;
      case "incrementar":
        lines.push(incrementar(node));
        break;
      case "decrementar":
        lines.push(decrementar(node));
        break;
      default:
        throw new StreamError(
          `La instruccion "${node.type}" no es reconocida`,
          node.pos,
        );
    }
  }
};
