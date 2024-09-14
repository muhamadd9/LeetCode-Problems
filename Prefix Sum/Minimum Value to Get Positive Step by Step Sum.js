var minStartValue = function(nums) {
    let index = 1 ;
    while(index){
     let arr =[...nums]
     arr.unshift(index); 
     for(let i = 1 ; i < arr.length;i++ ){
      arr[i]+=arr[i-1]
     }
     
     if(arr.some(num => num <= 0)){
      index++
     }
     else{
      return index
     }
    }
};
