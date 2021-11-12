/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const len1 = s1.length
  const len2 = s2.length
  const count1 = new Array(26).fill(0)
  const count2 = new Array(26).fill(0)

  for (let i = 0; i < len1; i++) {
    count1[s1[i].charCodeAt(0) - 97]++
  }

  let start = 0

  for (let i = 0; i < len2; i++) {
    count2[s2[i].charCodeAt(0) - 97]++

    while (
      start <= i &&
      count2[s2[start].charCodeAt(0) - 97] >
        count1[s2[start].charCodeAt(0) - 97]
    ) {
      count2[s2[start].charCodeAt(0) - 97]--
      start++
    }
    if (count1.join('') === count2.join('')) {
      return true
    }
  }

  return false
}
// @lc code=end

// local test
// let str1 = 'ab',
//   str2 = 'eidbaooo'
// console.log(checkInclusion(str1, str2))
