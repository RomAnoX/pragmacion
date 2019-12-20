import parser from "./Compiler/Parser";
import generator from "./Compiler/Generator";
import StreamError from "./Compiler/Stream/StreamError";

const code = `
imprimir "Hola Mundo"
imprimir "Este es nuestro primer programa"
`;
try {
  const node = parser(code);
  const result = generator(node);
  eval(result);
} catch (err) {
  if (err instanceof StreamError) {
    console.error(`ERROR: ${err.message}`);
    console.log(StreamError.parse(err));
  } else {
    throw err;
  }
}
