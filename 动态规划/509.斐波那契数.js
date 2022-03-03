/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  /** 递归法 */
  // let num1 = 0
  // let num2 = 1

  // if (n < 2) return n

  // return fib(n-1) + fib(n-2)

  /** 循环遍历 动态规划 */
  if (!n) return 0
  let num1 = 1 // 第一个数
  let num2 = 1 // 第二个数

  for (let i = 2; i < n; i++) {
    num2 += num1
    num1 = num2 - num1 // num1变成原本的num2
  }

  return num2
}
// @lc code=end

console.log(fib(25))
