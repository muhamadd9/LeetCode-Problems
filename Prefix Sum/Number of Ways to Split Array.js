var waysToSplitArray = function(nums) {
    let counter = 0 ; 
    for(let i = 1 ; i < nums.length ;i++){
      nums[i]+= nums[i-1]
    }
    for(let i = 0; i < nums.length - 1; i++){
      if(nums[i] >= nums[nums.length - 1] - nums[i]){
        counter++
      }
    }
    return counter
};
