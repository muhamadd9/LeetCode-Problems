var minSwaps = function(s) {
    let imbalance = 0; 
    let maxImbalance = 0;  

    for (let char of s) {
        if (char === '[') {
            imbalance--;  
        } else {
            imbalance++; 
        }
        maxImbalance = Math.max(maxImbalance, imbalance);
    }

    return Math.ceil(maxImbalance / 2);
};
