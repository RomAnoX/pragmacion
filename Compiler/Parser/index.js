import Stream from "../Stream";
import Program from "./Program";

export default code => {
  Stream.code = code;
  return Program.parse();
};
