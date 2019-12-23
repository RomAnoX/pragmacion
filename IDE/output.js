import ide from "../Compiler/Generator/headers/ide";
import parser from "../Compiler/Parser";
import generator from "../Compiler/Generator";

export default async (cm, __OUTPUT) => {
  const code = cm.getValue();
  const node = parser(code);
  const result = generator(node);
  eval([ide, result].join("\n"));
};
