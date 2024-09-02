avar flipAndInvertImage = function(image) {
    return image.map((row)=>row.reverse().map((item)=>item == 0 ? 1 : 0))
};
