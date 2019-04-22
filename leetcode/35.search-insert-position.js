/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
  let l = 0, h = nums.length - 1, m
  if (target > nums[h]) {
    return nums.length
  }
  while (l < h) {
    m = ~~((l + h) / 2)
    if (nums[m] < target) {
      l = m + 1
    } else {
      h = m
    }
  }
  return l
}

