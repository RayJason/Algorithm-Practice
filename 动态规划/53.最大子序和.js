/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // 动态规划
  let pre = 0,
    maxAns = nums[0]
  nums.forEach((x) => {
    pre = Math.max(pre + x, x) // 之前的，取最大
    maxAns = Math.max(maxAns, pre)
  })
  return maxAns
}
// @lc code=end

// local test
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(nums))
