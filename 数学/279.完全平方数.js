/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  // 动态规划
  // const dp = Array(n + 1).fill(0) // 数组长度为n+1，值均为0
  // for (let i = 1; i <= n; i++) {
  //   dp[i] = i // 最坏的情况就是每次+1
  //   for (let j = 1; i - j * j >= 0; j++) {
  //     dp[i] = Math.min(dp[i], dp[i - j * j] + 1) // 动态转移方程
  //   }
  // }
  // return dp[n]

  // Math
  // 判断是否为完全平方数
  const isPerfectSquare = (x) => {
    const y = Math.floor(Math.sqrt(x))
    return y * y == x
  }

  // 判断是否能表示为 4^k*(8m+7)
  const checkAnswer4 = (x) => {
    while (x % 4 == 0) {
      x /= 4
    }
    return x % 8 == 7
  }

  if (isPerfectSquare(n)) {
    return 1
  }
  if (checkAnswer4(n)) {
    return 4
  }
  for (let i = 1; i * i <= n; i++) {
    let j = n - i * i
    if (isPerfectSquare(j)) {
      return 2
    }
  }
  return 3
}
// @lc code=end
