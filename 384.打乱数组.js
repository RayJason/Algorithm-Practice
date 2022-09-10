/*
 * @lc app=leetcode.cn id=384 lang=javascript
 *
 * [384] 打乱数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums
}

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.nums
}

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const temp = this.nums.concat()
  for (let i = 0; i < temp.length; i++) {
    const idx = Math.floor(Math.random() * (temp.length - i)) + i
    const tmp = temp[idx]
    temp[idx] = temp[i]
    temp[i] = tmp
  }
  return temp
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// @lc code=end
