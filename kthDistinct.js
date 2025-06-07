/**
 * Returns the k-th distinct string in the given array.
 * A distinct string is a string that appears exactly once in the array.
 * If there are fewer than k distinct strings, returns an empty string.
 *
 * @param {string[]} arr - The array of strings to search.
 * @param {number} k - The 1-based index of the distinct string to return.
 * @returns {string} The k-th distinct string, or an empty string if not found.
 *
 * @example
 * kthDistinct(["a", "b", "a"], 1); // returns "b"
 * kthDistinct(["a", "b", "a"], 2); // returns ""
 * kthDistinct(["a", "b", "c", "b"], 2); // returns "c"
 * kthDistinct(["a", "b", "c", "d"], 3); // returns "c"
 */
var kthDistinct = function (arr, k) {
  const resObj = {};
  let count = 1;
  arr.forEach((element) => {
    if (!resObj[element]) {
      resObj[element] = 1;
    } else {
      resObj[element]++;
    }
  });

  for (const [key, value] of Object.entries(resObj)) {
    if (value === 1 && count === k) {
      return key;
    } else if (value === 1) {
      count++;
    }
  }
  return "";
};

console.log(kthDistinct(["a", "b", "a"], 3));
