/*
 * @lc app=leetcode.cn id=1768 lang=javascript
 *
 * [1768] 交替合并字符串
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  const len1 = word1.length;
  const len2 = word2.length;
  const len = Math.max(len1, len2);
  let res = '';
  for (let i = 0; i < len; i++) {
    if (i < len1) {
      res += word1[i];
    }
    if (i < len2) {
      res += word2[i];
    }
  }
  return res;
};
// @lc code=end

