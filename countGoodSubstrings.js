/**
 * Finds all substrings of length 3 in the given string `s` where all characters are distinct.
 *
 * Iterates through the string, extracts every possible substring of length 3,
 * and checks if all characters in each substring are unique. Returns an array
 * containing all such "good" substrings.
 *
 * @param {string} s - The input string to search for good substrings.
 * @returns {string[]} An array of substrings of length 3 with all unique characters.
 *
 * @example
 * countGoodSubstrings("xyzzaz"); // returns ["xyz"]
 *
 * @example
 * countGoodSubstrings("aababcabc"); // returns [ 'abc', 'bca', 'cab', 'abc' ]
 */
var countGoodSubstrings = function (s) {
  let goodStrArr = [];
  let allSbStrArr = [];
  for (let i = 0; i < s.length - 2; i++) {
    allSbStrArr.push(s.substring(i, i + 3));
  }
  for (let j = 0; j < allSbStrArr.length; j++) {
    let str = "";
    for (let k = 0; k < allSbStrArr[j].length; k++) {
      if (!str.includes(allSbStrArr[j][k])) {
        if (k === 2 && str.length === 2) {
          goodStrArr.push(allSbStrArr[j]);
        } else {
          str += allSbStrArr[j][k];
        }
      } else {
        str = "";
        continue;
      }
    }
  }
  return goodStrArr;
};

console.log(countGoodSubstrings("aababcabc"));
