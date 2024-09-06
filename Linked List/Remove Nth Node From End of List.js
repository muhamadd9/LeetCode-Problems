var removeNthFromEnd = function(head, n) {
    let length = 1 ;
    let temp = head ;  
    while(temp.next != null){
        temp = temp.next;  
        length++ ;
    }

     if (n === length) {
        return head.next;
    }

    temp = head ; 
    let prev = null ; 
    for(let i = 0 ; i < length - n ; i++){
        prev = temp ;
        temp = temp.next ;
    }
    prev.next = temp.next ; 

    return head
};
