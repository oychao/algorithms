/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function(nums) {
  if (!nums.length) { return null }
  const m = ~~(nums.length / 2)
  const R = new TreeNode(nums[m])
  R.left = sortedArrayToBST(nums.slice(0, m))
  R.right = sortedArrayToBST(nums.slice(m + 1))
  return R
}

