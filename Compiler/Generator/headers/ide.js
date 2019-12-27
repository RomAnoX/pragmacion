export default `
const print = (...args) => {
  __OUTPUT.log(args.map(i => i.toString()).join(""));
}
`;
