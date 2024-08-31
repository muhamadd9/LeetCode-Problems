var minimumAverage = function(nums) {
   let smallestAvg = Infinity ;
    nums.sort((a,b) => a-b)
    while(nums.length > 0){
      let smallest = nums[0] ; 
      let largest = nums[nums.length-1]; 
      let average = (smallest+largest) / 2; 
      if(average < smallestAvg){
        smallestAvg = average
      }
      nums.splice(0,1)
      nums.splice(nums.length - 1 , 1 )
    }
    return smallestAvg
};
