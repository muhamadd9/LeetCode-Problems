var mergeNodes = function(head) {
    let dummy = new ListNode(0) 
    let current = dummy
    let sum = 0;
    let temp = head.next;
  
    while(temp != null ){
      if(temp.val != 0){
          sum+= temp.val ; 
      }
      else{
          current.next = new ListNode(sum);
           current = current.next; 
           sum = 0; 
      }
      temp = temp.next
    }
    return dummy.next
  };