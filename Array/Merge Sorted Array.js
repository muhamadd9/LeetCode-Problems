var merge = function(nums1, m, nums2, n) {
    for(let i = m ; i < m + n ; i++){
        nums1[i] = nums2[i-m] ; 
    }  
    nums1.sort((a,b)=>a-b) ;
    return nums1   
};
