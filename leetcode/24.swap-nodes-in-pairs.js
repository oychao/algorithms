/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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
const swapPairs = function(head) {
  if (!head || !head.next) { return head }
  let p = head
  while (p && p.next) {
    [p.val, p.next.val] = [p.next.val, p.val]
    p = p.next.next
  }
  return head
}

