var middleNode = function(head) {
    let count = 0 ;
    let temp = head
    while(temp != null){
      count++;
      temp = temp.next
    } 
    temp = head
    for(let i = 0 ; i < Math.floor(count/2) ;i++ ){
      temp = temp.next; 
    }
    return temp
};

// Another Solution using 2 pointers 

var middleNode = function(head) {
    let slow = head; 
    let fast = head; 
    while(fast !== null && fast.next !== null){
      slow = slow.next; 
      fast = fast.next.next ;
    }  
    return slow
};