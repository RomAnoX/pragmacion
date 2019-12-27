import input from "../Tokenizer";
import Symbols from "../Symbols";
import Variable from "./Variable";
import Assign from "./Assign";

const TYPES = {
  numero: "int",
  texto: "str",
  boleano: "bool",
};

export default {
  is() {
    const tok = input.peek();
    return tok && tok.type === "kw" && Object.keys(TYPES).includes(tok.value);
  },
  parse() {
    if (!this.is()) {
      input.fail("Se esperaba declaracion de variable");
    }
    const tok = input.next();
    const variable = Variable.parse();
    Symbols.failIfExist(variable);
    Symbols.add(variable, TYPES[tok.value]);
    return Assign.maybe(variable);
  },
};
