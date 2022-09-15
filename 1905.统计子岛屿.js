/*
 * @lc app=leetcode.cn id=1905 lang=javascript
 *
 * [1905] 统计子岛屿
 */

// @lc code=start
/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function (grid1, grid2) {
  let rows = grid1.length,
    cols = grid1[0].length
  let directions = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ]

  const dfs = (i, j) => {
    // 超出索引边界或者已经是水域了
    if (i < 0 || j < 0 || i >= rows || j >= cols || grid2[i][j] == 0) return
    grid2[i][j] = 0
    for (let dir of directions) dfs(dir[0] + i, dir[1] + j)
  }

  // 如果在grid1里是水域，在grid2是陆地，把它及邻近的陆地淹掉，排除掉不符合子岛屿的陆地
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid1[i][j] == 0 && grid2[i][j] == 1) {
        dfs(i, j)
      }
    }
  }
  
  let count = 0
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid2[i][j] == 1) {
        count++
        dfs(i, j)
      }
    }
  }
  return count
}
// @lc code=end
