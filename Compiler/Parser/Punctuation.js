import input from "../Tokenizer";

export default {
  is(punc) {
    const tok = input.peek();
    return tok && tok.type === "punc" && tok.value === punc;
  },
  skip(punc) {
    if (!this.is(punc)) {
      input.fail(`Se esperaba el signo "${punc}"`);
    }
    input.next();
  },
  maybe(punc) {
    if (this.is(punc)) {
      input.next();
    }
  },
};
