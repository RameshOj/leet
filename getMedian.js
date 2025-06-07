/**
 * Returns the median value from two arrays of numbers.
 *
 * Both input arrays are merged and sorted to compute the median.
 * If the total number of elements is even, the median is the average of the two middle numbers (rounded down).
 * If the total number of elements is odd, the median is the middle number.
 *
 * @param {number[]} ar1 - The first array of numbers.
 * @param {number[]} ar2 - The second array of numbers.
 * @param {number} n - The length of the first array.
 * @param {number} m - The length of the second array.
 * @returns {number} The median value of the combined arrays.
 *
 * @example
 * // returns 3
 * getMedian([1, 3, 5], [2, 4, 6], 3, 3);
 *
 * @example
 * // returns 2
 * getMedian([1, 2], [3], 2, 1);
 */
function getMedian(ar1, ar2, n, m) {
  //Write your code here
  const newArr = [...ar1, ...ar2];
  const sortedArr = newArr.sort((a, b) => a - b);
  let median = 0;
  if (sortedArr.length % 2 === 0) {
    median = Math.floor(
      (sortedArr[sortedArr.length / 2 - 1] + sortedArr[sortedArr.length / 2]) /
        2
    );
  } else {
    median = sortedArr[Math.floor(sortedArr.length / 2)];
  }
  return median;
}

console.log(getMedian([1, 3, 5], [2, 4, 6]));
