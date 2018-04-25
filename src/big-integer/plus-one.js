const isLegalInteger = require('./is-legal-integer');

module.exports = function(arr) {
    isLegalInteger(arr);
    arr = arr.splice(0);
    let i, result;
    for(i = arr.length - 1; i >= 0; i--) {
        result = arr[i] + 1;
        arr[i] = result === 10 ? 0 : result;
        if(result !== 10) {
            break;
        }
    }
    if(i === -1) {
        arr.unshift(1);
    }
    return arr;
}

