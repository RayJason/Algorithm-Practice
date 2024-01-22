/*
 * @lc app=leetcode.cn id=410 lang=javascript
 *
 * [410] 分割数组的最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function (nums, k) {
  function check(mx) {
    let cnt = 1
    let s = 0
    for (const x of nums) {
      if (s + x <= mx) {
        s += x
      } else {
        // 新划分一段
        if (cnt++ === k) {
          return false
        }
        s = x
      }
    }
    return true
  }

  let right = _.sum(nums)
  let left = Math.max(Math.max(...nums) - 1, (right - 1) / k)
  while (left + 1 < right) {
    const mid = Math.floor((left + right) / 2)
    if (check(mid)) {
      right = mid
    } else {
      left = mid
    }
  }
  return right
}
// @lc code=end
