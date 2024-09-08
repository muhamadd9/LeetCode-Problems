var searchRange = function(nums, target) {
    let start = 0 , end = nums.length - 1 ;
    let firstRange = -1 , secondRange = -1 ;
    
    while(end >= start){
      let mid = Math.floor((start + end) / 2); 
     if (nums[mid] === target) {
            firstRange = mid;
            end = mid - 1;
     }     
      else if(target > nums[mid]){
        start = mid + 1 ;
      }
      else{
        end = mid -1 
      }
    }

    start = 0;
    end = nums.length - 1;

    while (end >= start) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) {
            secondRange = mid;
            start = mid + 1; 
        } else if (target > nums[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return [firstRange,secondRange]
    
};