/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  // 暴力法
  // let sum = 0
  // for (let i = 0; i < 32; i++) if ((n & (1 << i)) !== 0) sum++
  // return sum

  // 语法糖
  // return n.toString(2).replaceAll('0', '').length

  // 位运算优化
  // let sum = 0
  // while (n) {
  //   n &= n - 1
  //   sum++
  // }
  // return sum

  // 变态方法 复杂度极低
  n = n - ((n >>> 1) & 0x55555555)
  n = (n & 0x33333333) + ((n >>> 2) & 0x33333333)
  n = (n + (n >>> 4)) & 0x0f0f0f0f
  n = n + (n >>> 8)
  n = n + (n >>> 16)
  return n & 0x3f
}
// @lc code=end
let a = 1
console.log(hammingWeight(a))
