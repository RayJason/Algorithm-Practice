/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // 斐波那契数列公式法
  // const sqrt_5 = Math.sqrt(5)
  // const fib_n =
  //   Math.pow((1 + sqrt_5) / 2, n + 1) - Math.pow((1 - sqrt_5) / 2, n + 1)
  // return Math.round(fib_n / sqrt_5)

  // 动态规划法
  // const dp = []
  // dp[1] = 1
  // dp[2] = 2
  // for (let i = 3; i <= n; i++) {
  //   dp[i] = dp[i - 1] + dp[i - 2]
  // }
  // return dp[n]

  // 循环解法
  if (n < 2) return 1
  let num1 = 1,
    num2 = 2

  for (let i = 2; i < n; i++) {
    num2 += num1
    num1 = num2 - num1
  }

  return num2
}
// @lc code=end

// local test
console.log(climbStairs(4))
