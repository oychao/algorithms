/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
  if (!digits.length) { return digits }
  const nums = [...digits]
  let i = nums.length - 1
  let bit = false
  ++nums[i]
  while (i >= 0) {
    if (bit) {
      ++nums[i]
      bit = false
    }
    if (nums[i] === 10) {
      nums[i] = 0
      bit = true
    } else {
      bit = false
      break
    }
    --i
  }
  if (bit) {
    nums.unshift(1)
  }
  return nums
}

