import { KEYWORDS } from "../constants";

const keyword = name => KEYWORDS.includes(name);
const digit = ch => /[0-9]/i.test(ch);
const varStart = ch => /[a-z_]/i.test(ch);
const variable = ch => varStart(ch) || "?!0123456789".indexOf(ch) >= 0;
const operator = ch => "+-*/%=&|<>^".indexOf(ch) >= 0;
const punctuation = ch => ",;(){}[]\n".indexOf(ch) >= 0;
const whitespace = ch => " \t".indexOf(ch) >= 0;

export default {
  keyword,
  digit,
  varStart,
  variable,
  operator,
  punctuation,
  whitespace,
};
