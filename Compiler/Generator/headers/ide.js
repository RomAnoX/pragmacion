export default `
const print = (...args) => {
  __OUTPUT.log(args.map(i => i.toString()).join(""));
}

const read = async (type, name = 'variable') => {
  const value = await __READ({
    title: "LEER " + name.toUpperCase(),
    label: 'Introduzca un valor para ' + name,
  });
  if (type === 'int') {
    return parseFloat(value);
  }
  return value;
}
`;
