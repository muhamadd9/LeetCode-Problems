var firstPalindrome = function(words) {
    var palindrome = function(word) {
        for (let i = 0; i < word.length / 2; i++) {
            if (word[i] !== word[word.length - 1 - i]) {
                return false
            }
        }
        return true; 
    };
    for (let i = 0; i < words.length; i++) {
        if (palindrome(words[i])) {
            return words[i]; 
        }
    }
    return "" ;
};
