/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const treeHeight = function (root) {
  if (!root) { return 0 }
  return 1 + Math.max(treeHeight(root.left), treeHeight(root.right))
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = function(root) {
  if (!root) { return true }
  return isBalanced(root.left) &&
    isBalanced(root.right) &&
    (Math.abs(treeHeight(root.left) - treeHeight(root.right)) < 2)
}

