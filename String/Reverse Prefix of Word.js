var reversePrefix = function(word, ch) {
    let indexOfch = word.indexOf(ch)
    if(indexOfch === -1 ) return word

    let left = word.slice(0,indexOfch+1).split("").reverse("").join("")
    let right = word.slice(indexOfch+1)

    return left + right
};
