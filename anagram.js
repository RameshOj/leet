// Function to check if two input strings are anagram to each other or not.
// Anagram is a word or phrase that is made by arranging the letters of another word or phrase in a different order.
// CAT, TAC and ATC are anagrams of each other.
// INPUT => "anagram", "nagaram"
// OUTPUT => true

var isAnagram = function (s, t) {
  // if length of both strings a re different, they are not anagram.
  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    // if second string doesn't contain's character of first string then it's not anagram.
    if (!t.includes(s[i])) {
      return false;
    } else {
      // Now remove that iterated character from second string so no repetition.
      const firstIdx = t.indexOf(s[i]);
      t = t.slice(0, firstIdx) + t.slice(firstIdx + 1);
    }
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram"));
