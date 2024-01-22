/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) return false
  const map = {}
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    map[c] = map[c] ? map[c] + 1 : 1
  }
  for (let i = 0; i < t.length; i++) {
    const c = t[i]
    if (!map[c]) {
      return false
    }
    map[c]--
  }
  return Object.values(map).every((v) => v === 0)
}
// @lc code=end
