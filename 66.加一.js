/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const initNumber = digits.join('')
  if (initNumber.length > 15) return (BigInt(initNumber) + 1n).toString().split('')

  const result = Number(initNumber) + 1
  return result.toString().split('')
};
// @lc code=end

const a = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
console.log(plusOne(a))