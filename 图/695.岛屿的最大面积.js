/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const r = grid.length // row
  const c = grid[0].length // column
  let maxArea = 0

  const explore = (x, y) => {
    if (!(x >= 0 && x < c && y >= 0 && y < r)) return 0
    if (grid[y][x] === 0) return 0

    let area = 1
    grid[y][x] = 0
    const leftArea = explore(x - 1, y)
    const topArea = explore(x, y + 1)
    const rightArea = explore(x + 1, y)
    const bottomArea = explore(x, y - 1)

    return 1 + leftArea + topArea + rightArea + bottomArea
  }

  for (let i = 0; i < c; i++) {
    for (let j = 0; j < r; j++) {
      if (grid[j][i] === 1) maxArea = Math.max(maxArea, explore(i, j))
    }
  }

  return maxArea
}
// @lc code=end

const grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
]

console.log(maxAreaOfIsland(grid))
