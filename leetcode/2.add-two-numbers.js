/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
  if (!l1) { return l2 }
  if (!l2) { return l1 }
  const H = new ListNode(null)
  let left = 0
  let p0 = H, p1 = l1, p2 = l2
  let curVal
  while (p1 || p2) {
    curVal = (p1 ? p1.val : 0) + (p2 ? p2.val : 0) + left
    p0.next = new ListNode(curVal % 10)
    p0 = p0.next
    p1 = p1 && p1.next
    p2 = p2 && p2.next
    left = ~~(curVal / 10)
  }
  if (left) { p0.next= new ListNode(1) }
  return H.next
}

