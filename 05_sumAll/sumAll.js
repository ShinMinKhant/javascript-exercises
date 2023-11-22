const sumAll = function(firstNum, secNum) {
    let output = 0;
    if (firstNum < secNum && (firstNum > 0 && secNum > 0) && (typeof firstNum === 'number' && typeof secNum === 'number')) {
        for (i = firstNum; i <= secNum; i++) {
            output += i;
        }
        return output;
    } else if (firstNum > secNum && (firstNum > 0 && secNum > 0) && (typeof firstNum === 'number' && typeof secNum === 'number')) {
        for (j = firstNum; j >= secNum; j--) {
            output += j;
        }
        return output;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
