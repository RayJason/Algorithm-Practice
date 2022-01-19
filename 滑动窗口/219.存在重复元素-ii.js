/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  // hash map
  // const map = new Map()

  // for (let i = 0; i < nums.length; i++) {
  //   if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
  //     return true
  //   } else {
  //     map.set(nums[i], i)
  //   }
  // }

  // return false

  // 滑动窗口
  const set = new Set()

  for (let i = 0; i < nums.length; i++) {
    if (i > k) {
      set.delete(nums[i - k - 1])
    }
    if (set.has(nums[i])) {
      return true
    }
    set.add(nums[i])
  }
  
  return false
}
// @lc code=end
