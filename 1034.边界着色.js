/*
 * @lc app=leetcode.cn id=1034 lang=javascript
 *
 * [1034] 边界着色
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @param {number} color
 * @return {number[][]}
 */
 var colorBorder = function(grid, row, col, color) {
  const m = grid.length, n = grid[0].length;

  const visited = new Array(m).fill(0).map(() => new Array(n).fill(0));// 记录走过的点

  const borders = [];
  const originalColor = grid[row][col]; // 原色
  visited[row][col] = true;
  
  dfs(grid, row, col, visited, borders, originalColor);
  for (let i = 0; i < borders.length; i++) {
      const x = borders[i][0], y = borders[i][1];
      grid[x][y] = color;
  }
  return grid;
};

const dfs = (grid, x, y, visited, borders, originalColor) => {
  const m = grid.length, n = grid[0].length;
  let isBorder = false;
  const direc = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  for (let i = 0; i < 4; i++) {
      const nx = direc[i][0] + x, ny = direc[i][1] + y;
      if (!(nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] === originalColor)) {
          isBorder = true;
      } else if (!visited[nx][ny]){
          visited[nx][ny] = true;
          dfs(grid, nx, ny, visited, borders, originalColor);
      }                
  }
  if (isBorder) {
      borders.push([x, y]);
  }
}
// @lc code=end

