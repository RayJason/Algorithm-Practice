/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern1 = function (s) {
  const n = s.length
  for (let i = 1; i * 2 <= n; i++) {
    if (n % i === 0) {
      let match = true
      for (let j = i; j < n; j++) {
        if (s[j] !== s[j - i]) {
          match = false
          break
        }
      }
      if (match) {
        return true
      }
    }
  }
  return false
}

var repeatedSubstringPattern2 = function (s) {
  return (s + s).indexOf(s, 1) !== s.length
}

var repeatedSubstringPattern = function (s) {
  return !!/^(.+)\1+$/.test(s)
}
// @lc code=end
