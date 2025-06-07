/**
 * Counts the number of substrings in the given string `s` that contain at least one occurrence of each character 'a', 'b', and 'c'.
 *
 * @param {string} s - The input string to search for substrings.
 * @returns {number} The number of substrings containing at least one 'a', one 'b', and one 'c'.
 *
 * @example
 * numberOfSubstrings("abc"); // returns 1
 * @example
 * numberOfSubstrings("aaacb"); // returns 3
 * @example
 * numberOfSubstrings("abcabc"); // returns 10
 */
var numberOfSubstrings = function (s) {
  let allSubStrings = [];

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      const subStr = s.slice(i, j + 1);
      if (
        subStr.includes("a") &&
        subStr.includes("b") &&
        subStr.includes("c")
      ) {
        allSubStrings.push(subStr);
      }
    }
  }
  return allSubStrings.length;
};

console.log(numberOfSubstrings("abcabc"));
