/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */
const m = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}
const e = {
  V: 'I',
  X: 'I',
  L: 'X',
  C: 'X',
  D: 'C',
  M: 'C'
}
/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
  let ret = 0
  let i, len, c
  for (i = 0, len = s.length; i < len; ++i) {
    c = s[i]
    ret += m[c]
    if (e[c] && s[i - 1] === e[c]) {
      ret -= 2 * m[e[c]]
    }
  }
  return ret
}

