var addTwoNumbers = function(l1, l2) {
    let carry = 0 ; 
    let dummy = new ListNode(0) ;
    let temp = dummy ;

    while(l1 != null || l2 != null || carry != 0){
        let sum = 0 ;
        sum += carry ;

        if(l1 != null){
            sum += l1.val ;
            l1 = l1.next ;
        }

        if(l2 != null){
            sum += l2.val ;
            l2 = l2.next ;
        }

        carry = Math.floor(sum / 10) ;
        temp.next = new ListNode(sum % 10);
        temp = temp.next
    }

    return dummy.next
};
