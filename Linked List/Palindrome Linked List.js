var isPalindrome = function(head) {
    let slow = head , fast = head; 
    // Mid of LL
    while(fast && fast.next){
        slow = slow.next ; 
        fast = fast.next.next ;
    }
    // Reverse Second half  
    let prev = null 
    while(slow){
        let nextNode = slow.next ; 
        slow.next = prev ; 
        prev = slow ; 
        slow = nextNode;  
    }
    let start = head , end = prev  ; 
    while(end) {
        if(start.val !== end.val){
            return false
        }
        start = start.next  ; 
        end = end.next;
    }
    return true ;

};
