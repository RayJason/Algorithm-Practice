/*
 * @lc app=leetcode.cn id=524 lang=javascript
 *
 * [524] 通过删除字母匹配到字典里最长单词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function (s, dictionary) {
  // 双指针
  let res = ''

  for (const t of dictionary) {
    let fast = 0,
      slow = 0
    while (fast < t.length && slow < s.length) {
      if (t[fast] === s[slow]) {
        ++fast
      }
      ++slow
    }
    
    if (fast === t.length) {
      if (t.length > res.length || (t.length === res.length && t < res)) {
        res = t
      }
    }
  }
  return res
}
// @lc code=end
