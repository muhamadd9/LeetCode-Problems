var kthDistinct = function(arr, k) {
    const map = new Map(); 
    for(const char of arr){
      map.set(char , (map.get(char) || 0) + 1 )
    }

    let distinctArr = []

    for(const item of arr){
      if(map.get(item) === 1){
        distinctArr.push(item)
      }
    }

    if(k <= distinctArr.length){
      return distinctArr[k-1]
    }else{
      return ""
    }
};
