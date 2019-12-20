import input from "../Tokenizer";
import Symbols from "../Symbols";

export default {
  is() {
    const tok = input.peek();
    const types = ["var", "num", "str", "bool"];
    return tok && types.includes(tok.type);
  },
  parse() {
    if (!this.is()) {
      input.fail("Se esperaba una variable o valor nativo");
    }
    const tok = input.peek();
    if (tok.type === "var") {
      Symbols.failIfNotExists(tok);
    }
    return input.next();
  },
};
