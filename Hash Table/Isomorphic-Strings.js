var isIsomorphic = function (s, t) {
  if (new Set(s).size !== new Set(t).size || s.length !== t.length) {
    return false;
  }

  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      if (map.get(s[i]) !== t[i]) return false;
    } else {
      map.set(s[i], t[i]);
    }
  }

  return true;
};
