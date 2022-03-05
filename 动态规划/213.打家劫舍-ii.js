/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const length = nums.length
  // 边界条件
  if (length === 1) {
    return nums[0]
  } else if (length === 2) {
    return Math.max(nums[0], nums[1])
  }

  // 对比先偷第一家和先偷第二家哪个更大
  return Math.max(robRange(nums, 0, length - 2), robRange(nums, 1, length - 1))
}

const robRange = (nums, start, end) => {
  let first = nums[start],
    second = Math.max(nums[start], nums[start + 1])
    
  for (let i = start + 2; i <= end; i++) {
    const temp = second
    second = Math.max(first + nums[i], second)
    first = temp
  }
  return second
}
// @lc code=end
