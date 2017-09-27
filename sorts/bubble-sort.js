/**
 * bubble sort algorithm in javascript
 */

module.exports = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      arr[j] > arr[j + 1] ? [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] : void 0;
    }
  }
};