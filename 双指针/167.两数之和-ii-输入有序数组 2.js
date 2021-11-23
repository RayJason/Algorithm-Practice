/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let first = 0,
    second = numbers.length - 1

  while (second > first) {
    if (numbers[first] + numbers[second] === target) {
      return [first + 1, second + 1]
    } else if (numbers[first] + numbers[second] < target) {
      // first左指针向右移动，之和增大，更接近target
      first++
    } else {
      // second右指针向左移动，之和减少，更接近target
      second--
    }
  }
}
// @lc code=end
