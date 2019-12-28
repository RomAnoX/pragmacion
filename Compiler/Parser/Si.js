import input from "../Tokenizer";
import Expression from "./Expression";
import { FOLLOWS } from "../constants";
import Instruction from "./Instruction";
import Punctuation from "./Punctuation";
import StreamError from "../Stream/StreamError";

export default {
  is() {
    const tok = input.peek();
    return tok && tok.type === "kw" && tok.value === "si";
  },
  isEnd() {
    const tok = input.peek();
    return tok && tok.type === "kw" && tok.value === "fin";
  },
  isElse() {
    const tok = input.peek();
    return tok && tok.type === "kw" && tok.value === "sino";
  },
  isElseEnd() {
    const tok = input.peek();
    return tok && tok.type === "kw" && ["sino", "fin"].includes(tok.value);
  },
  parse() {
    if (!this.is()) {
      input.fail('Se esperaba el condicional "si"');
    }
    const tok = input.next();
    const value = Expression.parse();
    let then = input.next();
    if (then.type !== "kw" || !FOLLOWS.includes(then.value)) {
      input.fail(`Se esperaba "${FOLLOWS.join(", ")}"`);
    }

    const ifBody = [];
    const elseBody = [];
    while (!input.eof() && !this.isElseEnd()) {
      ifBody.push(Instruction.parse());
      if (!input.eof()) Punctuation.maybe("\n");
    }
    if (this.isElse()) {
      then = input.next();
      while (!input.eof() && !this.isEnd()) {
        elseBody.push(Instruction.parse());
        if (!input.eof()) Punctuation.maybe("\n");
      }
    }
    if (!this.isEnd()) {
      input.fail('Se esperaba "fin" para el condicional "Si"');
    }

    input.next();
    return {
      type: "if",
      value: value,
      then: ifBody,
      else: elseBody,
      pos: tok.pos,
    };
  },
};
