/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let n = nums.length,
    reach = 0 // 可以到达的最远位置
  for (let i = 0; i <= reach && reach < n - 1; ++i) {
    reach = Math.max(i + nums[i], reach)
  }
  return reach >= n - 1

  /** 从后往前 */
  // let n = nums.length,
  //   last = n - 1
  // for (let i = n - 2; i >= 0; i--) {
  //   if (i + nums[i] >= last) {
  //     last = i
  //   }
  // }
  // return last === 0
}
// @lc code=end
