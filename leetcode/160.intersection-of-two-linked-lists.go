/*
 * @lc app=leetcode id=160 lang=golang
 *
 * [160] Intersection of Two Linked Lists
 */
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

func hasCycle(head *ListNode) *ListNode {
	if head == nil { return nil }
	var pSlow *ListNode = head
	var pFast *ListNode = head
	for pFast != nil {
		pSlow = pSlow.Next
		pFast = pFast.Next
		if pFast == nil { return nil }
		pFast = pFast.Next
		if pSlow == pFast {
			pSlow = head
			for pSlow != pFast {
				pSlow = pSlow.Next
				pFast = pFast.Next
			}
			return pSlow
		}
	}
	return nil
}

func getIntersectionNode(headA, headB *ListNode) *ListNode {
	var (
		pA *ListNode = headA
		pB *ListNode = headB
		ret *ListNode
	)
	if pA == nil || pB == nil { return nil }
	for pA.Next != nil {
		pA = pA.Next
	}
	pA.Next = pB
	ret = hasCycle(headA)
	pA.Next = nil
	return ret
}

