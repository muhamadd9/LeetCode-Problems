var countConsistentStrings = function(allowed, words) {
    let count = 0 ;
    let set = new Set(allowed.split("")) 
    for(let i = 0 ; i < words.length ; i++){
      let wordSet = new Set(words[i].split(""))
      let flag = true ;
      for(let char of wordSet){
        if(!set.has(char)){
           flag = false;
           break ;
        }
      }
      if(flag) count++

    }
    return count
};
