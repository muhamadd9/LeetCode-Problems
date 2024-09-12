var maxOperations = function(nums, k) {
    nums.sort((a,b)=>a-b)
    let count = 0 ;
    let start = 0 ; 
    let end =  nums.length - 1 ; 
    while(start < end){
       if(nums[start] + nums[end] === k){
        start++ ;
        end-- 
        count++ ;
       }
       else if(nums[start] + nums[end] < k){
        start++
       }else{
        end--
       }
    }
    return count
};
