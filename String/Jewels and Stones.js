var numJewelsInStones = function(jewels, stones) {
    let counter = 0 ; 
    let set = new Set(jewels)
    for(let stone of stones){
     if(set.has(stone)) counter++
    }
    return counter
 };
 