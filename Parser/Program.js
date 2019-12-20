import input from "../Compiler/Tokenizer";
import Instruction from "./Instruction";
import Punctuation from "./Punctuation";

export default {
  parse() {
    const body = [];
    while (!input.eof()) {
      body.push(Instruction.parse());
      if (!input.eof()) Punctuation.skip("\n");
    }
    return { type: "prog", body };
  },
};
