import input from "../Tokenizer";
import Expression from "./Expression";

export default {
  is() {
    const tok = input.peek();
    return tok && tok.type === "op" && tok.value === "=";
  },
  maybe(variable) {
    if (!this.is()) {
      return null;
    }
    const tok = input.next();
    return {
      type: "assign",
      left: variable,
      right: Expression.parse(),
      pos: tok.pos,
    };
  },
  parse(variable) {
    const node = this.maybe(variable);
    if (node === null) {
      input.fail("Se esperaba una operacion de asignacion");
    }
    return node;
  },
};
