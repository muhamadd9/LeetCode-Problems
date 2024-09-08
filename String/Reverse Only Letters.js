var reverseOnlyLetters = function(s) {
    function isLetter(char){
      return ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z'))
    }

    let letters = [] ;
    for(let item in s){
      if(isLetter(s[item])) letters.push(s[item])
    }

    letters.reverse()
    let reversedLetter =''
    let index = 0
     for(let item in s){
       if(isLetter(s[item])){
        reversedLetter += letters[index];
        index++
       }
       else{
        reversedLetter += s[item]
       }
    }
    return reversedLetter
};
