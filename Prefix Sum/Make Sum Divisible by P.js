var minSubarray = function(nums, p) {
    const totalSum = nums.reduce((sum, num) => sum + num, 0) % p;
    if (totalSum === 0) return 0; // If total sum is divisible by p, no need to remove any subarray

    const remainderMap = new Map();
    remainderMap.set(0, -1); // Base case: remainder 0 at index -1
    let prefixSum = 0;
    let minLength = nums.length;

    for (let i = 0; i < nums.length; i++) {
        prefixSum = (prefixSum + nums[i]) % p;
        const target = (prefixSum - totalSum + p) % p;

        if (remainderMap.has(target)) {
            minLength = Math.min(minLength, i - remainderMap.get(target));
        }

        // Update the map with the current prefix sum
        remainderMap.set(prefixSum, i);
    }

    return minLength === nums.length ? -1 : minLength;
};
