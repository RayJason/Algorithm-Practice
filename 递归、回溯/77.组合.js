/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let result = [] // 最终结果
  let path = [] // 每条分支结果

  const backtracking = (n, k, startIndex) => {
    // 组合满了直接返回，推进结果数组里
    if (path.length === k) {
      result.push([...path]) // 深拷贝
      return
    }

    // 剩余部分如果少于 n-(k-path.length)+1 个，说明凑不够一个组合了，做剪枝
    for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
      // 推入组合
      path.push(i)
      // 进入下一层
      backtracking(n, k, i + 1)
      // 返回上一层
      path.pop()
    }
  }

  backtracking(n, k, 1)
  return result
}
// @lc code=end
