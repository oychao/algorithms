/**
 * test sub-sequence scripts
 */

const assert = require('assert');

const calcLis = require('../src/sub-sequence/lis');

describe('sub-sequence', () => {
  let arr;
  beforeEach(() => {
    arr = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15];
  });
  describe('#calc-lis', () => {
    it('longest increasing sub-sequence', () => {
      assert(calcLis(arr).toString() === '0,2,6,9,11,15');
    });
    it('longest decreasing sub-sequence', () => {
      assert(calcLis(arr, (a, b) => b - a).toString() === '12,10,9,5,3');
    });
  });
});