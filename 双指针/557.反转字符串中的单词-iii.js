/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// const s = "Let's take LeetCode contest"
var reverseWords = function (s) {
  let arrs = s.split(' ')

  let reverseArrs = []
  for (let arr of arrs) {
    let reverseArr = Array.from(arr).reverse()
    reverseArrs.push(reverseArr.join(''))
  }
  return reverseArrs.join(' ')
}
// console.log(reverseWords(s)); 

// @lc code=end
