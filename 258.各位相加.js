/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let result = num

  while (result.toString().length > 1) {
    let total = 0
    result
      .toString()
      .split('')
      .forEach((number) => {
        total += Number(number)
      })
    result = total
  }

  return result

  /** Math */
  // return (num - 1) % 9 + 1;
}
// @lc code=end