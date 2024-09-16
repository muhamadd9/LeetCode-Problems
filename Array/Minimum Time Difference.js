var findMinDifference = function(timePoints) {
    const minutes = timePoints.map(time => {
        const [hours, mins] = time.split(":").map(Number);
        return hours * 60 + mins;
    });
    
    // Sort the times in ascending order
    minutes.sort((a, b) => a - b);
    
    // (maximum is 1440 which is 24H * 60M)
    let minDiff = 1440;
    
    // Compare consecutive time differences
    for (let i = 1; i < minutes.length; i++) {
        minDiff = Math.min(minDiff, minutes[i] - minutes[i - 1]);
    }

    // Handle the last case 
    minDiff = Math.min(minDiff, 1440 + minutes[0] - minutes[minutes.length - 1]);

    return minDiff;
};
