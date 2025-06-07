/**
 * Sorts the characters in a string in descending order based on their frequency.
 * Characters with higher frequency appear before those with lower frequency.
 * If two characters have the same frequency, their order in the output is arbitrary.
 *
 * @param {string} s - The input string to be sorted by character frequency.
 * @returns {string} - A new string with characters sorted by descending frequency.
 *
 * @example
 * frequencySort("tree"); // returns "eetr" or "eert"
 * frequencySort("cccaaa"); // returns "aaaccc" or "cccaaa"
 * frequencySort("Aabb"); // returns "bbAa" or "bbaA"
 */
var frequencySort = function (s) {
  var obj = {};
  for (let i = 0; i < s.length; i++) {
    if (!obj[s[i]]) {
      obj[s[i]] = 1;
    } else {
      obj[s[i]]++;
    }
  }
  const revSortedObjEntries = Object.entries(obj).sort(([, a], [, b]) => b - a);
  let res = "";
  for (let [key, value] of revSortedObjEntries) {
    for (let i = 0; i < value; i++) {
      res += key;
    }
  }
  return res;
};

console.log(frequencySort("tree"));
console.log(frequencySort("cccaaa"));
console.log(frequencySort("Aabb"));
console.log(frequencySort("aabbccddeeffgghhii"));
