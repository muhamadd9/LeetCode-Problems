var getDecimalValue = function(head) {
    let num = "" ; 
    let temp = head; 
    while(temp != null){
      num += temp.val ;
      temp = temp.next
    }
    return parseInt(num, 2);
};