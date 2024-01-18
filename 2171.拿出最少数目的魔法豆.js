/*
 * @lc app=leetcode.cn id=2171 lang=javascript
 *
 * [2171] 拿出最少数目的魔法豆
 */

// @lc code=start
/**
 * @param {number[]} beans
 * @return {number}
 */
var minimumRemoval = function (beans) {
  let n = beans.length
  beans.sort((a, b) => a - b)
  let total = beans.reduce((a, b) => a + b, 0) // 豆子总数
  let res = total // 最少需要移除的豆子数
  for (let i = 0; i < n; i++) {
    res = Math.min(res, total - beans[i] * (n - i))
  }
  return res
}
// @lc code=end
