/**
 * Finds the longest "nice" substring within the given string.
 * A substring is considered "nice" if for every letter in the substring,
 * both its uppercase and lowercase forms are also present in the substring.
 *
 * @param {string} s - The input string to search for the longest nice substring.
 * @returns {string} The longest nice substring found in the input string. Returns an empty string if none exists.
 *
 * @example
 * longestNiceSubstring("YazaAay"); // returns "aAa"
 * @example
 * longestNiceSubstring("Bb"); // returns "Bb"
 * @example
 * longestNiceSubstring("c"); // returns ""
 */
const longestNiceSubstring = function (s) {
  let longestStr = "";

  const isNice = (str) => {
    for (let c = 0; c < str.length; c++) {
      if (
        !str.includes(str[c].toLowerCase()) ||
        !str.includes(str[c].toUpperCase())
      ) {
        return false;
      }
    }
    return true;
  };

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      const subStr = s.slice(i, j + 1);
      if (isNice(subStr) && subStr.length > longestStr.length) {
        longestStr = subStr;
      }
    }
  }
  return longestStr;
};

console.log(longestNiceSubstring("YazaAay"));
