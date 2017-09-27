/**
 * test scripts
 */

const bubbleSort = require('./sorts/bubble-sort');

const arr = [1, 4, 2, 3, 6, 5, 7];

// bubbleSort(arr);
bubbleSort(arr, (a, b) => b - a);

console.log(arr);
