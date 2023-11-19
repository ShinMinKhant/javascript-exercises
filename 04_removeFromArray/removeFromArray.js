const removeFromArray = function(arr, ...rm) {
    return arr.filter(item => !rm.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
