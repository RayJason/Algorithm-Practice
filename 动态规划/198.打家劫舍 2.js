/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  /** 思路：动态规划
   * 假如只有1间、假如只有2间、假如只有..间
   * 能偷到的最大金额
   */
  let prev = 0, // nums[k-2] 最大的结果
    curr = 0 // nums[k-1] 最大的结果

  for (const i of nums) {
    const now = Math.max(curr, prev + i) 
    prev = curr
    curr = now
  }

  return curr
}
// @lc code=end
