/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
const reverseBetween = function(head, m, n) {
  if (!head || m === n) { return head }
  const a = []
  let p = head, i = 1, mid, len
  while (p) {
    if (i >= m && i <= n) { a.push(p) }
    ++i
    p = p.next
  }
  for (i = 0, len = a.length, mid = ~~(len / 2); i < mid; ++i) {
    [a[i].val, a[len - 1 - i].val] = [a[len - 1 - i].val, a[i].val]
  }
  return head
}

