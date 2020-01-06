import execute from "./Compiler/Execute/console";

const code = `
numero x = 10
numero i = 1
mientras i <= x hacer
  imprimir "El indice es: ", i
  i = i + 1
fin
`;

// execute(code, { debug: true, justParse: true });
execute(code);
