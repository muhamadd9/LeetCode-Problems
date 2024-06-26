var restoreString = function(s, indices) {
    let newWord = new Array(s.length)
    for(let i =0;i<indices.length;i++){
      newWord[indices[i]] = s[i]
    }
    return newWord.join("")
};
