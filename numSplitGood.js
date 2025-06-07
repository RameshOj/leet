/**
 * Counts the number of ways to split a string into two non-empty parts such that
 * both parts contain the same number of distinct characters.
 *
 * @param {string} s - The input string to be split.
 * @returns {number} The number of good splits where both halves have the same number of unique characters.
 *
 * @example
 * numSplits("aacaba"); // returns 2
 * // Explanation: There are 2 good ways to split: "a|acaba" and "aaca|ba"
 *
 * @example
 * numSplits("abcd"); // returns 1
 * // Explanation: Only "ab|cd" is a good split.
 *
 * @example
 * numSplits("aaaaa"); // returns 4
 * // Explanation: All splits except the last one are good.
 */
var numSplits = function (s) {
  const countBalanced = (fs, ss) => {
    let fMap = {};
    let sMap = {};

    const fArr = fs.split("");
    const sArr = ss.split("");

    for (let i = 0; i < fArr.length; i++) {
      if (!fMap[fArr[i]]) {
        fMap[fArr[i]] = 1;
      } else {
        fMap[fArr[i]]++;
      }
    }

    for (let i = 0; i < sArr.length; i++) {
      if (!sMap[sArr[i]]) {
        sMap[sArr[i]] = 1;
      } else {
        sMap[sArr[i]]++;
      }
    }

    var fsize = Object.keys(fMap).length;
    var ssize = Object.keys(sMap).length;

    return fsize === ssize;
  };

  let res = 0;
  for (i = 1; i < s.length; i++) {
    let firstHalf = s.slice(0, i);
    let secondtHalf = s.slice(i);
    countBalanced(firstHalf, secondtHalf) && res++;
  }
  return res;
};

console.log(numSplits("aaaaa"));
