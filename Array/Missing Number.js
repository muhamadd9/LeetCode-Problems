var missingNumber = function(nums) {
    nums.sort((a,b)=>a-b) ;
    for(let i = 0 ; i < nums[nums.length - 1] ; i++){
        if(nums[i] !== i) return i 
    }
    return nums[nums.length - 1] + 1
};
