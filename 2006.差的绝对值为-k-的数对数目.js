/*
 * @lc app=leetcode.cn id=2006 lang=javascript
 *
 * [2006] 差的绝对值为 K 的数对数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
  let res = 0

  // 1. 暴力法
  // for (let i = 1; i < nums.length; i++) {
  //   for (let j = 0; j < i; j++) {
  //     if (Math.abs(nums[i] - nums[j]) === k) res++
  //   }
  // }

  // 2. hash map
  const cnt = new Map()
  for (let j = 0; j < nums.length; ++j) {
    res += (cnt.get(nums[j] - k) || 0) + (cnt.get(nums[j] + k) || 0)
    cnt.set(nums[j], (cnt.get(nums[j]) || 0) + 1)
  }

  return res
}

// const nums = [1, 2, 2, 1],
//   k = 1
// console.log(countKDifference(nums, k))
// @lc code=end
