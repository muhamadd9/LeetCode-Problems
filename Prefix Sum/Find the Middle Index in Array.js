var findMiddleIndex = function(nums) {
    if (nums.length === 1) return 0; 

    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1];
    }

    for (let i = 0; i < nums.length; i++) {
        // This check for handle the i = 0 case 
        let leftSum = i > 0 ? nums[i - 1] : 0;  
        let rightSum = nums[nums.length - 1] - nums[i];  
        
        if (leftSum === rightSum) {
            return i;
        }
    }

    return -1;  
};
