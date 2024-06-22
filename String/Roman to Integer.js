/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let sum = 0 ;
    let nxt ;
    const romanArr = {
      "I" : 1,
      "V" : 5,
      "X" : 10,
      "L" : 50,
      "C" : 100,
      "D" : 500,
      "M" : 1000,
    }
    for(let i = 0 ; i<s.length;i++){
      nxt = s[i + 1] || null
      const curr = s[i]
      if(romanArr[nxt] > romanArr[curr]){
        sum -= romanArr[curr]
        continue
      }
      sum+= romanArr[curr]
    }
    return sum 
};