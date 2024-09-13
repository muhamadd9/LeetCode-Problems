var xorQueries = function(arr, queries) {
    let nums = []
    for(let i = 0 ; i < queries.length; i++){
      let num ;
      for(let j = queries[i][0] ; j <= queries[i][1] ; j++ ){
        num ^= arr[j]
      }
      nums.push(num)
    }
    return nums ;
};
