/*
 * @lc app=leetcode.cn id=1636 lang=javascript
 *
 * [1636] 按照频率将数组升序排序
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  const timesMap = new Map()
  for (const item of nums) {
    const count = timesMap.get(item) || 0
    timesMap.set(item, count + 1)
  }
  const list = [...nums]
  list.sort((a, b) => {
    const mapA = timesMap.get(a)
    const mapB = timesMap.get(b)
    return mapA === mapB ? b - a : mapA - mapB
  })

  return list
}
// @lc code=end

const nums = [-1,1,-6,4,5,-6,1,4,1]
console.log(frequencySort(nums))
