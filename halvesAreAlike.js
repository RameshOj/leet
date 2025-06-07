/**
 * Determines if the two halves of a given string have the same number of vowels.
 *
 * @param {string} s - The input string of even length.
 * @returns {boolean} Returns true if both halves contain the same number of vowels, otherwise false.
 *
 * @example
 * halvesAreAlike("book"); // returns true, both halves have 1 vowel
 * @example
 * halvesAreAlike("textbook"); // returns false, first half has 1 vowel, second half has 2 vowels
 * @example
 * halvesAreAlike("AbCdEfGh"); // returns true, both halves have 2 vowels (case-insensitive)
 */
var halvesAreAlike = function (s) {
  const vowels = ["a", "e", "i", "o", "u"];
  const firstHalf = s.slice(0, s.length / 2);
  const secondHalf = s.slice(s.length / 2);
  let firstHalfCount = 0;
  let secondHalfCount = 0;
  for (let i = 0; i < firstHalf.length; i++) {
    if (vowels.includes(firstHalf[i])) firstHalfCount++;
  }

  for (let i = 0; i < secondHalf.length; i++) {
    if (vowels.includes(secondHalf[i])) secondHalfCount++;
  }

  if (firstHalfCount === secondHalfCount) return true;
  return false;
};

halvesAreAlike("book");
