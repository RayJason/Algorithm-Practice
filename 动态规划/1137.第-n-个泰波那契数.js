/*
 * @lc app=leetcode.cn id=1137 lang=javascript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  if (!n) return 0

  /** 动态规划 循环遍历 */
  let t0 = 0,
    t1 = 1,
    t2 = 1

  for (let i = 2; i < n; i++) {
    t2 = t0 + t1 + t2
    t1 = t2 - t1 - t0
    t0 = t2 - t1 - t0
  }

  return t2
}
// @lc code=end