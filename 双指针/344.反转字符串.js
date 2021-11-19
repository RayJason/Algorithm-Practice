/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  // 方法1 双指针
  let left = 0,
    right = s.length - 1

  while (left++ < right--) 
  {
    let temp = s[left]
    s[left] = s[right]
    s[right] = temp
  }

  // 方法2 语法糖
  // s.reverse()
}
// @lc code=end
