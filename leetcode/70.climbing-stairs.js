/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */
/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
  const t = [1, 1]
  while (t[n] === undefined) { t.push(t[t.length - 1] + t[t.length - 2]) }
  return t[t.length - 1]
}

