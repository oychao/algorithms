/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */
const bitPlus = function(n1, n2) {
  if (n1 === '1' && n2 === '1') {
    return '10'
  } else if (n1 === '1' || n2 === '1') {
    return '1'
  } else {
    return '0'
  }
}
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function(a, b) {
  let ret = []
  let i, len, bit = false
  let n1, n2, cur = '0'
  for (i = 0, len = Math.max(a.length, b.length); i < len; ++i) {
    n1 = a[a.length - 1 - i]
    n2 = b[b.length - 1 - i]
    cur = bitPlus(n1, n2)
    if (bit) {
      if (cur === '0') {
        ret.push('1')
        bit = false
      } else if (cur === '1') {
        ret.push('0')
      } else {
        ret.push('1')
      }
    } else {
      if (cur === '0') {
        ret.push('0')
      } else if (cur === '1') {
        ret.push('1')
      } else {
        ret.push('0')
        bit = true
      }
    }
  }
  if (bit) { ret.push('1') }
  return ret.reverse().join('')
}

