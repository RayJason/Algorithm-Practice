/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let l = 0,
    r = nums.length - 1,
    m = 0
  while (l <= r) {
    m = l + ((r - l) >> 1)
    if (nums[m] === target) return m

    if (nums[m] < target) {
      // 目标值在右边
      l = m + 1
    } else {
      // 目标值在左边
      r = m - 1
    }
  }

  // 分别处理如下三种情况
  // 目标值在数组所有元素之前 [0, -1]
  // 目标值插入数组中的位置 [left, right]
  // 目标值在数组所有元素之后的情况 [left, right]
  return r + 1
}
// @lc code=end
