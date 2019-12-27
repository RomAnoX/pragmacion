import input from "../Tokenizer";
import Parameters from "./Parameters";

export default {
  is() {
    const tok = input.peek();
    return tok && tok.type === "kw" && tok.value === "imprimir";
  },
  parse() {
    if (!this.is()) {
      input.fail("Se esperaba imprimir");
    }
    input.next();
    return {
      type: "print",
      args: Parameters.parse(),
    };
  },
};
