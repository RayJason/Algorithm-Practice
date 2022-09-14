/*
 * @lc app=leetcode.cn id=1619 lang=javascript
 *
 * [1619] 删除某些元素后的数组均值
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
  arr.sort((a, b) => a - b)
  const n = arr.length
  const removeCount = Math.floor(n * 0.05)
  let sum = 0
  for (let i = removeCount; i < n - removeCount; i++) {
    sum += arr[i]
  }

  return sum / (n - 2 * removeCount)
}
// @lc code=end

const arr = [4,8,4,10,0,7,1,3,7,8,8,3,4,1,6,2,1,1,8,0,9,8,0,3,9,10,3,10,1,10,7,3,2,1,4,9,10,7,6,4,0,8,5,1,2,1,6,2,5,0,7,10,9,10,3,7,10,5,8,5,7,6,7,6,10,9,5,10,5,5,7,2,10,7,7,8,2,0,1,1]
console.log(trimMean(arr))
