var removeElements = function(head, val) {
   let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;  
    let temp = head; 

    while(temp !== null){
        if(temp.val === val){
            prev.next = temp.next ; 
        } else{
        prev = prev.next; 
        }
        temp = temp.next ; 
    }  

    return dummy.next ;  
};
