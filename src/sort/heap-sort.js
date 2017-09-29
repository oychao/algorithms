/**
 * heap sort algorithm
 */

const defaultCompare = require('./default-compare');

const adjustHeap = (arr, index, compare, end = arr.length) => {
  const left = index * 2 + 1;
  const right = index * 2 + 2;
  if (left < end && compare(arr[left], arr[index]) > 0) {
    [arr[index], arr[left]] = [arr[left], arr[index]];
    adjustHeap(arr, index, compare, end);
    adjustHeap(arr, left, compare, end);
  } else if (right < end && compare(arr[right], arr[index]) > 0) {
    [arr[index], arr[right]] = [arr[right], arr[index]];
    adjustHeap(arr, index, compare, end);
    adjustHeap(arr, right, compare, end);
  }
};

const createHeap = (arr, compare) => {
  const mid = Math.floor(arr.length / 2);
  for (let i = mid; i >= 0; i--) {
    adjustHeap(arr, i, compare);
  }
};

module.exports = (arr, compare = defaultCompare) => {
  createHeap(arr, compare);
  for (let i = arr.length - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    adjustHeap(arr, 0, compare, i);
  }
};
