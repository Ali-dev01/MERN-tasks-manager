export class CustomError extends Error {
  constructor(message, statusCode, stack) {
    super(Array.isArray(message) ? message.join(", ") : message);
    this.message = Array.isArray(message) ? message : [message];
    this.statusCode = statusCode;
    this.stack = stack;
  }
}
