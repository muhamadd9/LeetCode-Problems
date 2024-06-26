var findArray = function(pref) {
    if(pref.length <=1) return pref
    let newArr = []
    for(let i = 0 ;i<pref.length - 1;i++){
      if(i == 0) newArr.push(pref[i])
      newArr.push(pref[i] ^ pref[i+1])
    }
    return newArr
};