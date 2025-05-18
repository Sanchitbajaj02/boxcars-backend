"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_NAME = exports.MONGO_URI = exports.JWT_REFRESH_SECRET = exports.JWT_SECRET = exports.FRONTEND_URL = exports.PORT = exports.NODE_ENV = void 0;
const getEnv = (key, defaultValue) => {
    const value = process.env[key] || defaultValue;
    if (value === undefined) {
        throw new Error(`Missing environment variable: ${key}`);
    }
    return value;
};
exports.NODE_ENV = getEnv("NODE_ENV", "development");
exports.PORT = getEnv("PORT", "5000");
exports.FRONTEND_URL = getEnv("FRONTEND_URL");
exports.JWT_SECRET = getEnv("JWT_SECRET");
exports.JWT_REFRESH_SECRET = getEnv("JWT_REFRESH_SECRET");
exports.MONGO_URI = getEnv("MONGO_URI");
exports.DB_NAME = getEnv("DB_NAME");
//# sourceMappingURL=env.js.map