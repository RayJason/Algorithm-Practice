/*
 * @lc app=leetcode.cn id=784 lang=javascript
 *
 * [784] 字母大小写全排列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  let res = []

  // i 第i个数
  let backtracking = function (i, str) {
    // 1. 如果是数字直接加进str里
    while (!isNaN(s[i])) {
      str += s[i++]
    }

    // 3. 转换完毕 返回
    if (i == s.length) {
      res.push(str)
      return
    }

    // 2. 遇到一个非数字
    // 拼接小写和大写
    backtracking(i + 1, str + s[i].toLowerCase())
    backtracking(i + 1, str + s[i].toUpperCase())
  }

  backtracking(0, '')
  return res
}
// @lc code=end
