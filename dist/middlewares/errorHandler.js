"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const zod_1 = require("zod");
const AppError_1 = __importDefault(require("../utils/AppError"));
const handleZodErrors = (res, error) => {
    const errors = error.issues.map((issue) => ({
        path: issue.path.join("."),
        message: issue.message,
    }));
    return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
        message: error.message,
        errors: errors,
    });
};
const handleAppError = (res, error) => {
    return res.status(error.statusCode).json({
        message: error.message,
        errorCode: error.errorCode,
    });
};
const errorHandler = (error, req, res, _next) => {
    console.log(`PATH ${req.path}`, error);
    if (error instanceof zod_1.ZodError) {
        handleZodErrors(res, error);
        return;
    }
    if (error instanceof AppError_1.default) {
        handleAppError(res, error);
        return;
    }
    res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).send("Internal server error");
};
exports.default = errorHandler;
//# sourceMappingURL=errorHandler.js.map