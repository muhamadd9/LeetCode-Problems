var xorQueries = function(arr, queries) {
    for(let i = 1 ; i < arr.length ; i++){
      arr[i] ^= arr[i-1]
    }
    let nums = [] ;
    for(let i = 0 ; i < queries.length; i++){
      let left = queries[i][0] ;
      let right = queries[i][1] ;
      if(left === 0) nums.push(arr[right])
      else{
        nums.push(arr[right] ^ arr[left - 1])
      }
    }
    
    return nums ;
};