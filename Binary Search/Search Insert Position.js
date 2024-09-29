var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // If the target is found, return the index
        if (nums[mid] === target) {
            return mid;
        }
        
        // If the target is greater, ignore the left half
        if (nums[mid] < target) {
            left = mid + 1;
        } 
        // If the target is smaller, ignore the right half
        else {
            right = mid - 1;
        }
    }
    // If target is not found, return the position where it would be inserted
    return left;
};
