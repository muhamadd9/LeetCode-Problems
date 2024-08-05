var insertGreatestCommonDivisors = function(head) {
    
    function gcd(a,b){
        while(b !== 0){
            let temp = b ; 
            b = a % b ;
            a = temp 
        }
        return a ;
    }
    let temp = head ;
    while(temp.next != null){
        if(temp.next != null){
            let gcdVal = gcd(temp.val,temp.next.val) 
            let newNode = new ListNode(gcdVal)
            newNode.next = temp.next ;
            temp.next = newNode ; 
        }
        temp = temp.next.next
    }
        return head
    };
    
    