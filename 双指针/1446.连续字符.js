/*
 * @lc app=leetcode.cn id=1446 lang=javascript
 *
 * [1446] 连续字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  // 双指针
  // let slow = 0,
  //   fast = 0,
  //   len = s.length,
  //   max = 1
  // while (++fast < len) {
  //   let l = 1
  //   while (s[fast] === s[slow]) {
  //     fast++
  //     l++
  //   }
  //   max = Math.max(l, max)
  //   slow = fast
  // }
  // return max

  // 优化简写
  let max = 1, cur = 1

  for (let i = 1; i < s.length;i++){
    if (s[i] === s[i-1]) {
      cur++
      max = Math.max(max, cur)
    } else {
      cur = 1
    }
  }

  return max
}
// @lc code=end
const s = 'abbcccddddeeeeedcba'
console.log(maxPower(s))
