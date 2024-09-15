var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        // If mid element is greater than the rightmost element, the minimum is in the right half
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        }
        // If mid element is less than the rightmost element, the minimum is in the left half
        else if (nums[mid] < nums[right]) {
            right = mid;
        }
        // If nums[mid] is equal to nums[right], we cannot determine the sorted part,
        // so we reduce the search space from the right side by moving 'right' inward
        else {
            right--;
        }
    }

    return nums[left];  // 'left' will point to the minimum element
};
