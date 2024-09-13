var getIntersectionNode = function(headA, headB) {
    function getLength(head){
        let length = 0 ; 
        while(head){
            length++; 
            head = head.next ;
        }
        return length ; 
    }
    let lengthA = getLength(headA); 
    let lengthB = getLength(headB);

    while(lengthA > lengthB ){
        headA = headA.next
        lengthA--
    }

    while(lengthB > lengthA ){
        headB = headB.next
        lengthB--
    }
    while(headA !== headB){
        headA = headA.next ;
        headB = headB.next;
    }
    return headA ;
};
