var isSubsequence = function (s, t) {
  for (let i = 0; i < s.length; i++) {
    const idx = t.split("").indexOf(s[i]);
    console.log(idx, t);

    if (idx === -1) return false;
    t = t.slice(idx + 1);
  }
  return true;
};

console.log(isSubsequence("bb", "ahbgdc"));
