/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let prev = 0,
    curr = 0

  for (const i of nums) {
    // 循环开始时，curr 表示 dp[k-1]，prev 表示 dp[k-2]
    // dp[k] = max{ dp[k-1], dp[k-2] + i }
    let temp = Math.max(curr, prev + i)
    prev = curr
    curr = temp
    // 循环结束时，curr 表示 dp[k]，prev 表示 dp[k-1]
  }

  return curr
}
// @lc code=end

// local test
// const nums = [2,7,9,3,1]
// console.log(rob(nums));
