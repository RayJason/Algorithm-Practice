/*
 * @lc app=leetcode.cn id=1392 lang=javascript
 *
 * [1392] 最长快乐前缀
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPrefix = function (s) {
  if (s.length <= 1) {
    return ''
  } else {
    let len = s.length - 1
    while (len > 0) {
      const prefix = s.substr(0, len)
      const postfix = s.substr(s.length - len, len)
      if (prefix === postfix) {
        return prefix
      }
      --len
    }
    return ''
  }
}
// @lc code=end
