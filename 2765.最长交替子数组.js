/*
 * @lc app=leetcode.cn id=2765 lang=javascript
 *
 * [2765] 最长交替子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSubarray = function (nums) {
  let res = -1
  const n = nums.length
  let firstIndex = 0

  for (let i = 1; i < n; i++) {
    const length = i - firstIndex + 1
    if (nums[i] - nums[firstIndex] === (length - 1) % 2) {
      res = Math.max(res, length)
    } else {
      if (nums[i] - nums[i - 1] === 1) {
        firstIndex = i - 1
        res = Math.max(res, 2)
      } else {
        firstIndex = i
      }
    }
  }
  return res
}
// @lc code=end
