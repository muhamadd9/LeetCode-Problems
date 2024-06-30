var finalValueAfterOperations = function(operations) {
    let counter = 0
    for(let i = 0 ; i<operations.length;i++){
      if(operations[i].includes("-")) counter--
      else if(operations[i].includes("+")) counter++
    }
    return counter
};