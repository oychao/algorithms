/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
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
 * @return {number}
 */
const minDepth = function(root) {
  if (!root) { return 0 }
  if (!root.left && !root.right) { return 1 }
  if (!root.left) { return minDepth(root.right) + 1 }
  if (!root.right) { return minDepth(root.left) + 1 }
  return 1 + Math.min(minDepth(root.left), minDepth(root.right))
}

