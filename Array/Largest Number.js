function largestNumber(nums) {
    let numsStr = nums.map(num => num.toString());
    numsStr.sort((a, b) => (b + a).localeCompare(a + b));
    let result = numsStr.join('');
    return result[0] == '0' ? '0' : result
}
