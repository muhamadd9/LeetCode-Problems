var findDifference = function(nums1, nums2) {
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)
    let arr1 = [...set1].filter((item)=> !set2.has(item))
    let arr2 = [...set2].filter((item)=> !set1.has(item))
    return [arr1,arr2]
};