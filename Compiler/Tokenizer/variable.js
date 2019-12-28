import { BOOLEANS } from "../constants";
import input from "../Stream";
import token from "./token";
import read from "./read";
import is from "./is";

export default () => {
  const id = read(is.variable);
  if (BOOLEANS.includes(id)) {
    return token("bool", id === "verdadero");
  }
  return token(is.keyword(id) ? "kw" : "var", id, input.position());
};
