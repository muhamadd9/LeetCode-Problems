var numIdenticalPairs = function(nums) {
    let counter = 0
      for(let i = 0 ; i<nums.length;i++){
        for(let j = i+1;j<nums.length;j++){
          if(nums[i] === nums[j]) counter++
        }
      }
      return counter
};

// Solution using HashMap

var numIdenticalPairs = function(nums) {
    let counter = 0
    let numsObj = {}
     for(let num of nums){
      if(numsObj[num]){
        counter+= numsObj[num]
        numsObj[num]++;
      }
      else{
        numsObj[num] = 1
      }
     }
      return counter
};