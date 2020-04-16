import input from "../Tokenizer";
import Symbols from "../Symbols";
import Variable from "./Variable";

export default {
  is() {
    const tok = input.peek();
    return tok && tok.type === "kw" && tok.value === "decrementar";
  },
  parse() {
    if (!this.is()) {
      input.fail('Se esperaba la funcion "decrementar"');
    }

    const tok = input.next();
    if (!Variable.is()) {
      input.fail("Se esperaba una variable");
    }

    const variable = input.next();
    Symbols.failIfNotExists(variable);
    Symbols.failIfNotNumber(variable);
    return {
      type: "decrementar",
      value: variable,
      pos: tok.pos,
    };
  },
};
