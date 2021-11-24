/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return []

  // 升序
  nums.sort((a, b) => a - b)

  const result = []

  for (let L = 0; L < nums.length; L++) {
    if (nums[L] > 0) return result
    if (L > 0 && nums[L] === nums[L - 1]) continue

    let M = L + 1,
      R = nums.length - 1

    while (M < R) {
      if (nums[L] + nums[M] + nums[R] === 0) {
        result.push([nums[L], nums[M], nums[R]])

        // 跳过重复数字
        while (M < R && nums[M] === nums[M + 1]) M++
        while (M < R && nums[R] === nums[R - 1]) R--
        M++
        R--
      } else if (nums[L] + nums[M] + nums[R] < 0) {
        M++
      } else {
        R--
      }
    }
  }
  return result
}
// @lc code=end

// local test
// const nums = [-1, 0, 1, 2, -1, -4]
// console.log(threeSum(nums))