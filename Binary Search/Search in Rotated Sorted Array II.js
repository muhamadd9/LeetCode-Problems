var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return true;

        // If the left, middle, and right elements are the same, skip duplicates
        if (nums[left] === nums[mid] && nums[right] === nums[mid]) {
            left++;
            right--;
        }
        // If the left part is sorted
        else if (nums[left] <= nums[mid]) {
            // Check if the target is in the left part
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        // If the right part is sorted
        else {
            // Check if the target is in the right part
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return false; 
};
