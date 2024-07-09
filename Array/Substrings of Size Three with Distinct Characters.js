var countGoodSubstrings = function(s) {
    let charSet = new Set();
    let count = 0;

    for (let i = 0; i <= s.length - 3; i++) {
        charSet.clear();
        charSet.add(s[i]);
        charSet.add(s[i + 1]);
        charSet.add(s[i + 2]);
        if (charSet.size === 3) count++
    }

    return count;
};

