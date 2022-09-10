/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (!nums || nums.length === 0) return

  let slow = 0,
    fast = 0
  for (; fast < nums.length; fast++) {
    if (nums[fast] != 0) {
      // 1. nums[fast]指向不为0时，双指针都++
      if (fast > slow) {
        // 3. 此时fast领先slow，slow一定指向0
        // 因此可以直接对调
        nums[slow] = nums[fast]
        nums[fast] = 0
      }
      // 4. 对调后slow++双指针又都指向0了
      slow++
    }
    // 2. 当nums[fast]指向0时，只有fast++
  }
  // return nums
}
// @lc code=end

// LOCAL TEST
// const input = [1,2,0,5,0,35,2,6]
// console.log(moveZeroes(input));