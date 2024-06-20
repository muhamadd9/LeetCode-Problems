/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const obj = {
      "{" : "}",
      "(" : ")",
      "[" : "]"
    }
    let stack =[] ;
    for(let i = 0 ;i<s.length;i++){
      let cur = s[i];
      if(obj[cur]){
        stack.push(obj[cur])
      }
      else if(stack.pop() !== cur){
        return false
      }
    }
    return stack.length ===0
};