/*
 * @lc app=leetcode.cn id=594 lang=javascript
 *
 * [594] 最长和谐子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  let max = 0

  // 滑动窗口
  nums.sort((a, b) => a - b) // 先正序排序
  for (let start = 0, end = 0; end < nums.length; end++) {
    /**
     * 如果end指向的数字减start指向的数字大于1，则start++。直到指向下一个数字
     * 以下:
     * b - a === 1 
     * c - a > 1
    开始执行while循环时的状态：
    |   1   |   2   |   3   |   4   |   5   |   6   |   7   |
    | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
    |   a   |   a   |   a   |   b   |   b   |   c   |   c   |
    | start |   _   |   _   |   _   |   _   |  end  |   _   |
    
    结束while循环的状态：
    |   1   |   2   |   3   |   4   |   5   |   6   |   7   |
    | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
    |   a   |   a   |   a   |   b   |   b   |   c   |   c   |
    |   _   |   _   |   _   | start |   _   |  end  |   _   |
    */
    while (start < end && nums[end] - nums[start] > 1) start++

    // 更新最大长度
    if (nums[end] - nums[start] == 1) max = Math.max(max, end - start + 1)
  }

  // hash map
  // const map = new Map() // 记录每个数字出现的次数
  // for (const n of nums) map.set(n, map.has(n) ? map.get(n) + 1 : 1)

  // for (const n of nums) {
  //   // 计算过的数字已被删除直接跳过
  //   if (!map.has(n)) continue

  //   if (map.has(n - 1)) {
  //     max = Math.max(max, map.get(n) + map.get(n - 1))
  //   }
  //   if (map.has(n + 1)) {
  //     max = Math.max(max, map.get(n) + map.get(n + 1))
  //   }

  //   // 计算过的key删除
  //   map.delete(n)
  // }

  return max
}
// @lc code=end

// local test
// const nums = [1, 2, 2, 3, 4, 5, 1, 1, 1, 1]
// console.log(findLHS(nums))
