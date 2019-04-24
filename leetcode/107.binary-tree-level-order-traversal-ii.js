/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
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
 * @return {number[][]}
 */
const levelOrderBottom = function(root) {
  if (!root) { return [] }
  const ret = []
  let queue = [root]
  let nextLayer = []
  let curNode
  ret.push([[root.val]])
  while (queue.length || nextLayer.length) {
    if (!queue.length) {
      queue = nextLayer
      ret.push(queue.map(_ => _.val))
      nextLayer = []
    }
    curNode = queue.shift()
    if (curNode.left) { nextLayer.push(curNode.left) }
    if (curNode.right) { nextLayer.push(curNode.right) }
  }
  return ret.reverse()
}

