/**
 * binary search
 */

module.exports = (arr, target) => {
  let low = 0, high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    low = arr[mid] < target ? low + 1 : low;
    high = arr[mid] >= target ? mid - 1 : high;
  }
  return low;
};
