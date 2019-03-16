/**
 * merge sort algorithm
 */

const defaultCompare = require('../basic/default-compare');

const mg = (a, t, l, m, h, c) => {
  let i = l,
    j = m,
    k = l;
  while (i < m && j < h) {
    if (c(a[i], a[j]) < 0) {
      t[k++] = a[i++];
    } else {
      t[k++] = a[j++];
    }
  }
  while (i < m) {
    t[k++] = a[i++];
  }
  while (j < h) {
    t[k++] = a[j++];
  }
  k = l;
  while (k < h) {
    a[k] = t[k];
    k++;
  }
};

const ms = (a, t, l, h, c) => {
  if (h - l < 2) {
    t[l] = a[l];
    return;
  }
  const m = ~~((l + h) / 2);
  ms(a, t, l, m, c);
  ms(a, t, m, h, c);
  mg(a, t, l, m, h, c);
};

const mergeSort = (a, c = defaultCompare) => {
  const t = [];
  ms(a, t, 0, a.length, c);
  return a;
};

module.exports = mergeSort;