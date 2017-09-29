/**
 * test scripts
 */

const assert = require('assert');

const sort = require('../src/sort');

describe('sort', () => {
  let arr;
  beforeEach(() => {
    arr = [1, 4, 2, 8, 3, 9, 6, 5, 7];
  });
  describe('#bubble-sort', () => {
    it('array should be sorted ASC.', () => {
      sort.bubbleSort(arr);
      assert(arr.toString() === '1,2,3,4,5,6,7,8,9');
    });
    it('array should be sorted DESC.', () => {
      sort.bubbleSort(arr, (a, b) => b - a);
      assert(arr.toString() === '9,8,7,6,5,4,3,2,1');
    });
  });
  describe('#quick-sort', () => {
    it('array should be sorted ASC.', () => {
      sort.quickSort(arr);
      assert(arr.toString() === '1,2,3,4,5,6,7,8,9');
    });
    it('array should be sorted DESC.', () => {
      sort.quickSort(arr, (a, b) => b - a);
      assert(arr.toString() === '9,8,7,6,5,4,3,2,1');
    });
  });
  describe('#insertion-sort', () => {
    it('array should be sorted ASC.', () => {
      sort.insertionSort(arr);
      assert(arr.toString() === '1,2,3,4,5,6,7,8,9');
    });
    it('array should be sorted DESC.', () => {
      sort.insertionSort(arr, (a, b) => b - a);
      assert(arr.toString() === '9,8,7,6,5,4,3,2,1');
    });
  });
  describe('#insertion-sort', () => {
    it('array should be sorted ASC.', () => {
      sort.heapSort(arr);
      assert(arr.toString() === '1,2,3,4,5,6,7,8,9');
    });
    it('array should be sorted DESC.', () => {
      sort.heapSort(arr, (a, b) => b - a);
      assert(arr.toString() === '9,8,7,6,5,4,3,2,1');
    });
  });
});

// /** test bubble sort */
// (() => {
//   let str = ' this is just a test ';
//   str = removeBlank(str);
//   console.log(str);
// })();
