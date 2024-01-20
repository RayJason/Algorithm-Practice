/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 找出字符串中第一个匹配项的下标
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr1 = function(haystack, needle) {
  let i = 0
  let j = 0

  while (i < haystack.length && j < needle.length) {
    if (haystack[i] === needle[j]) {
      i++
      j++
    } else {
      i = i - j + 1
      j = 0
    }
  }
  
  return j === needle.length ? i - j : -1
};

var strStr = function(haystack, needle) {
  if (!needle) return 0
  return haystack.indexOf(needle)
};
// @lc code=end

