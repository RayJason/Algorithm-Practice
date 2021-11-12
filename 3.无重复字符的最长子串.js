/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  const len = s.length
  if (len <= 1) return len

  // left收缩窗口、right扩展窗口
  let left = 0,
    right = 0,
    maxLen = 0

  // 优化前：使用Set记录出现的元素
  // 问题：left要一次次移动到right遇到的重复元素上次出现的地方
  // const set = new Set()
  // while (right < len) {
  //   if (!set.has(s[right])) {
  //     // 如果不重复，就扩张窗口，将元素添加到Set中
  //     // 并更新最大长度
  //     maxLen = Math.max(maxLen, right - left + 1)
  //     set.add(s[right])
  //     right++
  //   } else {
  //     // 如果元素重复，就收缩窗口，移除元素
  //     // 一直执行到right现在遇到的重复元素上一次出现的地方+1
  //     set.delete(s[left])
  //     left++
  //   }
  // }


  // 优化后：哈希映射
  // left直接跳到right遇到的重复元素上次出现的位置 + 1
  const map = new Map()

  while (right < len) {
    // 2. 当right遇到重复元素，更新left位置到第一个“被重复”元素的下一位
    const rightCharIndex = map.has(s[right]) ? map.get(s[right]) : -1
    // 如果后面的窗口有在前面窗口中重复的元素，其rightCharIndex + 1小于left，因此也不会更新left的值
    left = Math.max(left, rightCharIndex + 1)

    // 3. 更新最大长度
    maxLen = Math.max(maxLen, right - left + 1)

    // 1. 记录right经过的元素和元素索引
    map.set(s[right], right)
    right++
  }

  return maxLen
}
// @lc code=end

// local TEST
// let str = 'dvdfbb'
// console.log(lengthOfLongestSubstring(str))
