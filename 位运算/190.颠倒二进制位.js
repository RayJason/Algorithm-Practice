/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  // 语法糖
  // let s = Array.from(n.toString(2))
  // s.unshift(...Array(33 - s.length).join(0))
  // s.reverse()

  // return parseInt(s.join(''), 2)

  // 逐位颠倒
  let rev = 0
  for (let i = 0; i < 32 && n > 0; ++i) {
    rev |= (n & 1) << (31 - i)
    n >>>= 1
  }
  return rev >>> 0

  // 位运算分治
  // const M1 = 0x55555555 // 01010101010101010101010101010101
  // const M2 = 0x33333333 // 00110011001100110011001100110011
  // const M4 = 0x0f0f0f0f // 00001111000011110000111100001111
  // const M8 = 0x00ff00ff // 00000000111111110000000011111111

  // n = ((n >>> 1) & M1) | ((n & M1) << 1)
  // n = ((n >>> 2) & M2) | ((n & M2) << 2)
  // n = ((n >>> 4) & M4) | ((n & M4) << 4)
  // n = ((n >>> 8) & M8) | ((n & M8) << 8)

  // return ((n >>> 16) | (n << 16)) >>> 0
}
// @lc code=end

let input = 43261596
console.log(reverseBits(input))
