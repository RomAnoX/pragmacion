import input from "../Stream";
import token from "./token";

const escaped = end => {
  let escaped = false;
  const string = [];
  input.next();
  while (!input.eof()) {
    const ch = input.next();
    if (escaped) {
      string.push(ch);
      escaped = false;
    } else if (ch == "\\") {
      escaped = true;
    } else if (ch == end) {
      break;
    } else {
      string.push(ch);
    }
  }
  return string.join("");
};

export default () => token("str", escaped('"'));
