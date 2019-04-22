/**
 * bubble sort algorithm in javascript
 */

const defaultCompare = require('../basic/default-compare');

const bs = (a, c = defaultCompare) => {
  let i, len, j;
  for (i = 0, len = a.length; i < len; i++) {
    for (j = 0; j < len - i - 1; j++) {
      c(a[j], a[j + 1]) > 0 ? [a[j], a[j + 1]] = [a[j + 1], a[j]] : void 0;
    }
  }
};

module.exports = bs;
