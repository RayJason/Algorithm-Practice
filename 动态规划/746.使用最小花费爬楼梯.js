/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const costLen = cost.length
  for (let i = 2; i < costLen; i++) {
    // 返回当前位置最小结果
    cost[i] += Math.min(cost[i - 1], cost[i - 2])
  }
  return Math.min(cost[costLen - 1], cost[costLen - 2])
}
// @lc code=end

// console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))
