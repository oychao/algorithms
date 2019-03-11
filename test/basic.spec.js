/**
 * basic algorithm test
 */

const assert = require('assert');

const basic = require('../src/basic');

describe('basic', () => {
  let sortedArr = [0, 1, 2, 5, 5, 6, 6, 7, 8, 9];

  describe('#binary-search-precise', () => {
    it('find 5 return index 4', () => {
      assert(basic.binarySearch.precise(sortedArr, 5) === 4);
    });
    it('find 7 return index 7', () => {
      assert(basic.binarySearch.precise(sortedArr, 7) === 7);
    });
    it('find 7.17 return undefined', () => {
      assert(basic.binarySearch.precise(sortedArr, 7.17) === undefined);
    });
  });
  
  describe('#binary-search-leftmost', () => {
    it('find 5 return index 5', () => {
      assert(basic.binarySearch.leftMost(sortedArr, 5) === 3);
    });
    it('find 7 return index 7', () => {
      assert(basic.binarySearch.leftMost(sortedArr, 7) === 7);
    });
    it('find 7.17 return index 8', () => {
      assert(basic.binarySearch.leftMost(sortedArr, 7.17) === 8);
    });
  });
  
  describe('#binary-search-rightmost', () => {
    it('find 5 return index 5', () => {
      assert(basic.binarySearch.rightMost(sortedArr, 5) === 4);
    });
    it('find 7 return index 7', () => {
      assert(basic.binarySearch.rightMost(sortedArr, 6) === 6);
    });
    it('find 7.17 return index 8', () => {
      assert(basic.binarySearch.rightMost(sortedArr, 7) === 7);
    });
  });
});
