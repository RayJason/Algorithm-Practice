/*
 * @lc app=leetcode.cn id=2788 lang=javascript
 *
 * [2788] 按分隔符拆分字符串
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
  return words.join(separator).split(separator).filter(Boolean);
};
// @lc code=end

