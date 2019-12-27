import ide from "../Compiler/Generator/headers/ide";
import parser from "../Compiler/Parser";
import generator from "../Compiler/Generator";
import StreamError from "../Compiler/Stream/StreamError";

export default async (cm, __OUTPUT) => {
  __OUTPUT.clear();
  try {
    const code = cm.getValue();
    const tree = parser(code);
    const result = generator(tree);
    eval([ide, result].join("\n"));
  } catch (err) {
    if (err instanceof StreamError) {
      const lines = [
        `ERROR: ${err.message}`,
        `Linea: ${err.line}, Columna: ${err.col}`,
        " ",
        StreamError.parse(err),
      ];
      __OUTPUT.log(...lines);
    } else {
      __OUTPUT.log(err.message);
    }
  }
};
