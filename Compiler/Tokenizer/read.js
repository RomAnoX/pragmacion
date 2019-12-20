import input from "../Stream";

export default predicate => {
  const string = [];
  while (!input.eof() && predicate(input.peek())) {
    string.push(input.next());
  }
  return string.join("");
};
