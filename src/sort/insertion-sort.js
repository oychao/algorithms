/**
 * insertion sort
 */

const defaultCompare = require('./default-compare');

module.exports = (arr, compare) => {
  compare = compare || defaultCompare;
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0 && compare(arr[j], arr[j - 1]) < 0; j--) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    }
  }
};
