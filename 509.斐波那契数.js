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
var fib = function(n) {
  if (!n) return 0
  // 循环解法
  var num1 = 1
  var num2 = 1
  for (var i = 2; i < n; i++) {
    num2 += num1
    num1 = num2 - num1
  } 
  return num2

  // 斐波那契数列公式法
  // const sqrt_5 = Math.sqrt(5)
  // const fib_n =
  //   Math.pow((1 + sqrt_5) / 2, n) - Math.pow((1 - sqrt_5) / 2, n)
  // return Math.round(fib_n / sqrt_5)
};
// @lc code=end

// local test
// console.log(fib(30));
