import StreamError from "./StreamError";

class Stream {
  constructor() {
    this.input = null;
    this.lines = [];
    this.index = 0;
    this.pos = { line: 1, col: 0 };
  }

  set code(value) {
    this.input = value;
    this.lines = this.input.split("\n");
    this.index = 0;
    this.pos = { line: 1, col: 0 };
  }

  position() {
    return {
      code: this.lines[this.pos.line - 1],
      ...this.pos,
    };
  }

  peek() {
    return this.input.charAt(this.index);
  }

  eof() {
    return this.peek() === "";
  }

  next() {
    const char = this.peek();
    this.index++;
    if (char === "\n") {
      this.pos.line++;
      this.pos.col = 0;
    } else {
      this.pos.col++;
    }
    return char;
  }

  fail(msg) {
    throw new StreamError(msg, this.position());
  }
}

export default new Stream();
