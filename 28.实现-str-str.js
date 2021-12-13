/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // 语法糖 实现目标
  // return haystack.indexOf(needle)

  // 双指针 暴力法
  // if (!needle) return 0
  // for (let i = 0;i <= haystack.length - needle.length;i++) {
  //   if (haystack[i] === needle[0]) {
  //     let flag = true
  //     for (let j = 0; j < needle.length; j++) {
  //       if (haystack[i+j] !== needle[j]) {
  //         flag = false
  //         break
  //       }
  //     }
  //     if (flag) return i
  //   }
  // }
  // return -1

  // KMP算法
  if (!needle) return 0

  // 保存needle前缀
  const pi = new Array(needle.length).fill(0)

  // 遍历needle保存前缀函数
  for (let i = 1, j = 0; i < needle.length; i++) {
    while (j > 0 && needle[i] !== needle[j]) j = pi[j - 1]
    if (needle[i] == needle[j]) j++
    pi[i] = j
  }
  console.log(pi)

  // 求haystack前缀函数
  for (let i = 0, j = 0; i < haystack.length; i++) {
    while (j > 0 && haystack[i] != needle[j]) j = pi[j - 1]
    if (haystack[i] == needle[j]) j++
    if (j === needle.length) return i - needle.length + 1
  }
  return -1
}
// @lc code=end

// local test
const haystack = "aaaaasdfsdfafaf", needle = "bbsdfsdbbsfa"
console.log(strStr(haystack, needle))
