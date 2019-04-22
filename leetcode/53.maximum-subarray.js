/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 *
 * https://leetcode.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (43.29%)
 * Total Accepted:    505.7K
 * Total Submissions: 1.2M
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * Given an integer array nums, find the contiguous subarray (containing at
 * least one number) which has the largest sum and return its sum.
 * 
 * Example:
 * 
 * 
 * Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 * 
 * 
 * Follow up:
 * 
 * If you have figured out the O(n) solution, try coding another solution using
 * the divide and conquer approach, which is more subtle.
 * 
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
};

