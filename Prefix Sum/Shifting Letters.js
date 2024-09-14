var shiftingLetters = function(s, shifts) {
      for(let i = 1; i < shifts.length ; i++){
        shifts[i]+= shifts[i-1]
      }

      let result = '' ;
      for(let i = 0 ; i <s.length ; i++){
        let charCode = s.charCodeAt(i) - 97; 
        let newCharCode;
        if(i === 0){
         newCharCode = (charCode + shifts[shifts.length - 1 ] ) % 26; 
        }
        else{
         newCharCode = (charCode + shifts[shifts.length - 1] - shifts[i-1] ) % 26; 
        }
        result += String.fromCharCode(newCharCode + 97)
      }
      return result
};


// Shifts in reverse order 
var shiftingLetters = function(s, shifts) {
    for (let i = shifts.length - 2; i >= 0; i--) {
        shifts[i] += shifts[i + 1];
    }

    let result = '';
    
    for (let i = 0; i < s.length; i++) {
        let charCode = s.charCodeAt(i) - 97; 
        let newCharCode = (charCode + shifts[i]) % 26; 
        result += String.fromCharCode(newCharCode + 97); 
    }

    return result;
};
