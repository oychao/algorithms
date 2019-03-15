/**
 * bubble sort algorithm in javascript
 */

const defaultCompare = require('../basic/default-compare');

module.exports = (a, c = defaultCompare) => {
  let i, j;
  for (i = 0; i < a.length; i++) {
    for (j = 0; j < a.length - i - 1; j++) {
      c(a[j], a[j + 1]) > 0 ? [a[j], a[j + 1]] = [a[j + 1], a[j]] : void 0;
    }
  }
};