/**
 * heap sort algorithm
 */

const defaultCompare = require('../basic/default-compare');

const adjustHeap = (a, i, e, c) => {
  const l = i * 2 + 1,
    r = i * 2 + 2;
  if (l < e && c(a[i], a[l]) < 0) {
    [a[i], a[l]] = [a[l], a[i]];
    adjustHeap(a, i, e, c);
    adjustHeap(a, l, e, c);
  } else if (r < e && c(a[i], a[r]) < 0) {
    [a[i], a[r]] = [a[r], a[i]];
    adjustHeap(a, i, e, c);
    adjustHeap(a, r, e, c);
  }
};

const createHeap = (a, c) => {
  let i;
  const m = ~~(a.length / 2);
  for (i = m; i >= 0; i--) {
    adjustHeap(a, i, a.length, c);
  }
};

const heapSort = (a, c = defaultCompare) => {
  let i;
  createHeap(a, c);
  for (i = a.length - 1; i > 0; i--) {
    [a[0], a[i]] = [a[i], a[0]];
    adjustHeap(a, 0, i, c);
  }
  return a;
};

module.exports = heapSort;