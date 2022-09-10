/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const r = grid.length // row
  const c = grid[0].length // column

  // 把探索过的染成2

  let count = 0
  const explore = (x, y) => {
    if (x < 0 || x > c - 1 || y < 0 || y > r - 1) return
    if (grid[y][x] === '0') return // 海洋或已探索过的

    grid[y][x] = '0'

    explore(x + 1, y)
    explore(x, y + 1)
    explore(x - 1, y)
    explore(x, y - 1)
  }

  // 循环 Grid 中的每个点
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (grid[i][j] === '1') {
        explore(j, i)
        count++
      }
    }
  }

  return count
}
// @lc code=end

const grid = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
]

console.log(numIslands(grid))