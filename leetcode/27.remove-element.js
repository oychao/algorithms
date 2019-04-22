/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
  const ret = []
  let i, len, num;
  for (i = 0, len = nums.length; i < len; ++i) {
    num = nums[i]
    if (num !== val) {
      ret.push(num)
    }
  }
  nums.length = ret.length
  for (i = 0, len = ret.length; i < len; ++i) {
    nums[i] = ret[i]
  }
}

