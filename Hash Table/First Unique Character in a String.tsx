function firstUniqChar(s: string): number {
    let map = new Map()
    for(let char of s){
      map.get(char) ? map.set(char,map.get(char) + 1) : map.set(char,1)
    }
    for(let [key,val] of map){
      if(val === 1) return s.indexOf(key)
    }
    return -1
};
