/*
 * @lc app=leetcode.cn id=2104 lang=javascript
 *
 * [2104] 子数组范围和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function (nums) {
  let result = 0

  for (let i = 0; i < nums.length; i++) {
    let minVal = Number.MAX_VALUE,
      maxVal = -Number.MAX_VALUE
    for (let j = i; j < nums.length; j++) {
      minVal = Math.min(minVal, nums[j])
      maxVal = Math.max(maxVal, nums[j])
      result += maxVal - minVal
    }
  }

  return result
}
// @lc code=end
