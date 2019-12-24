import Tokenizer from "../Tokenizer";
import Program from "./Program";

export default code => {
  Tokenizer.start(code);
  return Program.parse();
};
