var findMedianSortedArrays = function(nums1, nums2) {
    let nums = nums1.concat(nums2).sort((a,b)=>a-b)
    let length = nums.length ;
    let middle = Math.floor(length / 2)
    if(length % 2 == 0){
        return (nums[middle - 1] + nums [middle]) /2
    }   
    else{
        return nums[middle]
    } 
};
