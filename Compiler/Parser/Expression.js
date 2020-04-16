import input from "../Tokenizer";
import Symbols from "../Symbols";

const TYPES = ["var", "num", "str", "bool", "op"];

export default {
  is() {
    const tok = input.peek();
    if (tok && tok.type === "punc") {
      return ["(", ")"].includes(tok.value);
    }
    return tok && TYPES.includes(tok.type);
  },
  parse() {
    const tokens = [];
    let groups = 0;
    while (this.is()) {
      const tok = input.next();
      if (tok.value === "(") {
        groups++;
      } else if (tok.value === ")") {
        groups--;
      } else if (tok.type === "var") {
        Symbols.failIfNotExists(tok);
      }
      if (tok.value === "<>") {
        tok.value = "!==";
      }
      tokens.push(tok);
    }
    if (groups !== 0) {
      input.fail("La expresion esta mal formada.");
    }
    return {
      type: "exp",
      value: tokens,
      pos: input.pos,
    };
  },
};
