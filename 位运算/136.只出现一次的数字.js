/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // Map 记录每个数字出现的次数
  // let map = new Map()
  // for (let i of nums) {
  //   if (!map.get(i)) map.set(i, 1)
  //   else map.set(i, 2)
  // }

  // for (const item of map.entries()) {
  //   if (item[1] === 1) return item[0]
  // }

  // 异或运算
  // 重复的数字 异或运算^后会变为0 
  // 因此最后剩下的就是只出现一次的
  let ans = nums[0]
  if (nums.length > 1) {
    for (let i = 1; i < nums.length; i++) {
      ans = ans ^ nums[i]
    }
  }
  return ans
}
// @lc code=end

// local test
const nums = [4, 1, 2, 1, 2]
console.log(singleNumber(nums))
