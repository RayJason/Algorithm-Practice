/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let output = []

  // 初级解法
  // for (let n of nums) {
  //   output.push(n * n)
  // }
  // return output.sort((a, b) => a - b)

  for (let i = 0, j = nums.length - 1; i <= j; ) {
    const left = nums[i] * nums[i]
    const right = nums[j] * nums[j]

    // NOTE: unshift的性能较低，建议push后再reverse
    if (left < right) {
      output.push(right)
      // output.unshift(right)
      j--
    } else {
      output.push(left)
      // output.unshift(left)
      i++
    }
  }
  // return output
  return output.reverse()
}
// @lc code=end
