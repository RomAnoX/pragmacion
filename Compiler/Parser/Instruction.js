import input from "../Tokenizer";
import Punctuation from "./Punctuation";
import Read from "./Read";
import Print from "./Print";

export default {
  unexpected() {
    input.fail("Instruccion desconocida: " + JSON.stringify(input.peek()));
  },
  parse() {
    while (Punctuation.is("\n")) Punctuation.skip("\n");

    if (Read.is()) return Read.parse();
    if (Print.is()) return Print.parse();

    this.unexpected();
  },
};
