/**
 * big integer test
 */

const assert = require('assert');

const bi = require('../src/big-integer');

describe('big-integer', () => {
  describe('#plus-one', () => {
    it('should plus one correctly', () => {
      assert(bi.plusOne([1, 9, 9]).toString() === '2,0,0');
    });
    it('should throw an error when big integer array is in a illegal format', () => {
      assert.throws(() => bi.plusOne([1, 3, 4, 89, 55]), TypeError);
      assert.throws(() => bi.plusOne(), TypeError);
      assert.throws(() => bi.plusOne(['2', 1, 4]), TypeError);
      assert.throws(() => bi.plusONe('1,2,3'), TypeError);
    });
  });
});

