export default `
const print = (...args) => {
  console.log(args.map(i => i.toString()).join(''));
}
`;
