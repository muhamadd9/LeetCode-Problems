var uncommonFromSentences = function(s1, s2) {
    let arr = s1.split(" ").concat(s2.split(" "));
    let map = new Map();
    let arrOfWords = []
    for (let word of arr) {
        map.set(word, (map.get(word) || 0) + 1);
    }
    for(let [word,count] of map){
      if(count === 1 ){
        arrOfWords.push(word)
      }
    }
    return arrOfWords;
};
