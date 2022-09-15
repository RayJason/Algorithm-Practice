/*
 * @lc app=leetcode.cn id=1020 lang=javascript
 *
 * [1020] 飞地的数量
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
  const r = grid.length
  const c = grid[0].length

  let count = 0

  let isBorder = false
  let innerVal = 0

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (grid[i][j] === 1) {
        isBorder = false
        innerVal = 0
        searchBorder(j, i)
        if (!isBorder) {
          count += innerVal
        }
      }
    }
  }

  function searchBorder(x, y) {
    if (x < 0 || y < 0 || x >= c || y >= r) {
      isBorder = true
      return
    }

    if (grid[y][x] === 0) return
    grid[y][x] = 0
    innerVal++

    searchBorder(x - 1, y)
    searchBorder(x, y + 1)
    searchBorder(x + 1, y)
    searchBorder(x, y - 1)
  }

  return count
}
// @lc code=end

const grid = [
  [0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
  [1, 1, 0, 0, 0, 1, 0, 1, 1, 1],
  [0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
  [0, 1, 1, 0, 0, 0, 1, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 0, 0, 1, 0],
  [0, 0, 1, 0, 1, 1, 1, 1, 0, 1],
  [0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
  [0, 0, 1, 0, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
]
console.log(numEnclaves(grid))
