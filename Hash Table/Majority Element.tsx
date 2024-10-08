function majorityElement(nums: number[]): number {
    let map = new Map()
    for(let num of nums){
      map.get(num) ? map.set(num,map.get(num) + 1) : map.set(num,1)
    }
    let halfLen = nums.length / 2 ;
    for(let [key,val] of map){
      if(val > halfLen) return key
    }
};
