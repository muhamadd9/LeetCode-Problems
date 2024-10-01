function canArrange(arr, k) {
    let remainderCount = new Array(k).fill(0);

    // Calculate remainders and update counts
    for (let num of arr) {
        let remainder = num % k;
        if (remainder < 0) remainder += k; 
        remainderCount[remainder]++;
    }

    //remainder 0 (these must pair with each other)
    if (remainderCount[0] % 2 !== 0) return false;

    // Check remainders from 1 to k/2
    for (let i = 1; i < k; i++) {
        if (remainderCount[i] !== remainderCount[k - i]) {
            return false;
        }
    }

    return true;
}
