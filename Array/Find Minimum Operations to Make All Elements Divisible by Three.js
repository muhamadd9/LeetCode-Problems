var minimumOperations = function(nums) {
    let counter = 0 ;
    for(let i = 0 ;i<nums.length;i++){
      if(nums[i]%3 !==0) counter++
    }
    return counter
};