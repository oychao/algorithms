/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
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

