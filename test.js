import execute from "./Compiler/Execute/console";

const code = `
numero i = 0
mientras i < 10 hacer
  imprimir "Indice: ", i + 1
  si i = 4 entonces
    imprimir "Ya vamos en la mitad"
  fin
  i = i + 1
fin
`;

// execute(code, { debug: true, justParse: true });
execute(code);
