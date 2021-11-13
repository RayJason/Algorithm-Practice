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
  const h = grid.length, // 海洋高度
    w = grid[0].length // 海洋宽度

  let maxArea = 0 // 最大岛屿面积

  const expand = (x, y) => {
    if (x >= 0 && x < w && y >= 0 && y < h && grid[y][x] === 1) {
      grid[y][x] = 0 // 已遍历的设为0

      let up = expand(x, y - 1)
      let right = expand(x + 1, y)
      let down = expand(x, y + 1)
      let left = expand(x - 1, y)

      return 1 + up + right + down + left
    }

    return 0
  }

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (grid[y][x] === 1) {
        maxArea = Math.max(maxArea, expand(x, y))
      }
    }
  }

  return maxArea
}
// @lc code=end

// local test
// let grid = [
//   [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//   [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
//   [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
// ]

// console.log(maxAreaOfIsland(grid))
