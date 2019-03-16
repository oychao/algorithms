/**
 * the longest increasing sub-sequence
 */

const defaultCompare = require('../basic/default-compare');

const calcLis = (a, c = defaultCompare) => {
  const M = [-1],
    L = [],
    S = [];
  let i, j, len, l, m, h;
  for (i = 0, len = a.length; i < len; i++) {
    l = 1, h = M.length;
    while (l < h) {
      m = ~~((l + h) / 2);
      if (c(a[M[m]], a[i]) < 0) {
        l = m + 1;
      } else {
        h = m;
      }
    }
    M[l] = i;
    L[i] = M[l - 1];
  }

  len = M.length - 1;
  i = M[len];
  while (i !== -1) {
    S[--len] = a[i];
    i = L[i];
  }
  return S;
};

module.exports = calcLis;