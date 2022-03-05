/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 * 2022.03.05 复习
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  /** 本质是求第n个斐波那契数
   * 1 1
   * 2 2
   * 3 3
   * 4 5
   * 5 8
   */

  // 题目限定了n的范围不为0 可以不做特殊处理
  if (n === 1) return 1
  let num1 = 1,
    num2 = 2

  for (let i = 2; i < n; i++) {
    num2 += num1
    num1 = num2 - num1
  }

  return num2
}
// @lc code=end

// console.log(climbStairs(5))
