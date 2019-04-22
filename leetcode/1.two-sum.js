/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
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

