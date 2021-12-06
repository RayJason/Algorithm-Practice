/*
 * @lc app=leetcode.cn id=1816 lang=javascript
 *
 * [1816] 截断句子
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
  return s.split(' ').splice(0,k).join(' ')
};
// @lc code=end

// local test
const s = "Hello how are you Contestant", k = 2
console.log(truncateSentence(s,k));