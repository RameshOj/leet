/**
 * Recursively reverses a given string.
 *
 * @param {string} str - The string to reverse.
 * @returns {string} The reversed string.
 *
 * @example
 * stringReverseRecur("hello"); // "olleh"
 * stringReverseRecur(""); // ""
 * stringReverseRecur("abc"); // "cba"
 */
const stringReverseRecur = (str) => {
  if (str === "") return "";
  return stringReverseRecur(str.substr(1)) + str.charAt(0);
};

console.log(stringReverseRecur("hellow"));
