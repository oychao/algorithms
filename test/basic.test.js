/**
 * basic algorithm test
 */

const assert = require('assert');

const basic = require('../src/basic');

describe('basic', () => {
  let sortedArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  describe('#binary-search', () => {
    it('find 5 return index 5', () => {
      assert(basic.binarySearch(sortedArr, 5) === 5);
    });
    it('find 7 return index 7', () => {
      assert(basic.binarySearch(sortedArr, 7) === 7);
    });
    it('find 7.17 return index 8', () => {
      assert(basic.binarySearch(sortedArr, 7.17) === 8);
    });
  });
});
