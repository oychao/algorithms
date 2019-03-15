/**
 * insertion sort
 */

const defaultCompare = require('../basic/default-compare');

module.exports = (a, c = defaultCompare) => {
  let i, j;
  for (i = 1; i < a.length; i++) {
    for (j = i; j > 0 && c(a[j], a[j - 1]) < 0; j--) {
      [a[j], a[j - 1]] = [a[j - 1], a[j]];
    }
  }
};