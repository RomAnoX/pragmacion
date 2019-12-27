import program from "./program";
import Symbols from "../Symbols";

export default node => {
  const lines = [];
  Object.keys(Symbols.list).forEach(key => {
    const type = Symbols.list[key].type;
    const initial = type === "int" ? 0 : type === "str" ? "''" : "'falso'";
    lines.push(`var ${key} = ${initial};`);
  });
  program(lines, node);
  return lines.join("\n");
};
