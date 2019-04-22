/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 *
 * https://leetcode.com/problems/length-of-last-word/description/
 *
 * algorithms
 * Easy (32.22%)
 * Total Accepted:    259.4K
 * Total Submissions: 805.2K
 * Testcase Example:  '"Hello World"'
 *
 * Given a string s consists of upper/lower-case alphabets and empty space
 * characters ' ', return the length of last word in the string.
 * 
 * If the last word does not exist, return 0.
 * 
 * Note: A word is defined as a character sequence consists of non-space
 * characters only.
 * 
 * Example:
 * 
 * Input: "Hello World"
 * Output: 5
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
  let count = 0, ret = 0
  let i, to
  for (i = s.length - 1, to = 0; i >= to; --i) {
    if (s[i] === ' ') {
      ++count
    } else {
      break
    }
  }
  for (i = s.length - count - 1, to = 0; i >= to; --i) {
    if (s[i] === ' ') {
      return ret
    } else {
      ++ret
    }
  }
  return ret
}

