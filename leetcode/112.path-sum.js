/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
const hasPathSum = function(root, sum) {
  if (!root) { return false }
  if (!root.left && !root.right) {
    if (root.val === sum) {
      return true
    } else {
      return false
    }
  }
  sum -= root.val
  return hasPathSum(root.left, sum) || hasPathSum(root.right, sum)
}

