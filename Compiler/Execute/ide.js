import ide from "../Generator/headers/ide";
import parser from "../Parser";
import generator from "../Generator";
import StreamError from "../Stream/StreamError";

export default (code, __OUTPUT, __READ) => {
  __OUTPUT.clear();
  try {
    const tree = parser(code);
    const result = generator(tree);
    const content = [ide, result].join("\n");
    eval(`(async () => {${content}})()`);
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
