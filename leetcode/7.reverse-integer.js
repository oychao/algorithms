/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
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
}

