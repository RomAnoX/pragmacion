import input from "../Tokenizer";
import Punctuation from "./Punctuation";
import Read from "./Read";
import Print from "./Print";
import Create from "./Create";
import Variable from "./Variable";
import Symbols from "../Symbols";
import Assign from "./Assign";
import Si from "./Si";
import Mientras from "./Mientras";
import Incrementar from "./Incrementar";
import Decrementar from "./Decrementar";

export default {
  unexpected() {
    if (!input.eof()) {
      input.fail("Instruccion desconocida");
    }
  },
  parse() {
    while (Punctuation.is("\n")) Punctuation.skip("\n");

    if (Read.is()) return Read.parse();
    if (Print.is()) return Print.parse();
    if (Create.is()) return Create.parse();
    if (Si.is()) return Si.parse();
    if (Mientras.is()) return Mientras.parse();
    if (Incrementar.is()) return Incrementar.parse();
    if (Decrementar.is()) return Decrementar.parse();
    if (Variable.is()) {
      const variable = input.next();
      Symbols.failIfNotExists(variable);
      return Assign.parse(variable);
    }

    this.unexpected();
  },
};
