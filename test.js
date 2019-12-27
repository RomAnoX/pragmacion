import parser from "./Compiler/Parser";
import generator from "./Compiler/Generator";
import StreamError from "./Compiler/Stream/StreamError";
import helpers from "./Compiler/Generator/headers/console";

const code = `
# este es un comentario
numero x = 10 + 3 * (2 - 1)
texto nombre = "Mundo"
imprimir "Hola ", nombre
imprimir "El numero es: ", x
texto dato = nombre + 2
imprimir dato
`;

try {
  const node = parser(code);
  // console.log(JSON.stringify(node, null, 2));
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
