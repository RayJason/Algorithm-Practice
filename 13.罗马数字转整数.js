/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  const special = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  }
  let res = 0
  const n = s.length
  for (let i = 0; i < n; i++) {
    const specialChar = s.substring(i, i + 2)
    if (i < n - 1 && special[specialChar]) {
      res += special[specialChar]
      i++
    } else {
      res += map[s[i]]
    }
  }
  return res
}
// @lc code=end
