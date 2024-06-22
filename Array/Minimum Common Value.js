/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let set1 = new Set(nums1)
     for(let num of nums2){
        if(set1.has(num)){
            return num 
        }
     }
       return -1
  };