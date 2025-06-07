/**
 * Finds all starting indices of a given pattern within a text string and logs them as a space-separated string.
 *
 * Iterates through the input text, checking for occurrences of the specified pattern.
 * For each match, the starting index is appended to a result string.
 * The final result is logged to the console.
 *
 * @param {string} text - The text string to search within.
 * @param {string} pattern - The pattern string to search for.
 *
 * @example
 * // Logs: "0 4 "
 * findPatternIndices("testtest", "test");
 *
 * @example
 * // Logs: "2 5 "
 * findPatternIndices("ababcab", "ab");
 */
function findPatternIndices(text, pattern) {
  let allIndices = "";
  text.split("").forEach((char, i) => {
    if (text.slice(i, i + pattern.length) === pattern) {
      allIndices += i + " ";
    }
  });
  return allIndices.trim();
}

console.log(findPatternIndices("ababcababc", "ab"));
