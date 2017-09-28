/**
 * quick sort
 */

const defaultCompare = require('./default-compare');

const partition = (arr, from, to, compare) => {
  let pivotVal = arr[to];
  let pivot = from - 1;
  for (let i = from; i < to; i++) {
    compare(arr[i], pivotVal) < 0 ? [arr[pivot], arr[i]] = [arr[i], arr[++pivot]] : void 0;
  }
  [arr[pivot], arr[to]] = [arr[to], arr[++pivot]];
  return pivot;
};

const quickSort = (arr, from, to, compare) => {
  const index = partition(arr, from, to, compare);
  if (from < index - 1) {
    quickSort(arr, from, index - 1, compare);
  }
  if (index + 1 < to) {
    quickSort(arr, index + 1, to, compare);
  }
};

module.exports = (arr, compare) => {
  compare = compare || defaultCompare;
  quickSort(arr, 0, arr.length - 1, compare);
};
