import __READ from "readline-sync";
import parser from "../Parser";
import generator from "../Generator";
import StreamError from "../Stream/StreamError";
import helpers from "../Generator/headers/console";

export default code => {
  try {
    const node = parser(code);
    const result = generator(node);
    const content = [helpers, result].join("\n");
    eval(`(async () => {${content}})()`);
  } catch (err) {
    if (err instanceof StreamError) {
      console.error(`ERROR: ${err.message}`);
      console.log(StreamError.parse(err));
    } else {
      throw err;
    }
  }
};
