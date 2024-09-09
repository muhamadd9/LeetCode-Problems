var twoSum = function(numbers, target) {
    let start = 0 , end = numbers.length - 1 ; 
    
    while(start < end){
        let sum = numbers[start] + numbers[end] ;

        if(sum === target){
            return [start + 1 , end + 1]
        }
        else if(target > sum){
            start++
        }
        else{
            end--
        }
    }

    return [] ; 
};
