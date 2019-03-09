/**
 * quick sort
 */

const defaultCompare = require('../basic/default-compare');

const partition = (arr, from, to, compare) => {
  const pivotVal = arr[to];
  let pivot = from - 1;
  for (var i = from; i < to; i++) {
    compare(arr[i], pivotVal) < 0 ? [arr[i], arr[pivot]] = [arr[++pivot], arr[i]] : void 0;
  }
  [arr[pivot], arr[to]] = [arr[to], arr[++pivot]];
  return pivot;
};

const quickSort = (arr, from, to, compare) => {
  const index = partition2(arr, from, to, compare);
  from < index - 1 ? quickSort(arr, from, index - 1, compare) : void 0;
  index + 1 < to ? quickSort(arr, index + 1, to, compare) : void 0;
};

const partition2 = (arr, from, to, compare) => {
  let i = from - 1, j = to + 1, pivotVal = arr[~~((from + to) / 2)];
  while (true) {
    do { i++; } while (compare(arr[i], pivotVal) < 0)
    do { j--; } while (compare(arr[j], pivotVal) > 0)
    if (i >= j) { return j; }
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
};

const quickSort2 = (arr, from, to, compare) => {
  if (from < to) {
    const pivot = partition2(arr, from, to, compare);
    quickSort2(arr, from, pivot, compare);
    quickSort2(arr, pivot + 1, to, compare);
  }
};

module.exports = (arr, compare = defaultCompare) => quickSort2(arr, 0, arr.length - 1, compare);
