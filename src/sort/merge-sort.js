/**
 * merge sort algorithm
 */

const defaultCompare = require('./default-compare');

const merge = (arr1, arr2, compare = defaultCompare) => {
  const ret = [];
  while(arr1.length && arr2.length) {
    ret.push(compare(arr1[0], arr2[0]) < 0 ? arr1.shift() : arr2.shift());
  }
  return ret.concat(arr1).concat(arr2);
};
