/**
 * Returns the first palindrome string found in the given array of words.
 *
 * A palindrome is a word that reads the same backward as forward.
 * If no palindrome is found, returns an empty string.
 *
 * @param {string[]} words - An array of strings to search for a palindrome.
 * @returns {string} The first palindrome found in the array, or an empty string if none exists.
 *
 * @example
 * firstPalindrome(["abc", "car", "ada", "racecar", "cool"]);
 * // returns "ada"
 *
 * @example
 * firstPalindrome(["not", "a", "palindrome"]);
 * // returns ""
 */
var firstPalindrome = function (words) {
  for (let i = 0; i < words.length; i++) {
    if (words[i] === words[i].split("").reverse().join("")) return words[i];
  }
  return "";
};

console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]));
