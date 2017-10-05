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
  const index = partition(arr, from, to, compare);
  from < index - 1 ? quickSort(arr, from, index - 1, compare) : void 0;
  index + 1 < to ? quickSort(arr, index + 1, to, compare) : void 0;
};

module.exports = (arr, compare = defaultCompare) => quickSort(arr, 0, arr.length - 1, compare);
