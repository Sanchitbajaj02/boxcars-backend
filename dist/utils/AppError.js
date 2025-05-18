"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppError extends Error {
    constructor(statusCode, message, errorCode) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.errorCode = errorCode;
    }
}
// new AppError(StatusCodes.BAD_REQUEST, "Invalid email", AppErrorCode.InvalidAccessToken);
exports.default = AppError;
//# sourceMappingURL=AppError.js.map