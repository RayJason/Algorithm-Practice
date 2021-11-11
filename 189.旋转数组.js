/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // 方法1 pop unshift 会超时
  // for (let t = 0; t < k; t++) {
  //   nums.unshift(nums.pop())
  // }

  // 方法2 额外数组
  // 时间复杂度：O(n) 空间复杂度O(n)
  // const n = nums.length
  // const newArr = new Array(n)
  // for (let i = 0; i < n; ++i) {
  //   newArr[(i + k) % n] = nums[i]
  // }
  // for (let i = 0; i < n; ++i) {
  //   nums[i] = newArr[i]
  // }

  // 方法2 环形替换
  // 时间复杂度 O(n) 空间复杂度 O(1)
  const gcd = (x, y) => (y ? gcd(y, x % y) : x) // 遍历次数 最大公约数

  const n = nums.length
  k = k % n
  let count = gcd(k, n)
  for (let start = 0; start < count; ++start) {
    let current = start
    let prev = nums[start]
    do {
      const next = (current + k) % n
      const temp = nums[next]
      nums[next] = prev
      prev = temp
      current = next
    } while (start !== current)
  }

  // 方法3 数组翻转
  // 时间复杂度：O(n) 空间复杂度O(1)
  // 1. 翻转所有元素
  // 2. 翻转 [0,kmodn−1] 区间的元素
  // 3. 翻转 [kmodn,n−1] 区间的元素
  // const reverse = (nums, start, end) => {
  //   while (start < end) {
  //     const temp = nums[start]
  //     nums[start] = nums[end]
  //     nums[end] = temp
  //     start += 1
  //     end -= 1
  //   }
  // }

  // k %= nums.length
  // reverse(nums, 0, nums.length - 1)
  // reverse(nums, 0, k - 1)
  // reverse(nums, k, nums.length - 1)
}
// @lc code=end
