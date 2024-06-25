var shuffle = function(nums, n) {
    let shuffeldArr = []
    for(let i = 0 ;i < n ;i++){
      shuffeldArr.push(nums[i])
      shuffeldArr.push(nums[i+n])
    }
    return shuffeldArr
};