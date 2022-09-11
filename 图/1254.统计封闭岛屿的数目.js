/*
 * @lc app=leetcode.cn id=1254 lang=javascript
 *
 * [1254] 统计封闭岛屿的数目
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
  let row = grid.length
  let column = grid[0].length
  let result = 0
  let count = 0
  let direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]
  let bfs = function (tempRow, tempColumn) {
    let queue = []
    queue.push([tempRow, tempColumn])
    while (queue.length > 0) {
      let cur = queue.shift()
      grid[cur[0]][cur[1]] = 1
      for (let i = 0; i < direction.length; i++) {
        let newRow = cur[0] + direction[i][0]
        let newColumn = cur[1] + direction[i][1]
        if (
          newRow < 0 ||
          newRow >= row ||
          newColumn < 0 ||
          newColumn >= column
        ) {
          count = 0
          continue
        }
        if (grid[newRow][newColumn] === 0) {
          queue.push([newRow, newColumn])
        }
      }
    }
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (grid[i][j] === 0) {
        // 能进来就说明这块地方是陆地
        count = 1
        bfs(i, j)
        result += count
      }
    }
  }
  return result
}
// @lc code=end

const grid = [
  [0, 0, 1, 1, 0, 1, 0, 0, 1, 0],
  [1, 1, 0, 1, 1, 0, 1, 1, 1, 0],
  [1, 0, 1, 1, 1, 0, 0, 1, 1, 0],
  [0, 1, 1, 0, 0, 0, 0, 1, 0, 1],
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 1, 0, 1, 0, 1],
  [1, 1, 1, 0, 1, 1, 0, 1, 1, 0],
]

console.log(closedIsland(grid))
