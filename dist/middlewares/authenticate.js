"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const appAssert_1 = __importDefault(require("../utils/appAssert"));
const http_status_codes_1 = require("http-status-codes");
const jwt_1 = require("../utils/jwt");
const authenticate = (req, res, next) => {
    // get access token from cookies
    const accessToken = req.cookies.accessToken;
    (0, appAssert_1.default)(accessToken, http_status_codes_1.StatusCodes.UNAUTHORIZED, "Not Authorized", "InvalidAccessToken" /* AppErrorCode.InvalidAccessToken */);
    // verify a ccess token
    const { error, payload } = (0, jwt_1.verifyToken)(accessToken);
    (0, appAssert_1.default)(payload, http_status_codes_1.StatusCodes.UNAUTHORIZED, error?.toLowerCase() === "jwt expired" ? "Token Expired" : "Invalid Token", "InvalidAccessToken" /* AppErrorCode.InvalidAccessToken */);
    req.userId = payload?.userId;
    next();
};
exports.default = authenticate;
//# sourceMappingURL=authenticate.js.map