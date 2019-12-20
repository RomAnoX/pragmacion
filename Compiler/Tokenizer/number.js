import token from "./token";
import read from "./read";
import is from "./is";

export default () => {
  let dot = false;
  const number = read(ch => {
    if (ch == ".") {
      if (dot) return false;
      dot = true;
      return true;
    }
    return is.digit(ch);
  });
  return token("num", parseFloat(number));
};
