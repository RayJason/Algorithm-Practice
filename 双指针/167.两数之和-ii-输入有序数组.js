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
  let left = 0,
    right = numbers.length - 1

  while (left < right) {
    if (numbers[left] + numbers[right] === target) return [left + 1, right + 1]

    let mid = left + ((right - left) >> 1)

    if (numbers[left] + numbers[mid] > target) right = mid - 1
    else if (numbers[mid] + numbers[right] < target) left = mid + 1
    else if (numbers[left] + numbers[right] < target) left++
    else if (numbers[left] + numbers[right] > target) right--
  }
}
// @lc code=end
