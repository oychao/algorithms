/*
 * @lc app=leetcode id=125 lang=golang
 *
 * [125] Valid Palindrome
 */
func isPalindrome(s string) bool {
	var (
		str string
		length int
		mid int
		i int
	)
	for _, v := range s {
		if v > 47 && v < 58 || v > 64 && v < 91 || v > 96 && v < 123 {
			if v > 64 && v < 91 {
				str += string(v + 32)
				} else {
					str += string(v)
			}
		}
	}
	i = 0
	length = len(str)
	mid = length / 2
	if length == 1 {
		return true
	}
	for ; i < mid; i++ {
		if str[i] != str[length - 1 - i] {
			return false
		}
	}
  return true
}

