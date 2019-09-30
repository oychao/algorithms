/*
 * @lc app=leetcode id=442 lang=javascript
 *
 * [442] Find All Duplicates in an Array
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = function (nums) {
  let i = -1, len, val, temp;
  const res = [];
  for (i = 0, len = nums.length; i < len; ++i) {
    if (-1 === nums[i]) {
      continue;
    }
    val = nums[i];
    nums[i] = -1;
    while (-1 !== val) {
      if (val === nums[val]) {
        nums[val] = -1;
        if (val) {
          res.push(val);
        }
      } else {
        temp = nums[val];
        nums[val] = val;
        val = temp;
      }
    }
  }
  return res;
};

