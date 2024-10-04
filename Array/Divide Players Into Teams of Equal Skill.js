var dividePlayers = function(skill) {
    let sortedArr = skill.sort((a, b) => a - b); 
    let left = 0, right = skill.length - 1; 
    let prevSum = sortedArr[left] + sortedArr[right];  
    let totalSum = 0;
    
    while (left < right) {
        let sum = sortedArr[left] + sortedArr[right];
        if (sum !== prevSum) return -1;
        totalSum += sortedArr[left] * sortedArr[right]; 
        left++;
        right--;
    }
    
    return totalSum;
};
