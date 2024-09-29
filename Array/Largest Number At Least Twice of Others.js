var dominantIndex = function(nums) {
    let sortedArr = [...nums].sort((a,b)=> a - b)
    if(sortedArr[sortedArr.length - 1] < (sortedArr[sortedArr.length - 2]*2)) return -1
    
    return nums.indexOf(sortedArr[sortedArr.length-1])
};
