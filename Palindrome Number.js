/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const stringOfX = x.toString()
    return stringOfX.split("").reverse().join("") === stringOfX
};