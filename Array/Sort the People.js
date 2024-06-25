var sortPeople = function(names, heights) {
    let people =  names.map((name,idx)=> ({name,height:heights[idx]}))
    people.sort((a,b)=>b.height-a.height)
    return people.map((item)=>item.name)
};
