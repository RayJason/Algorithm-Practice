/*
 * @lc app=leetcode.cn id=709 lang=javascript
 *
 * [709] 转换成小写字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  // 语法糖
  // return s.toLowerCase()

  // ascii码
  // 大写字母 ASCII 码: [65, 90]
  // 小写字母 ASCII 码: [97, 122]
  const sn = [] // 存放小写结果
  for (let ch of s) {
    if (ch.charCodeAt() >= 65 && ch.charCodeAt() <= 90) {
      // 按位运算 直接+32也可以
      ch = String.fromCharCode(ch.charCodeAt() | 32)
    }
    sn.push(ch)
  }
  return sn.join('')
}
// @lc code=end
