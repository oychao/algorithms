/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  if (x < 0) { return false }
  if (x < 10) { return true }
  const s = []
  while (x > 0) {
    s.push(x % 10)
    x /= 10
    x = ~~x
  }
  let i, half, len
  for (i = 0, half = ~~(s.length / 2), len = s.length; i <= half; ++i) {
    if (s[i] !== s[len - i - 1]) { return false }
  }
  return true
}

