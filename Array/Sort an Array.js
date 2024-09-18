// Using Alogrithm O(Nlogn) i used merge sort 

function merge(arr1,arr2){
  let combined = [] ;
  let i = 0 ; j = 0 ;
  while(i < arr1.length && j < arr2.length){
    if(arr1[i] < arr2[j]){
      combined.push(arr1[i]);
      i++
    }
    else{
      combined.push(arr2[j]);
      j++
    }
  }
  while(i < arr1.length){
    combined.push(arr1[i]);
    i++
  }
  while(j < arr2.length){
    combined.push(arr2[j]);
    j++
  }
  return combined
}

var sortArray = function(arr) {
    if(arr.length === 1) return arr 

  let mid = Math.floor(arr.length / 2)
  let left = arr.slice(0,mid)
  let right = arr.slice(mid)

  return merge(sortArray(left) , sortArray(right))
};
