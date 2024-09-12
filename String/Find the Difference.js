var findTheDifference = function(s, t) {
  let string1 = s.split("")
  let string2 = t.split("")
  string1.sort()
  string2.sort() 
    for(let i = 0 ; i < string2.length;i++){
      if(string1[i] !== string2[i]){
        return string2[i]
      }
    }
    return ""
};
