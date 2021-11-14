/*
 * @lc app=leetcode.cn id=542 lang=javascript
 *
 * [542] 01 矩阵
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (matrix) {
  if (!matrix.length || !matrix[0].length) return null

  let n = matrix.length
  let m = matrix[0].length

  // 声明一个答案矩阵
  let ans = new Array(n)
  for (let i = 0; i < n; i++) ans[i] = new Array(m).fill(n + m)

  // 将原矩阵中的0赋值到答案矩阵
  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++) if (matrix[i][j] === 0) ans[i][j] = 0

  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++) {
      if (i - 1 >= 0) ans[i][j] = Math.min(ans[i][j], ans[i - 1][j] + 1)
      if (j - 1 >= 0) ans[i][j] = Math.min(ans[i][j], ans[i][j - 1] + 1)
    }

  for (let i = n - 1; i >= 0; i--)
    for (let j = m - 1; j >= 0; j--) {
      if (i + 1 < n) ans[i][j] = Math.min(ans[i][j], ans[i + 1][j] + 1)
      if (j + 1 < m) ans[i][j] = Math.min(ans[i][j], ans[i][j + 1] + 1)
    }

  return ans
}
// @lc code=end

// local test
const mat = [
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
]
console.log(updateMatrix(mat))
