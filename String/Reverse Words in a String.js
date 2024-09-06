var reverseWords = function(s) {
    return s.trim().split(/\s+/).map((item)=>item).reverse("").join(" ")
};

// split(/\s+/) means Splits the string at every sequence of one or more whitespace characters.
