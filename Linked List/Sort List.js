var sortList = function(head) {
    let arr = [];
    let temp = head ;  
    while(temp != null){
        arr.push(temp.val); 
        temp = temp.next
    }
    arr.sort((a,b)=>a-b) ;
     temp = head; 
    for (let i = 0; i < arr.length; i++) {
        temp.val = arr[i]; 
        temp = temp.next;
    }

    return head ;
};
