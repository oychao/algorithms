/**
 * merge sort algorithm
 */

const defaultCompare = require('../basic/default-compare');

const m = (a, l, mid, r, t, c) => {
  let p1 = l,
    p2 = mid,
    len1 = mid,
    len2 = r,
    i = l;
  while (p1 < len1 && p2 < len2) {
    if (c(a[p1], a[p2]) < 0) {
      t[i++] = a[p1++];
    } else {
      t[i++] = a[p2++];
    }
  }
  while (p1 < len1) {
    t[i++] = a[p1++];
  }
  while (p2 < len2) {
    t[i++] = a[p2++];
  }
  i = l;
  while (i < r) {
    a[i] = t[i];
    i++;
  }
};

const ms = (a, l, r, t, c) => {
  if (r - l < 2) {
    t[l] = a[l];
    return;
  }
  const mid = ~~((r + l) / 2);
  ms(a, l, mid, t, c);
  ms(a, mid, r, t, c)
  m(a, l, mid, r, t, c);
};


module.exports = mergeSort = (a, c = defaultCompare) => {
  const t = [];
  ms(a, 0, a.length, t, c);
  return a;
};