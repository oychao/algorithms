/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
  if ('' === needle) { return 0 }
  return haystack.indexOf(needle)
}

