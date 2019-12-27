export default `
const print = (...args) => {
  console.log(args.map(i => i.toString()).join(''));
}

const read = type => {
  const value = __READ.question(' > ');
  if (type === 'int') {
    return parseFloat(value);
  }
  return value;
}
`;
