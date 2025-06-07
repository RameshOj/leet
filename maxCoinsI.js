/**
 * Calculates the maximum sum of elements from the array such that
 * no two selected elements are adjacent in the original array.
 *
 * @param {number} n - The number of elements in the array.
 * @param {number[]} arr - The array of numbers to select from.
 * @returns {number} The maximum sum achievable under the adjacency constraint.
 *
 * @example
 * maxCoinsI(7, [6, 7, 1, 3, 8, 2, 4]); // returns 19 (choose 7, 8, 4)
 *
 * @example
 * maxCoinsI(5, [3, 2, 5, 10, 7]); // returns 15 (choose 3, 10, or 5, 10)
 */
function maxCoinsI(n, arr) {
  // Write your code here
  let sum = 0;
  let lastSumI = [];

  const mutatedArr = arr.map((el, i) => ({ el, i }));
  const sortedMutatedArr = mutatedArr.sort((el1, el2) => el2.el - el1.el);
  for (let i = 0; i < sortedMutatedArr.length; i++) {
    if (
      !lastSumI.includes(sortedMutatedArr[i].i + 1) &&
      !lastSumI.includes(sortedMutatedArr[i].i - 1)
    ) {
      lastSumI.push(sortedMutatedArr[i].i);
      sum += sortedMutatedArr[i].el;
    }
  }
  return sum;
}

console.log(maxCoinsI(7, [6, 7, 1, 3, 8, 2, 4])); // returns 19
