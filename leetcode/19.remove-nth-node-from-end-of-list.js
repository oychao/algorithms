/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {
  if (!head) { return null }
  const H = { next: head }
  let p = head
  let length = 0, i, idx
  while (p) {
    ++length
    p = p.next
  }
  idx = length - n
  p = H
  i = 0
  while (i < idx) {
    p = p.next
    ++i
  }
  p.next = p.next.next
  return H.next
}

