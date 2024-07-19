var findThePrefixCommonArray = function(A, B) {
    let prefixCommonArray = []
    for(let i = 1 ;i<=A.length;i++){
      let newArr = []
      for(let j = 0;j<i;j++){
      newArr.push(A[j])
      newArr.push(B[j])
     }
     let setOfNewArr = new Set(newArr)
      prefixCommonArray.push(newArr.length - setOfNewArr.size )
    }
    return prefixCommonArray
};
