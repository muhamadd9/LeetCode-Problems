var findGCD = function(nums) {
    function gcd(a,b){
        while(b !== 0){
            let temp = b ; 
            b = a % b ;
            a = temp ;
        }
        return a ;
    }
    
    nums.sort((a,b)=> a - b )
    
    return gcd(nums[0],nums[nums.length - 1])
    };