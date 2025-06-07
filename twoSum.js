/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/**
 * Finds all pairs of indices in the array whose corresponding values sum up to the target.
 *
 * @param {number[]} nums - The array of numbers to search through.
 * @param {number} target - The target sum to find.
 * @returns {number[][]} An array of index pairs [i, j] where nums[i] + nums[j] === target.
 *
 * @example
 * // returns [[0, 2]]
 * twoSum([1, 2, 3], 4);
 *
 * @example
 * // returns [[1, 3], [2, 4]]
 * twoSum([0, 2, 3, 2, 3], 5);
 */
var twoSum = function (nums, target) {
  let list = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        console.log(nums[i], nums[j]);
        list.push([i, j]);
      }
    }
  }
  return list;
};

console.log(
  twoSum(
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    20
  )
); // returns [[0, 20], [1, 19], [2, 18], [3, 17], [4, 16], [5, 15], [6, 14], [7, 13], [8, 12], [9, 11]]
