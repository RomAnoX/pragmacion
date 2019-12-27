import Tokenizer from "../Tokenizer";
import Program from "./Program";
import Symbols from "../Symbols";

export default code => {
  Symbols.clear();
  Tokenizer.start(code);
  return Program.parse();
};
