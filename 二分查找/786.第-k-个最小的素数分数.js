/*
 * @lc app=leetcode.cn id=786 lang=javascript
 *
 * [786] 第 K 个最小的素数分数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function (arr, k) {
  // 暴力法
  // const map = new Map()

  // for (let child = 0; child < arr.length - 1; child++)
  //   for (let mom = child + 1; mom < arr.length; mom++)
  //     map.set(arr[child] / arr[mom], [arr[child], arr[mom]])

  // const sortArr = Array.from(map.keys()).sort((a, b) => a - b)
  // return map.get(sortArr[k - 1])

  // 二分查找 + 双指针 官解
  const n = arr.length
  let left = 0.0,
    right = 1.0
  while (true) {
    const mid = (left + right) / 2
    let i = -1,
      count = 0
    // 记录最大的分数
    let x = 0,
      y = 1

    for (let j = 1; j < n; ++j) {
      while (arr[i + 1] / arr[j] < mid) {
        ++i
        if (arr[i] * y > arr[j] * x) {
          x = arr[i]
          y = arr[j]
        }
      }
      count += i + 1
    }

    if (count === k) {
      return [x, y]
    }
    if (count < k) {
      left = mid
    } else {
      right = mid
    }
  }
}

// @lc code=end

// local test
const arr = [1, 2, 3, 5],
  k = 3
console.log(kthSmallestPrimeFraction(arr, k))
