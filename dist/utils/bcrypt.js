"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareValue = exports.hashValue = void 0;
const bcryptjs_1 = require("bcryptjs");
/**
 * Hashes a value using bcryptjs
 * @param {string} value - The value to hash
 * @param {number} saltRounds - The number of salt rounds to use
 * @returns {Promise<string>} The hashed value
 */
const hashValue = async (value, saltRounds) => {
    return await (0, bcryptjs_1.hash)(value, saltRounds || 10);
};
exports.hashValue = hashValue;
/**
 * Compares a value with a hashed value using bcryptjs
 * @param {string} value - The value to compare
 * @param {string} hashedValue - The hashed value to compare against
 * @returns {Promise<boolean>} True if the value matches the hashed value, false otherwise
 */
const compareValue = async (value, hashedValue) => {
    if (!value || !hashedValue) {
        return false;
    }
    return await (0, bcryptjs_1.compare)(value, hashedValue).catch(() => false);
};
exports.compareValue = compareValue;
//# sourceMappingURL=bcrypt.js.map