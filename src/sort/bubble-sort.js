/**
 * bubble sort algorithm in javascript
 */

const defaultCompare = require('./default-compare');

module.exports = (arr, compare) => {
  compare = compare || defaultCompare;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      compare(arr[j], arr[j + 1]) > 0 ? [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] : void 0;
    }
  }
};
