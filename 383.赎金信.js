/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  // map暴力法
  const map = new Map()
  for (let m of magazine) {
    if (map.has(m)) {
      map.set(m, map.get(m) + 1)
    } else {
      map.set(m, 1)
    }
  }

  for (let r of ransomNote) {
    if (!map.has(r) || map.get(r) - 1 < 0) return false
    else {
      map.set(r, map.get(r) - 1)
    }
  }
  return true
}
// @lc code=end

// local test
const ransomNote = "", magazine = "dfs"
console.log(canConstruct(ransomNote, magazine))
