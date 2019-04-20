/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 *
 * https://leetcode.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (43.23%)
 * Total Accepted:    1.7M
 * Total Submissions: 3.9M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * Given an array of integers, return indices of the two numbers such that they
 * add up to a specific target.
 * 
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 * 
 * Example:
 * 
 * 
 * Given nums = [2, 7, 11, 15], target = 9,
 * 
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 * 
 * 
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const m = {}
  let i, len, left
  for (i = 0, len = nums.length; i < len; ++i) {
    left = target - nums[i]
    if (left in m) {
      return [m[left], i]
    }
    m[nums[i]] = i
  }
  return null
}

