import input from "../Stream";
import read from "./read";

export default () => {
  read(ch => ch != "\n");
  input.next();
};
