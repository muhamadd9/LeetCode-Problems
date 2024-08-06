var defangIPaddr = function(address) {
    let splitted =  address.split(".")
    for(let i = 0;i<splitted.length -1 ;i++ ){
      splitted[i]+= '[.]'
    }
    return splitted.join("")
};
