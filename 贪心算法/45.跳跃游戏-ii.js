/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * 逐个遍历
 * 找能跳的最远的
 * 
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let jumpTimes = 0,
    end = 0, // 当前能跳的边界
    max = 0

  for (let i = 0; i < nums.length - 1; i++) {
    max = Math.max(max, nums[i] + i)
    if (i === end) {
      // 到边界后重新选择边界
      end = max
      jumpTimes++
    }
  }

  return jumpTimes
}
// @lc code=end
