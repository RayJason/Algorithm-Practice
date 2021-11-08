/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let l = 1,
      r = n,
      mid = 0
    while (l < r) {
      mid = l + ((r - l) >> 1) // (l + r)/2 容易溢出 l + (r - l) / 2就不会
      if (isBadVersion(mid)) {
        r = mid // 答案在区间 [left, mid] 中
      } else {
        l = mid + 1 // 答案在区间 [mid+1, right] 中
      }
    }
    return l
  }
}
// @lc code=end
