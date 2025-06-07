// Function determines if all characters in a given string have the same number of occurrences. It returns true if all characters have the same frequency, and false otherwise.

var areOccurrencesEqual = function (s) {
  const splittedStr = s.split("");
  const resObj = {};
  let lastVal = 0;
  splittedStr.forEach((element) => {
    if (!resObj[element]) {
      resObj[element] = 1;
    } else {
      resObj[element]++;
    }
    lastVal = resObj[element];
  });

  for (const [key, value] of Object.entries(resObj)) {
    if (value !== lastVal) {
      return false;
    }
  }
  return true;
};

console.log(areOccurrencesEqual("abcdeffedcbacaebdf"));
