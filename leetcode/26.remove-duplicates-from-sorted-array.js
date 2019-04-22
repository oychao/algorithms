/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  const ret = []
  const mark = {}
  let i, len, num;
  for (i = 0, len = nums.length; i < len; ++i) {
    num = nums[i]
    if (!(num in mark)) {
      mark[num] = true
      ret.push(num)
    }
  }
  nums.length = ret.length
  for (i = 0, len = ret.length; i < len; ++i) {
    nums[i] = ret[i]
  }
}

