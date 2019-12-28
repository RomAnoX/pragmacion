import input from "../Tokenizer";
import Punctuation from "./Punctuation";
import Read from "./Read";
import Print from "./Print";
import Create from "./Create";
import Variable from "./Variable";
import Symbols from "../Symbols";
import Assign from "./Assign";

export default {
  unexpected() {
    if (!input.eof()) {
      input.fail("Instruccion desconocida: " + JSON.stringify(input.peek()));
    }
  },
  parse() {
    while (Punctuation.is("\n")) Punctuation.skip("\n");

    if (Read.is()) return Read.parse();
    if (Print.is()) return Print.parse();
    if (Create.is()) return Create.parse();
    if (Variable.is()) {
      const variable = input.next();
      Symbols.failIfNotExists(variable);
      return Assign.parse(variable);
    }

    this.unexpected();
  },
};
