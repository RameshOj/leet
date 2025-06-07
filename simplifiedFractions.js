/**
 * Generates all simplified fractions between 0 and 1 (exclusive) for denominators up to n.
 * A fraction is considered simplified if the numerator and denominator are coprime.
 *
 * @param {number} n - The maximum denominator value.
 * @returns {void} Prints the array of simplified fractions to the console.
 *
 * @example
 * simplifiedFractions(4);
 * // Output: [ '1/2', '1/3', '2/3', '1/4', '3/4' ]
 *
 * @example
 * simplifiedFractions(2);
 * // Output: [ '1/2' ]
 */

var simplifiedFractions = function (n) {
  let map = new Map();
  let res = [];
  for (let i = 1; i < n; i++) {
    for (j = i + 1; j <= n; j++) {
      if (i % j !== 0 && !map.get(i / j)) {
        let op = `${i}/${j}`;
        map.set(i / j, op);
        res.push(op);
      }
    }
  }
  console.log(res);
};

simplifiedFractions(4);
