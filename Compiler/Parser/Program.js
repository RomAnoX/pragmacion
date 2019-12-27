import input from "../Tokenizer";
import Instruction from "./Instruction";
import Punctuation from "./Punctuation";

export default {
  parse() {
    const body = [];
    while (!input.eof()) {
      body.push(Instruction.parse());
      if (!input.eof()) Punctuation.maybe("\n");
    }
    return { type: "prog", body };
  },
};
