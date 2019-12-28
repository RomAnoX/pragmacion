import __READ from "readline-sync";
import parser from "../Parser";
import generator from "../Generator";
import StreamError from "../Stream/StreamError";
import helpers from "../Generator/headers/console";

export default (code, options = {}) => {
  try {
    const node = parser(code);
    if (options.debug) console.log(JSON.stringify(node, null, 2));
    if (options.justParse) return;

    const result = generator(node);
    const content = [helpers, result].join("\n");
    if (options.debug) console.log(content);
    if (options.noEval) return;

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
