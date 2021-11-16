/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const k = nums.length

  let result = []
  let path = []

  const backtracking = (n, k, used) => {
    if (path.length === k) {
      result.push([...path])
      return
    }

    for (let i = 0; i < k; i++) {
      // 已存在的元素跳过
      if (used[i]) continue
      // 否则推入组合
      path.push(n[i])
      // 进入下一层
      used[i] = true
      backtracking(n, k, used)
      // 返回上一层
      path.pop()
      used[i] = false
    }
  }

  backtracking(nums, nums.length, [])
  return result
}
// @lc code=end
