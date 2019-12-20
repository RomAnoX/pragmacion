import input from "../Tokenizer";

export default {
  is() {
    const tok = input.peek();
    return tok && tok.type === "var";
  },
  parse() {
    if (!this.is()) {
      input.fail("Se esperaba una variable");
    }
    return input.next();
  },
};
