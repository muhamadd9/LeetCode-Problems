var isPalindrome = function(s) {
     let newString =  s.toLowerCase().split('').filter(char => (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')).join('') ;
     for(let i = 0 ; i < s.length / 2; i++){
       if(newString[i] !== newString[newString.length - 1 - i]){
        return false
       }
     }

     return true 
};
