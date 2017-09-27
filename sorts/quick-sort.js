/**
 * quick sort
 */

const defaultCompare = require('./default-compare');

const partition = (arr, from, to, compare) => {
  const pivot = arr[from];
  while(from <= to) {
    while(compare(arr[from], pivot) < 0) {
      from++;
    }
    while(compare(arr[to], pivot) > 0) {
      to--;
    }
    if (from <= to) {
      [arr[from], arr[to]] = [arr[to], arr[from]];
      from++;
      to--;
    }
  }
  return from;
};

const quickSort = function(arr, from, to, compare) {
  const index = partition(arr, from, to, compare);
  if (from < index - 1) {
    quickSort(arr, from, index - 1, compare);
  }
  if (to > index) {
    quickSort(arr, index, to, compare);
  }
};

module.exports = (arr, compare) => {
  compare = compare || defaultCompare;
  quickSort(arr, 0, arr.length - 1, compare);
};
