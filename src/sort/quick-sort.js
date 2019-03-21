/**
 * quick sort
 */

const defaultCompare = require('../basic/default-compare');

const prt = (a, l, h, c) => {
  let i = l - 1, j = h + 1, pvtVal = a[~~((l + h) / 2)];
  while (true) {
    do { i++; } while (c(a[i], pvtVal) < 0)
    do { j--; } while (c(a[j], pvtVal) > 0)
    if (i >= j) { return j; }
    [a[i], a[j]] = [a[j], a[i]];
  }
};

const qs = (a, l, h, c) => {
  if (l < h) {
    const pvt = prt(a, l, h, c);
    qs(a, l, pvt, c);
    qs(a, pvt + 1, h, c);
  }
  return a;
};

module.exports = (a, c = defaultCompare) => qs(a, 0, a.length - 1, c);
