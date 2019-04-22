/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
  if (!nums.length) {
    return null;
  }
  let sum = nums[0]
  let from = 0, to = 1
  let mSum = sum
  let mFrom = 0, mTo = 1
  let i, len, cur
  for (i = 1, len = nums.length; i < len; ++i) {
    cur = nums[i]
    if (cur < 0) {
      if (sum < 0) {
        sum = cur
        from = i
      } else {
        sum += cur
      }
    } else {
      if (sum < 0) {
        sum = cur
        from = i
      } else {
        sum += cur
      }
    }
    to = i + 1
    if (sum > mSum) {
      mSum = sum
      mFrom = from
      mTo = to
    }
  }
  return mSum
}

