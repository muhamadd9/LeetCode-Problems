var frequencySort = function(nums) {
    const frequencyMap = new Map();
    nums.forEach(num => {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    });

    nums.sort((a, b) => {
        const freqA = frequencyMap.get(a);
        const freqB = frequencyMap.get(b);

        if (freqA === freqB) {
            return b - a;
        }
        return freqA - freqB;
    });

    return nums;
};
