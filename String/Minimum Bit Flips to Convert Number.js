var minBitFlips = function(start, goal) {
    let counter = 0 ;
    let startBinary = start.toString("2")
    let goalBinary = goal.toString("2")
    let length = Math.max(startBinary.length,goalBinary.length)

    let startItem = startBinary.padStart(length,0)
    let goalItem = goalBinary.padStart(length,0)

    for(let i = 0 ; i < length ; i++){
        if(startItem[i] !== goalItem[i]) counter++
    }
    return counter
}
