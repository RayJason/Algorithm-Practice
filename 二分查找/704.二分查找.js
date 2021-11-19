/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 * 二分查找前提条件：
 * 1. 有序数组
 * 2. 无重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // 语法糖
  // runtime beats 56.29%
  // memory beats 58.78% 41.2mb

  // return nums.indexOf(target)

  // 二分法 左闭右闭区间
  // runtime beats 96.98%
  // memory beats 62.01% 41.2mb

  let l = 0,
    r = nums.length - 1
  // 区间 [l, r]
  while (l <= r) {
    let mid = (l + r) >> 1 // (l + r) / 2
    if (nums[mid] === target) return mid

    // true 在右边 false 在左边
    let isSmall = nums[mid] < target
    l = isSmall ? mid + 1 : l
    r = isSmall ? r : mid - 1
  }
  return -1
}
// @lc code=end
