/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const len = nums.length
  if (len < 4) return []

  // 升序
  nums.sort((a, b) => a - b)
  const res = []

  for (let a = 0; a < len - 3; a++) {
    // 去重a
    if (a > 0 && nums[a] === nums[a - 1]) continue

    for (let b = a + 1; b < len - 2; b++) {
      // 去重b
      if (b > a + 1 && nums[b] === nums[b - 1]) continue

      let c = b + 1,
        d = len - 1

      while (c < d) {
        const sum = nums[a] + nums[b] + nums[c] + nums[d]
        
        if (sum < target) {
          c++
          continue
        }
        if (sum > target) {
          d--
          continue
        }

        res.push([nums[a], nums[b], nums[c], nums[d]])
        while (c < d && nums[c] === nums[++c]);
        while (c < d && nums[d] === nums[--d]);
      }
    }
  }
  return res
}
// @lc code=end
