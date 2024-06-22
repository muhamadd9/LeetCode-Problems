var longestCommonPrefix = function(strs) {
    strs.sort((a,b)=>a.length - b.length)
    let minLength = strs[0].length
    
    for(let i = minLength ; i >0 ;i-- ){
       let commonPerifix = strs[0].slice(0,i)
       
       if(strs.map((item)=>item.slice(0,i) == commonPerifix).includes(false) !== true){
           return commonPerifix
       }
    }
    return ""
};
