import input from "../Tokenizer";
import Punctuation from "./Punctuation";
import Expression from "./Expression";

export default {
  parse() {
    const list = [];
    do {
      list.push(Expression.parse());
      if (Punctuation.is(",")) {
        Punctuation.skip(",");
      } else {
        break;
      }
    } while (!input.eof());
    return list;
  },
};
