/**
 * Determines if string `s` is a subsequence of string `t`.
 *
 * A subsequence is a sequence that can be derived from another sequence by deleting some or no elements, without changing the order of the remaining elements.
 *
 * @param {string} s - The string to check as a subsequence.
 * @param {string} t - The target string to check against.
 * @returns {boolean} Returns `true` if `s` is a subsequence of `t`, otherwise `false`.
 *
 * @example
 * isSubsequence("abc", "ahbgdc"); // true
 * @example
 * isSubsequence("axc", "ahbgdc"); // false
 * @example
 * isSubsequence("", "ahbgdc"); // true
 * @example
 * isSubsequence("bb", "ahbgdc"); // false
 */
var isSubsequence = function (s, t) {
  for (let i = 0; i < s.length; i++) {
    const idx = t.split("").indexOf(s[i]);
    console.log(idx, t);

    if (idx === -1) return false;
    t = t.slice(idx + 1);
  }
  return true;
};

console.log(isSubsequence("bb", "ahbgdc"));
