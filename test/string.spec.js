/**
 * test string scripts
 */

const assert = require('assert');

const strUtil = require('../src/string');

describe('string', () => {
  let str;
  beforeEach(() => {
    str = 'this is just a test';
  });
  describe('#is-palindrome', () => {
    it('check none palindrome string', () => {
      assert(strUtil.isPalindrome(str) === false);
    });
    it('check palindrome string', () => {
      str = 'thisiht';
      assert(strUtil.isPalindrome(str) === true);
    });
  });
  describe('#remove-blank', () => {
    it('remove string blanks', () => {
      assert(strUtil.removeBlank(str) === 'thisisjustatest');
    });
  });
  describe('#longest-substring', () => {
    it('length of longest substring without repeating characters', () => {
      assert(strUtil.calcLlswrc('thisisjustatest') === 5);
    });
  });
});
