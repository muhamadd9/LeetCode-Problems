var modifiedList = function(nums, head) {
    if (head === null) return null;
    let set = new Set(nums)
    while (head !== null && set.has(head.val)) {
        head = head.next;
    }
    let prev = head ; 
    let current = head.next ; 
    while(current != null){
        
        if(set.has(current.val)){
          prev.next = current.next 
        }
        else{
            prev=current
        }
        current = current.next
    }

    return head
};
