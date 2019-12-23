import parser from "./Compiler/Parser";
import generator from "./Compiler/Generator";
import StreamError from "./Compiler/Stream/StreamError";
import helpers from "./Compiler/Generator/headers/console";

const code = `
# este es un comentario
imprimir "Hola Mundo ", "este es el ", 1, "er programa ", verdadero
`;

try {
  const node = parser(code);
  const result = generator(node);
  eval([helpers, result].join("\n"));
} catch (err) {
  if (err instanceof StreamError) {
    console.error(`ERROR: ${err.message}`);
    console.log(StreamError.parse(err));
  } else {
    throw err;
  }
}
