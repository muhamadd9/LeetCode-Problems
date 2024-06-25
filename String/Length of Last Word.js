var lengthOfLastWord = function(s) {
    let words = s.split(" ").filter((item)=>item.length>0)
    return words[words.length -1 ].length
};