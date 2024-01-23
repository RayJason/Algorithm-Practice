/*
 * @lc app=leetcode.cn id=1502 lang=javascript
 *
 * [1502] 判断能否形成等差数列
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  if (arr.length <= 2) return true
  arr.sort((a, b) => a - b)
  const n = arr.length
  const d = arr[1] - arr[0]
  for (let i = 2; i < n; i++) {
    if (arr[i] - arr[i - 1] !== d) return false
  }
  return true
}
// @lc code=end
