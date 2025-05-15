import { compare, hash } from "bcryptjs";

/**
 * Hashes a value using bcryptjs
 * @param {string} value - The value to hash
 * @param {number} saltRounds - The number of salt rounds to use
 * @returns {Promise<string>} The hashed value
 */
export const hashValue = async (value: string, saltRounds?: number): Promise<string> => {
  return await hash(value, saltRounds || 10);
};

/**
 * Compares a value with a hashed value using bcryptjs
 * @param {string} value - The value to compare
 * @param {string} hashedValue - The hashed value to compare against
 * @returns {Promise<boolean>} True if the value matches the hashed value, false otherwise
 */
export const compareValue = async (value: string, hashedValue: string): Promise<boolean> => {
  if (!value || !hashedValue) {
    return false;
  }

  return await compare(value, hashedValue).catch(() => false);
};
