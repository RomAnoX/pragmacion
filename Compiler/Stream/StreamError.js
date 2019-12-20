function StreamError(message, position) {
  this.message = message;
  this.code = position.code;
  this.line = position.line;
  this.col = position.col;
  // Use V8's native method if available, otherwise fallback
  if ("captureStackTrace" in Error) Error.captureStackTrace(this, StreamError);
  else this.stack = new Error().stack;
}

StreamError.prototype = Object.create(Error.prototype);
StreamError.prototype.name = "StreamError";
StreamError.prototype.constructor = StreamError;

StreamError.parse = error => {
  const message = [error.code];
  const spaces = " ".repeat(error.col - 1);
  message.push(`${spaces}^`);
  return message.join("\n");
};

export default StreamError;
