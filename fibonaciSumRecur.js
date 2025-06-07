/**
 * Recursively calculates the nth Fibonacci number.
 * Examples:
 *   fibonaciSumRecur(0) => 0
 *   fibonaciSumRecur(1) => 1
 *   fibonaciSumRecur(5) => 5
 *   fibonaciSumRecur(7) => 13
 *
 * @param {number} n - The position in the Fibonacci sequence (non-negative integer).
 * @returns {number} The nth Fibonacci number.
 */
const fibonaciSumRecur = (n) => {
  if (n <= 1) return n;
  return fibonaciSumRecur(n - 2) + fibonaciSumRecur(n - 1);
};

console.log(fibonaciSumRecur(12)); // Output: 144
