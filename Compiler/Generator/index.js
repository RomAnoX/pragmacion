import program from "./program";

export default node => {
  const lines = [];
  program(lines, node);
  return lines.join("\n");
};
