var intersection = function(nums1, nums2) {
    let arr1 = Array.from(new Set(nums1)) ;
    let set2 = new Set(nums2)
    return arr1.filter((item)=> set2.has(item))

};
