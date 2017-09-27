/**
 * test scripts
 */

const bubbleSort = require('./sorts/bubble-sort');
const quickSort = require('./sorts/quick-sort');

const arr = [1, 4, 2, 3, 6, 5, 7];
console.log(arr);

// bubbleSort(arr);
// bubbleSort(arr, (a, b) => b - a);
quickSort(arr, (a, b) => b - a);

console.log(arr);
