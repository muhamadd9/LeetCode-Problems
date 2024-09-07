var reverseVowels = function(s) {
   const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
   let arrOfVowels = []
   for(let i = 0 ; i < s.length;  i++){
    if(vowels.includes(s[i])){
      arrOfVowels.push(s[i])
    }
   }
   arrOfVowels.reverse()
    let newString = ''
    let vowelIndex = 0;
    for(let i = 0 ; i < s.length;  i++){
    if(vowels.includes(s[i])){
      newString += arrOfVowels[vowelIndex];
      vowelIndex++
    }
    else{
      newString += s[i]
    }
   }
   
   return newString ;
};
