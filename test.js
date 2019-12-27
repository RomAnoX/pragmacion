import execute from "./Compiler/Execute/console";

const code = `
# este es un comentario
numero x
imprimir "Introduzca un numero"
leer x
imprimir "El numero es: ", x
`;

execute(code);
