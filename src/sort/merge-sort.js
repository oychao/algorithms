/**
 * merge sort algorithm
 */

const defaultCompare = require('./default-compare');

const merge = (left, right, compare) => {
  const ret = [];
  while(left.length && right.length) {
    ret.push(compare(left[0], right[0]) < 0 ? left.shift() : right.shift());
  }
  return ret.concat(left).concat(right);
};

module.exports = mergeSort = (arr, compare = defaultCompare) => {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, mid), compare), mergeSort(arr.slice(mid), compare), compare);
};
