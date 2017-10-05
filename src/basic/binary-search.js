/**
 * binary search
 */

module.exports = (arr, target, compare = (a, b) => a - b) => {
  let low = 0, high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    low = compare(arr[mid], target) < 0 ? low + 1 : low;
    high = compare(arr[mid], target) >= 0 ? mid - 1 : high;
  }
  return low;
};
