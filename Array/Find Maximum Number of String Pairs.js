var maximumNumberOfStringPairs = function(words) {
    let counter = 0 ;
    for(let i = 0 ; i < words.length - 1;i++){
       for(let j = i+1 ; j < words.length ; j++){
         if(words[i].split("").reverse("").join("") === words[j]) counter++
       }
    }
    return counter
};