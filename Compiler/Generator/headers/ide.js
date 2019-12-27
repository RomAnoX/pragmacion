export default `
const print = (...args) => {
  __OUTPUT.log(args.map(i => i.toString()).join(""));
}

const read = async type => {
  const value = await __READ({
    title: "LEER VARIABLE",
    label: 'Introduzca un valor',
  });
  if (type === 'int') {
    return parseFloat(value);
  }
  return value;
}
`;
