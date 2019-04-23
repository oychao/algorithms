/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */
const insert = function(arr, idx, ele) {
  const len = arr.length
  let i
  for (i = len - 2; i >= idx; --i) {
    arr[i + 1] = arr[i]
  }
  arr[idx] = ele
}
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
  let i = 0, j = 0
  while (i < m && j < n) {
    while (i < m && nums1[i] <= nums2[j]) {
      ++i
    }
    insert(nums1, i++, nums2[j++])
    ++m
  }
  while (j < n) {
    insert(nums1, i++, nums2[j++])
  }
}

