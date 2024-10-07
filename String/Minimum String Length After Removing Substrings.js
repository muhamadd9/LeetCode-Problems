var minLength = function(s) {
  while (s.includes("AB") || s.includes("CD")) {
    s = s.split("AB").join("").split("CD").join("");
  }
  return s.length;
};
