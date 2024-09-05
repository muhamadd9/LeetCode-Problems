var rotateRight = function(head, k) {
    if(!head || !head.next || k === 0) return head ; 

    // For Optimizing number of iterations
    let length = 1; 
    let tail = head;
    while (tail.next !== null) {
        tail = tail.next;
        length++;
    }
    k = k % length;
    if (k === 0) return head; 

    for (let i = 0 ; i < k ; i++){
        let temp = head ; 
        let prev = null ; 
        while(temp.next !== null){
            prev = temp
            temp = temp.next;
        }

       prev.next = null ; 
       temp.next = head ; 
       head = temp ;
    }

    return head 
};
