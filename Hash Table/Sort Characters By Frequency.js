var frequencySort = function(s) {
    let map = new Map() 
    for(let char of s){
      map.set(char, (map.get(char) || 0) + 1)
    }
     let sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

    let result = "";
    for (let [char, count] of sortedMap) {
        result += char.repeat(count);
    }

    return result;
};
