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


// Another Solution using 2 pointers ;

var reverseOnlyLetters = function(s) {
    function isLetter(char){
      return ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z'))
    }
    let start = 0 ; 
    let end = s.length - 1 ; 
    let arr = s.split("")
    while(start <= end){
      if(isLetter(arr[start]) && isLetter(arr[end])){
        let temp = arr[start] ; 
        arr[start] = arr[end] ; 
        arr[end] = temp ; 
        start++ ;
        end-- ;
      }
      else{
        if(!isLetter(arr[start])){
          start++
        }
        else if(!isLetter(arr[end])){
          end--
        }
        else{
          start++ ; 
          end-- ;
        }
      }
    }

    return arr.join("")
};
