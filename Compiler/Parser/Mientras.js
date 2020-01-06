import input from "../Tokenizer";
import Expression from "./Expression";
import Instruction from "./Instruction";
import Punctuation from "./Punctuation";
import { FOLLOWS } from "../constants";

export default {
  is() {
    const tok = input.peek();
    return tok && tok.type === "kw" && tok.value === "mientras";
  },
  isEnd() {
    const tok = input.peek();
    return tok && tok.type === "kw" && tok.value === "fin";
  },
  parse() {
    if (!this.is()) {
      input.fail("Se esperaba el ciclo mientras");
    }
    const tok = input.next();
    const value = Expression.parse();
    const then = input.next();
    if (then.type !== "kw" || !FOLLOWS.includes(then.value)) {
      input.fail(`Se esperaba "${FOLLOWS.join(", ")}"`);
    }
    const body = [];
    while (!input.eof() && !this.isEnd()) {
      body.push(Instruction.parse());
      if (!input.eof()) Punctuation.maybe("\n");
    }
    if (!this.isEnd()) {
      input.fail('Se esperaba "fin" para el ciclo "mientras"');
    }

    input.next();
    return {
      type: "mientras",
      value: value,
      body: body,
      pos: tok.pos,
    };
  },
};
