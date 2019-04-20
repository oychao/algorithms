/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (25.24%)
 * Total Accepted:    661.5K
 * Total Submissions: 2.6M
 * Testcase Example:  '123'
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * Example 1:
 * 
 * 
 * Input: 123
 * Output: 321
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -123
 * Output: -321
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 120
 * Output: 21
 * 
 * 
 * Note:
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose
 * of this problem, assume that your function returns 0 when the reversed
 * integer overflows.
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
  if (x <= -Math.pow(2, 31) || x > Math.pow(2, 32 - 1)) {
    return 0
  }
  if (x < 0) {
    x =  0 - `${-x}`.split('').reverse().join('')
  } else {
    x = +`${x}`.split('').reverse().join('')
  }
  if (x <= -Math.pow(2, 31) || x > Math.pow(2, 32 - 1)) {
    return 0
  }
  return x
};

