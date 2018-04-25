module.exports = function(arr) {
    if(!Array.isArray(arr)) {
        throw new TypeError('not a integer array');
    }
    for(let i = 0, length = arr.length; i < length; i++) {
        if(typeof arr[i] !== 'number' || arr[i] < 0 || arr[i] > 9) {
            throw new TypeError('illegal integer array format');
        }
    }
};

