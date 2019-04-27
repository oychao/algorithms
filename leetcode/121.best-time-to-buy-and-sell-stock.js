/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  let min = prices[0]
  let ret = 0
  let i, len, cur
  for (i = 0, len = prices.length; i < len; ++i) {
    cur = prices[i]
    if (cur < min) {
      min = cur
    } else if (cur - min > ret) {
      ret = cur - min
    }
  }
  return ret
}

