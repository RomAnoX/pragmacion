import Stream from "../Stream";
import next from "./next";

class Tokenizer {
  constructor(code = null) {
    if (code) {
      Stream.code = code;
    }
    this.current = null;
  }

  peek() {
    return this.current || (this.current = next());
  }

  eof() {
    return this.peek() === null;
  }

  next() {
    const tok = this.current;
    this.current = null;
    return tok || next();
  }

  fail(msg) {
    return Stream.fail(msg);
  }
}

export default new Tokenizer();
