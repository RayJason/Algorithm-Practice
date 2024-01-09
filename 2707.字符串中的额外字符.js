/*
 * @lc app=leetcode.cn id=2707 lang=javascript
 *
 * [2707] 字符串中的额外字符
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
const minExtraChar = function (s, dictionary) {
  const dp = Array(s.length + 1).fill(Infinity);
  dp[0] = 0;
  
  // 将字典转换为集合以便快速查找
  const wordSet = new Set(dictionary);

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      // 判断 s[j...i-1] 是否是字典中的单词
      if (wordSet.has(s.substring(j, i))) {
        dp[i] = Math.min(dp[i], dp[j] + i - j - s.substring(j, i).length);
      }
    }
    // 如果没有找到匹配的单词，则将前一个状态的额外字符数加1（因为这一个字符没有被匹配）
    dp[i] = Math.min(dp[i], dp[i - 1] + 1);
  }

  // 返回处理整个字符串所需要的最少的额外字符数量
  return dp[s.length];
};
// @lc code=end
