/*
 * @lc app=leetcode.cn id=807 lang=javascript
 *
 * [807] 保持城市天际线
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  // 建筑最大高度即不超过所属列和行最大的值
  // 先找到每行每列的最大值
  const n = grid.length
  // 保存每行列最高的值
  const rowMax = new Array(n).fill(0)
  const colMax = new Array(n).fill(0)

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      rowMax[i] = Math.max(rowMax[i], grid[i][j])
      colMax[j] = Math.max(colMax[j], grid[i][j])
    }
  }

  // 统计和
  let ans = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 返回 增加的高度差 总和
      ans += Math.min(rowMax[i], colMax[j]) - grid[i][j]
    }
  }
  return ans
}
// @lc code=end
