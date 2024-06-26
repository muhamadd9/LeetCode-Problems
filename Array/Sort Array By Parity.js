var sortArrayByParity = function(nums) {
    if(nums.length <=1) return nums
    let evenNumbers = nums.filter((item)=>item % 2 === 0)
    let oddNumbers = nums.filter((item)=>item % 2 !== 0)
    return evenNumbers.concat(oddNumbers)
};

// Another Solution 

var sortArrayByParity = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
      if (nums[left] % 2 > nums[right] % 2) {
  
        [nums[left], nums[right]] = [nums[right], nums[left]];
      }
      if (nums[left] % 2 === 0) {
        left++;
      }
      if (nums[right] % 2 !== 0) {
        right--;
      }
    }
    
    return nums;
  };
  