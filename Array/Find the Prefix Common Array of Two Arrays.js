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


// Another Solution 

var findThePrefixCommonArray = function(A, B) {
    let prefixCommonArray = [];
    let setA = new Set();
    let setB = new Set();
    let commonCount = 0;

    for (let i = 0; i < A.length; i++) {
        setA.add(A[i]);
        setB.add(B[i]);

        if (setB.has(A[i])) commonCount++;
        if (setA.has(B[i])) commonCount++;
        prefixCommonArray.push(commonCount);
    }
    return prefixCommonArray;
};
console.log(findThePrefixCommonArray([1,3,2,4],[3,1,2,4]))