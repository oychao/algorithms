/*
 * @lc app=leetcode id=141 lang=golang
 *
 * [141] Linked List Cycle
 */
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func hasCycle(head *ListNode) bool {
	if head == nil { return false }
	var pSlow *ListNode = head
	var pFast *ListNode = head
	for pFast != nil {
		pSlow = pSlow.Next
		pFast = pFast.Next
		if pFast == nil { return false }
		pFast = pFast.Next
		if pSlow == pFast { return true }
	}
	return false
}

