var buildArray = function(nums) {
    let newArr = []
    for(let i = 0 ; i<nums.length;i++){
      newArr.push(nums[nums[i]])
    }
    return newArr
};