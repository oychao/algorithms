const isLegalInteger = require('./is-legal-integer');

module.exports = function(arr1, arr2) {
    isLegalInteger(arr1);
    isLegalInteger(arr2);
    arr1 = arr1.splice(0);
    arr2 = arr2.splice(0);
    let endFlag = false, sum = 0, i, v1, v2;
    const result = [];
    while(true) {
        v1 = arr1.pop();
        v2 = arr2.pop();
        if(v1 === undefined || v2 === undefined) {
            v1 = v1 || 0;
            v2 = v2 || 0;
            endFlag = true;
        }
        sum += v1 + v2;
        if(sum > 9) {
            result.unshift(sum - 10);
            sum = 1;
        } else {
            result.unshift(sum);
            sum = 0;
        }
        if(endFlag) {
            break;
        }
    }
    if(sum === 1) {
        result.unshift(1);
    }
    return result;
};

