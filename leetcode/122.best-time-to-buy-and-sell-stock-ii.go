/*
 * @lc app=leetcode id=122 lang=golang
 *
 * [122] Best Time to Buy and Sell Stock II
 */

func maxProfit(prices []int) int {
  var res int = 0
  var length int = len(prices)
  var i int = 1
  for ; i < length; i++ {
    if (prices[i - 1] < prices[i]) {
      res += prices[i] - prices[i - 1]
    }
  }
  return res
}
