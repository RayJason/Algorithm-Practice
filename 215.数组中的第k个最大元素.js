/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  return nums.sort((a, b) => b - a)[k - 1]

  // 应该使用堆
}
// @lc code=end

// local test
const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6],
  k = 4
// console.log(findKthLargest(nums, k))
