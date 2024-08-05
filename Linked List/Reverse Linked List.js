var reverseList = function(head) {
    if (head === null) return null; 
    let length = 1;
    let tail = head;
    // TO ACCES THE TAIL AND THE LENGTH
    while (tail.next !== null) {
        tail = tail.next;
        length++;
    } 
    // REVERSE THE LINKED LIST
    let temp = head ;
    head = tail ;
    tail = temp ;
    let prev = null ; 
    let next = temp.next; 

    for(let i = 0 ;i < length ;i++){
        next = temp.next ;
        temp.next = prev ;
        prev = temp ; 
        temp = next 
    }
    return head
};
