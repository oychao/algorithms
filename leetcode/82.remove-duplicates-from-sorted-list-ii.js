/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
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
 * @return {ListNode}
 */
const deleteDuplicates = function(head) {
  if (!head) { return null }
  const H = { next: head }
  let val = null
  let p = H
  while (p.next && (p.next.next || val !== null)) {
    if (p.next.next && p.next.val === p.next.next.val) {
      val = p.next.val
      p.next = p.next.next.next
    } else if (val === p.next.val) {
      p.next = p.next.next
    } else {
      val = null
      p = p.next
    }
  }
  return H.next
}

