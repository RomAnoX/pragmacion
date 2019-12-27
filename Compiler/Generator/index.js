import program from "./program";
import Symbols from "../Symbols";

export default node => {
  const lines = [];
  Object.keys(Symbols.list).forEach(key => lines.push(`var ${key};`));
  program(lines, node);
  return lines.join("\n");
};
