var hasCycle = function(head) {
    let fast = head , slow = head ;
    while(fast != null && fast.next != null){
        slow = slow.next ;
        fast = fast.next.next ;
        if(slow == fast) return true ;
    }
    return false
    
}
