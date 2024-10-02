var arrayRankTransform = function(arr) {
    let sortedArr = [...arr].sort((a,b) => a - b) ; 
    let map = new Map()
    let count = 1 ;
    for(let item of sortedArr){
      if(!map.has(item)){
        map.set(item,count)
        count++
      }
    }
    return arr.map(item => map.get(item))
};
