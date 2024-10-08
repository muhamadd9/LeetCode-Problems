function minSwaps(s: string): number {
    let imbalance: number = 0;  
    let maxImbalance: number = 0;
    
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
