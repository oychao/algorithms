/**
 * big integer test
 */

const assert = require('assert');

const bi = require('../src/big-integer');

describe('big-integer', () => {
  let arr1, arr2;
  beforeEach(function() {
    arr1 = [1, 9, 9];
    arr2 = [4, 3];
  });
  describe('#plus-one', () => {
    it('should throw an type error when integer array is in a illegal format', () => {
      assert.throws(() => bi.plusOne([1, 3, 4, 89, 55]), TypeError);
      assert.throws(() => bi.plusOne(), TypeError);
      assert.throws(() => bi.plusOne(['2', 1, 4]), TypeError);
      assert.throws(() => bi.plusOne('1,2,3'), TypeError);
    });
    it('should not change the origin number array', () => {
      bi.plusOne(arr1);
      assert(arr1.toString() === arr1.toString());
    });
    it('should plus one correctly', () => {
      assert(bi.plusOne(arr1).join('') === '200');
      assert(bi.plusOne(arr2).join('') === '44');
    });
  });

  describe('#plus', () => {
    it('should throw an type error when integer array is in a illegal format', () => {
      assert.throws(() => bi.plus([1, 3, 4, 89, 55]), TypeError);
      assert.throws(() => bi.plus(), TypeError);
      assert.throws(() => bi.plus(['2', 1, 4]), TypeError);
      assert.throws(() => bi.plus('1,2,3'), TypeError);
    });
    it('should not change the origin number arrays', () => {
      bi.plus(arr1, arr2);
      assert(arr1.toString() === arr1.toString());
      assert(arr2.toString() === arr2.toString());
    });
    it('should add a number to another number correctly', () => {
      assert(bi.plus(arr1, arr2).join('') === '242');
    });
  });
});

