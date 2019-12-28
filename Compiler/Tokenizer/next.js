import input from "../Stream";
import token from "./token";
import read from "./read";
import is from "./is";

import comment from "./comment";
import string from "./string";
import number from "./number";
import variable from "./variable";

const next = () => {
  read(is.whitespace);
  if (input.eof()) return null;
  const ch = input.peek();
  if (ch == "#") {
    comment();
    return next();
  }
  if (ch == "\n") return token("punc", input.next(), input.position());
  if (ch == '"') return string();
  if (is.digit(ch)) return number();
  if (is.varStart(ch)) return variable();
  if (is.punctuation(ch)) return token("punc", input.next(), input.position());
  if (is.operator(ch)) return token("op", read(is.operator), input.position());
  input.fail("Caracter desconocido: " + ch);
};

export default next;
