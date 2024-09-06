var detectCycle = function(head) {
    if (head === null || head.next === null) return null;

    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next; 
        fast = fast.next.next;   
        
        if (slow === fast) { 
            // To make sure that they will meet at the start of the circile
            let pointer = head ; 
            while(pointer != slow){
                pointer = pointer.next ; 
                slow = slow.next ;
            }
            return pointer
        }
    }

    return null;
};
