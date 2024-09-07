var reverseString = function(s) {
    s = s.reverse() ;
    return s; 
};

// Solution using 2 pointers ;

var reverseString = function(s) {
    let start = 0 ; 
    let end = s.length - 1 ;
    while(start < end ){
        [s[start],s[end]] = [s[end],s[start]]
        start++ ; 
        end-- ;
    }

    return s ;
};
