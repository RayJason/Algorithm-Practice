/*
 * @lc app=leetcode.cn id=97 lang=javascript
 *
 * [97] 交错字符串
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  const len1 = s1.length,
    len2 = s2.length,
    len3 = s3.length
  // 长度不合直接返回
  if (len1 + len2 !== len3) return false

  // 初始化二维数组
  const dp = Array(len1 + 1)
    .fill(false)
    .map(() => Array(len2 + 1).fill(false))

  dp[0][0] = true

  // 初始化第一列
  // 表示 s1 的前i位是否构成 s3 的前i位
  for (let i = 1; i < len1 + 1; i++)
    dp[i][0] = dp[i - 1][0] && s1[i - 1] === s3[i - 1]

  // 初始化第二行
  // 表示 s2 的前i位是否构成 s3 的前i位
  for (let i = 1; i < len3 + 1; i++)
    dp[0][i] = dp[0][i - 1] && s2[i - 1] === s3[i - 1]

  // 遍历dp数组
  for (let i = 1; i < len1 + 1; i++) {
    for (let j = 1; j < len2 + 1; j++) {
      dp[i][j] =
        (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]) ||
        (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1])
    }
  }

  // 返回二维数组中最后一个结果
  return dp[len1][len2]
}
// @lc code=end
const s1 = 'aabcc',
  s2 = 'dbbca',
  s3 = 'aadbbbaccc'
console.log(isInterleave(s1, s2, s3))
