var swapNodes = function(head, k) {
    let length = 1 ; 
    let temp = head ; 
    while(temp.next != null){
        temp=temp.next ; 
        length++
    }

    let firstNode = head ;
    let secondNode  = head ; 

    for(let i = 1 ; i < k ;i++){
        firstNode = firstNode.next ;
    }

    for(let i = 1 ; i <= length - k  ;i++){
        secondNode = secondNode.next ;
    }

    let tempVal = firstNode.val ;
    firstNode.val = secondNode.val ;
    secondNode.val = tempVal
   
    return head
};
