/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
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
const rotateRight = function(head, k) {
  if (!head) { return head }
  const H = { next: head }
  let length = 0, nth = 0, i = 0
  let p = head, last, ret
  while (p) {
    ++length
    if (!p.next) { last = p }
    p = p.next
  }
  nth = length - k % length
  p = H
  while (i < nth) {
    ++i
    p = p.next
  }
  last.next = head
  ret = p.next
  p.next = null
  return ret
}

