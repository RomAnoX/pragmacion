import input from "../Tokenizer";
import Symbols from "../Symbols";
import Variable from "./Variable";

export default {
  is() {
    const tok = input.peek();
    return tok && tok.type === "kw" && tok.value === "leer";
  },
  parse() {
    if (!this.is()) {
      input.fail("Se esperaba leer");
    }
    input.next();
    const variable = Variable.parse();
    Symbols.failIfNotExists(variable);
    return {
      type: "read",
      value: variable,
    };
  },
};
