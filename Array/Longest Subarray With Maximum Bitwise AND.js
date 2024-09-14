var longestSubarray = function(nums) {
    let currentLength = 0 , maxLength = 0 ;
    let maxNumber = Math.max(...nums) ;

    for(let num of nums){
        if(num === maxNumber){
            currentLength++ ;
            maxLength = Math.max(currentLength , maxLength)
        }
        else{
            currentLength = 0 ;
        }
    }
    return maxLength     
};
