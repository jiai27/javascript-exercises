const sumAll = function(b1, b2) {
    /*
    if (b1 < 0 || b2 < 0 || typeof b1 !== 'number' || typeof b1 !== 'bigint' || typeof b2 !== 'number' || typeof b2 !== 'bigint'){
        return "ERROR"
    }**/

    if (b1 < 0 || b2 < 0){return "ERROR"}
    if (Number.isInteger(b1) != true || Number.isInteger(b2) != true){ return "ERROR"}

    

    let sum = 0;

    if (b1 > b2){
        for (let i=b2; i <= b1; i++){
        sum += i
        //console.log("num: " + i, sum)
    }
    return sum
    }

    for (let i=b1; i <= b2; i++){
        sum += i
        //console.log("num: " + i, sum)
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
