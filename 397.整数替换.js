/*
 * @lc app=leetcode.cn id=397 lang=javascript
 *
 * [397] 整数替换
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function (n) {
  let ans = 0
  while (n !== 1) {
    // console.log(n)
    if (n % 2 === 0) {
      n >>= 1
      ans++
    } else if (n % 4 === 1) {
      ans += 2
      n >>= 1
    } else {
      if (n === 3) {
        ans += 2
        n = 1
      } else {
        ans += 2
        n = (n >> 1) + 1
      }
    }
  }

  return ans
}
// @lc code=end

// local test
let n = 4
console.log(integerReplacement(n))
