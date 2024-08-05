var mergeInBetween = function(list1, a, b, list2) {
    let temp = list1 ;
    const numbersOfRemoval = Math.abs(a-b)
    let counter = 0
    while(temp !== null){
       if(counter == a){
        for(let i = 0 ; i<=numbersOfRemoval;i++){
            temp.val = temp.next.val ; 
            temp.next = temp.next.next
        }
       }
       counter++ ;
       temp = temp.next
    }
    temp = list1 ;
    counter = 0
    while(temp !== null){
        if(counter == a - 1){
            let item = temp.next
            temp.next = list2 ;
            while(temp.next != null){
                 temp = temp.next ;
            }
            temp.next = item
        }
        counter++ ;
        temp = temp.next
    }
    return list1
};