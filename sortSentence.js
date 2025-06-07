/**
 * Reorders a shuffled sentence based on the number at the end of each word.
 * @param {string} s - The shuffled sentence.
 * @returns {string} - The correctly ordered sentence.
 */
function sortSentence(s) {
  const splittedSent = s.split(" ");
  let arr = [];

  for (let i = 0; i < splittedSent.length; i++) {
    const indx = splittedSent[i].match(/[0-9]/);
    arr[indx - 1] = splittedSent[i].replace(/[^a-z]/gi, "");
  }

  return arr.join(" ");
}

// Examples:
console.log(sortSentence("is2 sentence4 This1 a3")); // "This is a sentence"
console.log(sortSentence("Myself2 Me1 I4 and3")); // "Me Myself and I"
console.log(sortSentence("hello1")); // "hello"
