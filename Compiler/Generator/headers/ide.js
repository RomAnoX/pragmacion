export default `
const print = (...args) => {
  const line = document.createElement("p");
  const text = document.createTextNode(args.map(i => i.toString()).join(""));
  line.className = "m-0";
  line.appendChild(text);
  __OUTPUT.appendChild(line);
}
`;
