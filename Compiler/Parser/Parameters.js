import input from "../Tokenizer";
import Punctuation from "./Punctuation";
import Value from "./Value";

export default {
  parse() {
    const list = [];
    do {
      list.push(Value.parse());
      if (Punctuation.is(",")) {
        Punctuation.skip(",");
      } else {
        break;
      }
    } while (!input.eof());
    return list;
  },
};
