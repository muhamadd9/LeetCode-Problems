var searchMatrix = function(matrix, target) {
    let start = 0 , end = matrix.length - 1 ;
    while(start <= end){
      let mid = Math.floor((start + end) / 2); 
       if(target >= matrix[mid][0] && target <= matrix[mid][matrix[mid].length - 1]){
          let arr = matrix[mid] ;
          let rowStart = 0, rowEnd = matrix[mid].length - 1;
          while(rowStart <= rowEnd){
             let rowMid = Math.floor((rowStart + rowEnd) / 2);
            if(arr[rowMid] === target){
              return true
            }
            else if(arr[rowMid] < target){
              rowStart = rowMid + 1 ;
            }
            else{
              rowEnd = rowMid - 1 ;
            }
          }
          return false
       }
       else if(target > matrix[mid][matrix[mid].length - 1]){
        start = mid + 1 ;
       }
       else{
         end = mid - 1; 
       }
    }

    return false
};
