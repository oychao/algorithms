/**
 * heap sort algorithm
 */

const defaultCompare = require('../basic/default-compare');

const adjustHeap = (a, i, c, end = a.length) => {
  const l = i * 2 + 1;
  const r = i * 2 + 2;
  if (l < end && c(a[l], a[i]) > 0) {
    [a[i], a[l]] = [a[l], a[i]];
    adjustHeap(a, i, c, end);
    adjustHeap(a, l, c, end);
  } else if (r < end && c(a[r], a[i]) > 0) {
    [a[i], a[r]] = [a[r], a[i]];
    adjustHeap(a, i, c, end);
    adjustHeap(a, r, c, end);
  }
};

const createHeap = (a, c) => {
  let i;
  const mid = ~~(a.length / 2);
  for (i = mid; i >= 0; i--) {
    adjustHeap(a, i, c);
  }
};

module.exports = (a, c = defaultCompare) => {
  let i;
  createHeap(a, c);
  for (i = a.length - 1; i > 0; i--) {
    [a[0], a[i]] = [a[i], a[0]];
    adjustHeap(a, 0, c, i);
  }
};