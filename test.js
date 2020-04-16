import execute from "./Compiler/Execute/console";

const code = `
numero i = 10
mientras i > 0 hacer
  imprimir "Indice: ", i
  si i = 6 entonces
    imprimir "Ya vamos en la mitad"
  fin
  decrementar i
fin
`;

const justParse = false;
execute(code, { justParse });
