var uniqueOccurrences = function(arr) {
    let map = new Map();
    for(let item of arr){
    if(map.has(item)) map.set(item , map.get(item) + 1)
    else{
        map.set(item,1)}
    }
    let arrOfOcc = Array.from(map.values())
    let set = new Set(arrOfOcc)

    return arrOfOcc.length === set.size
};