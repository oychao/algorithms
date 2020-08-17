/*
 * @lc app=leetcode id=14 lang=golang
 *
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (33.34%)
 * Likes:    2781
 * Dislikes: 1916
 * Total Accepted:    790.1K
 * Total Submissions: 2.2M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 *
 *
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 *
 *
 * Example 2:
 *
 *
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 *
 * Note:
 *
 * All given inputs are in lowercase letters a-z.
 *
 */
// @lc code=start
type TrieNode struct {
	val      string
	count    int
	children map[string]*TrieNode
}

func createTrieTree(strs []string) *TrieNode {
	root := &TrieNode{val: "ROOT", count: 0, children: map[string]*TrieNode{}}

	length := len(strs)
	for i := 0; i < length; i++ {
		str := strs[i]
		strLen := len(str)

		cur := root
		for j := 0; j < strLen; j++ {
			char := str[j : j+1]
			if nil == cur.children[char] {
				cur.children[char] = &TrieNode{char, 0, make(map[string]*TrieNode)}
			}
			cur = cur.children[char]
			cur.count += 1
		}
	}

	return root
}

func longestCommonPrefix(strs []string) string {
	if 0 == len(strs) {
		return ""
	}

	for i := 0; i < len(strs); i++ {
		if "" == strs[i] {
			return ""
		}
	}

	tree := createTrieTree(strs)
	ret := ""
	cur := tree

	maxCount := -1

	for 1 == len(cur.children) {
		for k := range cur.children {
			cur = cur.children[k]

			break
		}

		if -1 == maxCount {
			maxCount = cur.count
		}

		if maxCount != cur.count {
			break
		}

		ret += cur.val
	}

	return ret
}

// @lc code=end
