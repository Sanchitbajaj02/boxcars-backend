"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.signToken = exports.refreshTokenSignOptions = exports.accessTokenSignOptions = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../constants/env");
const defaults = {
    audience: ["user"],
};
exports.accessTokenSignOptions = {
    secret: env_1.JWT_SECRET,
    expiresIn: "1d",
};
exports.refreshTokenSignOptions = {
    secret: env_1.JWT_REFRESH_SECRET,
    expiresIn: "30d",
};
const signToken = (payload, options) => {
    const { secret, ...signOpts } = options || exports.accessTokenSignOptions;
    return jsonwebtoken_1.default.sign(payload, secret, { ...defaults, ...signOpts });
};
exports.signToken = signToken;
const verifyToken = (token, options) => {
    const { secret = env_1.JWT_SECRET, ...verifyOpts } = options || {};
    try {
        const payload = jsonwebtoken_1.default.verify(token, secret, {
            ...defaults,
            ...verifyOpts,
        });
        return {
            payload,
        };
    }
    catch (error) {
        return {
            error: error.message,
        };
    }
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=jwt.js.map