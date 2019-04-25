/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function(rowIndex) {
  let i = 0
  let j, len
  let row, prev
  while (i <= rowIndex) {
    if (i === 0) {
      row = [1]
    } else if (i === 1) {
      row = [1, 1]
    } else {
      row = [1]
      for (j = 0, len = prev.length - 1; j < len; ++j) {
        row.push(prev[j] + prev[j + 1])
      }
      row.push(1)
    }
    prev = row
    ++i
  }
  return row
}

