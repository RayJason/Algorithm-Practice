/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = (triangle) => {
  const bottom = triangle[triangle.length - 1]
  const dp = new Array(bottom.length)
  // base case 是最后一行
  for (let i = 0; i < dp.length; i++) {
    dp[i] = bottom[i]
  }
  // 从倒数第二列开始迭代
  for (let i = dp.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j]
    }
  }
  return dp[0]
}
// @lc code=end

// local test
const triangle = [[-1], [2, 3], [1, -1, -3]]
console.log(minimumTotal(triangle))
