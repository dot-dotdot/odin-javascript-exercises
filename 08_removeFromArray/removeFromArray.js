const removeFromArray = function(array, ...elements) {
    return array.filter(element => !elements.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
