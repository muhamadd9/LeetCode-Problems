var minSteps = function(s, t) {
    let sFreq = new Array(26).fill(0)
    let tFreq = new Array(26).fill(0)
  
    const charIndex = char => char.charCodeAt(0) - 'a'.charCodeAt(0);
  
    for(let i = 0 ; i<s.length;i++){
     sFreq[charIndex(s[i])]++
    }
    for(let i = 0 ; i<t.length;i++){
     tFreq[charIndex(t[i])]++
    }
  
     let steps = 0;
      
      for (let i = 0; i < 26; i++) {
          if (tFreq[i] > sFreq[i]) {
              steps += tFreq[i] - sFreq[i];
          }
      }
      return steps;
  }