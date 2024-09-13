var intersect = function(nums1, nums2) {
    let map = new Map() ;
    for(let num of nums1 ){
         map.set(num, (map.get(num) || 0) + 1);
    }
    let arr = []
    for(let num of nums2){
        if(map.get(num) > 0){
            arr.push(num) ;
            map.set(num , map.get(num) - 1)
        }
    }
    return arr ; 
};
