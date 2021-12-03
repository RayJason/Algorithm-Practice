/*
 * @lc app=leetcode.cn id=1005 lang=javascript
 *
 * [1005] K 次取反后最大化的数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  nums.sort((a, b) => a - b)
  for (let i = 0; i < k; i++) {
    if (nums[i] > 0) {
      if ((k - i) % 2 === 1) {
        // 剩余奇数次
        if (i > 0 && Math.abs(nums[i - 1]) < Math.abs(nums[i])) {
          nums[i - 1] = -nums[i - 1]
        } else {
          nums[i] = -nums[i]
        }
      }

      return eval(nums.join('+'))
    } else {
      // nums[i] <= 0
      if (nums[i] !== undefined) {
        nums[i] = -nums[i]
      } else {
        nums[nums.length - 1] = -nums[nums.length - 1]
      }
    }
  }
  return eval(nums.join('+'))
}
// @lc code=end
// local test
const nums = [3,-1,0,2],
  k = 3
console.log(largestSumAfterKNegations(nums, k))
