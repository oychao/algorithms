/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 *
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (46.61%)
 * Total Accepted:    555K
 * Total Submissions: 1.2M
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * Merge two sorted linked lists and return it as a new list. The new list
 * should be made by splicing together the nodes of the first two lists.
 * 
 * Example:
 * 
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
 * 
 * 
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
var mergeTwoLists = function(l1, l2) {
  if (!l1) { return l2 }
  if (!l2) { return l1 }
  const q = []
  let p1 = l1, p2 = l2
  while (p1 && p2) {
    if (p1.val < p2.val) {
      q.push(p1)
      p1 = p1.next
    } else {
      q.push(p2)
      p2 = p2.next
    }
  }
  while (p1) {
    q.push(p1)
    p1 = p1.next
  }
  while (p2) {
    q.push(p2)
    p2 = p2.next
  }
  let i, len;
  for (i = 0, len = q.length - 1; i < len; ++i) {
    q[i].next = q[i + 1]
  }
  return q[0]
};

