const leapYears = function(year) {
    // leap: divisible by 4, divisible by 100 or divisible by 400
    // not leap: divisible by 100

    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)){return true}
    return false

};

// Do not edit below this line
module.exports = leapYears;
