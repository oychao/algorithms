/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function(numRows) {
  const ret = []
  let i = 0
  let j, len
  let row
  while (i < numRows) {
    const prev = ret[ret.length - 1]
    if (!prev) {
      ret.push([1])
    } else if (prev.length === 1) {
      ret.push([1, 1])
    } else {
      row = [1]
      ret.push(row)
      for (j = 0, len = prev.length - 1; j < len; ++j) {
        row.push(prev[j] + prev[j + 1])
      }
      row.push(1)
    }
    ++i
  }
  return ret
}

