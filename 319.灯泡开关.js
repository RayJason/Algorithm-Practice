/*
 * @lc app=leetcode.cn id=319 lang=javascript
 *
 * [319] 灯泡开关
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
  // 在 [1,n] 的完全平方数的个数
  return Math.floor(Math.sqrt(n));
};
// @lc code=end

