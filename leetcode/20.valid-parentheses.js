/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */
const m = {
  '(': ')',
  '[': ']',
  '{': '}',
  ')': '(',
  ']': '[',
  '}': '{'
}
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = []
  let i, len, c
  for (i = 0, len = s.length; i < len; ++i) {
    c = s[i]
    if (stack[stack.length - 1] === m[c]) {
      stack.pop()
    } else {
      stack.push(c)
    }
  }
  return stack.length === 0
}

