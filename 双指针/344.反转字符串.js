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
  for (let left = 0, right = s.length - 1; left < right; ++left, --right) {
    ;[s[left], s[right]] = [s[right], s[left]]
  }

  // 方法2 语法糖
  // s.reverse()
}
// @lc code=end

// local test
let s = ["A"," ","m","a","n",","," ","a"," ","p","l","a","n",","," ","a"," ","c","a","n","a","l",":"," ","P","a","n","a","m","a"]
reverseString(s)
console.log(s)
