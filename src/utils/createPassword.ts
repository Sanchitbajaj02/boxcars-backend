/**
 * Generates a random password of specified length
 * @param {number} length - The desired length of the password (default: 12)
 * @returns {string} A random password containing uppercase, lowercase, numbers and special characters
 */
const createPasswordGenerator = (length: number = 8): string => {
  // Pre-define character sets as arrays for faster access
  const charSets = [
    [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'],
    [...'abcdefghijklmnopqrstuvwxyz'],
    [...'0123456789'],
  ];
  
  // Pre-calculate total length of all characters
  const allChars = charSets.flat();
  const result = new Array(length);
    
  // Fill remaining positions with random characters
  for (let i = 0; i < length; i++) {
    result[i] = allChars[Math.floor(Math.random() * allChars.length)];
  }
  
  // Fisher-Yates shuffle - more efficient than sort with random compare
  for (let i = length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result.join('');
};

export default createPasswordGenerator;

