var sortVowels = function(s) {
    function isVowel(char) {
      let set = new Set(['a', 'e', 'i', 'o', 'u']);
      return set.has(char.toLowerCase());
    }
    let vowels = [];
    let positions = [];
    
    for (let [idx, char] of s.split('').entries()) {
      if (isVowel(char)) {
        vowels.push(char);
        positions.push(idx);
      }
    }
  
    vowels.sort();
  
    let result = s.split('');
    positions.forEach((pos, index) => {
      result[pos] = vowels[index];
    });
  
    return result.join('');
  };
  
  