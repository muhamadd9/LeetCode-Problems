/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false
    const stringOfX = x.toString()
    return stringOfX.split("").reverse().join("") === stringOfX
};