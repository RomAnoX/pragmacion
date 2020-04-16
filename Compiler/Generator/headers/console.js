export default `
const print = (...args) => {
  console.log(args.map(i => i.toString()).join(''));
}

const read = (type, name = 'variable') => {
  const value = __READ.question(name + '> ');
  if (type === 'int') {
    return parseFloat(value);
  }
  return value;
}
`;
