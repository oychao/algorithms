/*
 * @lc app=leetcode id=25 lang=javascript
 *
 * [25] Reverse Nodes in k-Group
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = function(head, k) {
  if (!head || k < 1) { return null }
  if (k === 1) { return head }
  let m = ~~(k / 2)
  let p = head, i
  let a = []
  while (p) {
    a.push(p)
    if (a.length === k) {
      for (i = 0; i < m; ++i) {
        [a[i].val, a[k - i - 1].val] = [a[k - i - 1].val, a[i].val]
      }
      a = []
    }
    p = p.next
  }
  return head
}

