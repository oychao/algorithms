import "strconv"

/*
 * @lc app=leetcode id=257 lang=golang
 *
 * [257] Binary Tree Paths
 *
 * https://leetcode.com/problems/binary-tree-paths/description/
 *
 * algorithms
 * Easy (45.63%)
 * Likes:    1828
 * Dislikes: 111
 * Total Accepted:    327.2K
 * Total Submissions: 635.3K
 * Testcase Example:  '[1,2,3,null,5]'
 *
 * Given a binary tree, return all root-to-leaf paths.
 *
 * Note: A leaf is a node with no children.
 *
 * Example:
 *
 *
 * Input:
 *
 * ⁠  1
 * ⁠/   \
 * 2     3
 * ⁠\
 * ⁠ 5
 *
 * Output: ["1->2->5", "1->3"]
 *
 * Explanation: All root-to-leaf paths are: 1->2->5, 1->3
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func binaryTreePaths(root *TreeNode) []string {
	if nil == root {
		return nil
	}

	nodeStack := []*TreeNode{root}
	pathStack := []string{strconv.Itoa(root.Val)}
	ret := []string{}

	for 0 != len(nodeStack) {
		nStackLength := len(nodeStack)
		curNode := nodeStack[nStackLength-1]
		nodeStack = nodeStack[0 : nStackLength-1]
		pStackLength := len(pathStack)
		curPath := pathStack[pStackLength-1]
		pathStack = pathStack[0 : pStackLength-1]

		if nil == curNode.Left && nil == curNode.Right {
			ret = append(ret, curPath)
		}

		if nil != curNode.Right {
			nodeStack = append(nodeStack, curNode.Right)
			pathStack = append(pathStack, curPath+"->"+strconv.Itoa(curNode.Right.Val))
		}

		if nil != curNode.Left {
			nodeStack = append(nodeStack, curNode.Left)
			pathStack = append(pathStack, curPath+"->"+strconv.Itoa(curNode.Left.Val))
		}
	}

	return ret
}

// @lc code=end

