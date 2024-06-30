var smallerNumbersThanCurrent = function(nums) {
    let newArr = []
    for(let i = 0 ; i<nums.length;i++){
      let counter = 0 ;
      for(let j = 0 ;j<nums.length;j++){
        if(nums[j] < nums[i]) counter++
      }
      newArr.push(counter)
    }
    return newArr
};

// Another Solution 

var smallerNumbersThanCurrent = function(nums) {
    let map = new Map()
    let sortedArr = [...nums].sort((a,b)=>a-b)
    for(let i = 0 ;i<sortedArr.length;i++){
      if(!map.has(sortedArr[i])){
        map.set(sortedArr[i],i)
      }
    }
    return nums.map((item)=> map.get(item))
};
