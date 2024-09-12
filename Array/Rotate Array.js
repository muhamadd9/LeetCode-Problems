var rotate = function(nums, k) {
    const n = nums.length;
    k = k % n; 
    if (k === 0) return; 

    function reverse(start, end) {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }

    // Reverse the entire array
    reverse(0, n - 1);
    // Reverse the first k elements
    reverse(0, k - 1);
    // Reverse the remaining elements
    reverse(k, n - 1);
};
