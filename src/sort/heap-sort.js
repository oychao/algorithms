/**
 * heap sort algorithm
 */

const defaultCompare = require('../basic/default-compare');

const ah = (a, i, e, c) => {
  const l = i * 2 + 1, r = i * 2 + 2;
  if (l < e && c(a[i], a[l]) < 0) {
    [a[i], a[l]] = [a[l], a[i]];
    ah(a, l, e, c);
    ah(a, i, e, c);
  } else if (r < e && c(a[i], a[r]) < 0) {
    [a[i], a[r]] = [a[r], a[i]];
    ah(a, r, e, c);
    ah(a, i, e, c);
  }
};

const ch = (a, c) => {
  let i;
  const m = ~~(a.length / 2);
  for (i = m; i >= 0; i--) {
    ah(a, i, a.length, c);
  }
};

const hs = (a, c = defaultCompare) => {
  let i;
  ch(a, c);
  for (i = a.length - 1; i > 0; i--) {
    [a[0], a[i]] = [a[i], a[0]];
    ah(a, 0, i, c);
  }
  return a;
};

module.exports = hs;