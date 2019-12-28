import execute from "./Compiler/Execute/console";

const code = `
# este es un comentario
numero x
leer x
x = x + 10
imprimir "La suma es: ",  x
`;

execute(code);
