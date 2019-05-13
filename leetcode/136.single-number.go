/*
 * @lc app=leetcode id=136 lang=golang
 *
 * [136] Single Number
 */
func singleNumber(nums []int) int {
	var ret int = 0
	for _, v := range(nums) {
		ret = ret ^ v
	}
  return ret
}

