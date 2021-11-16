/*
 * @lc app=leetcode.cn id=318 lang=javascript
 *
 * [318] 最大单词长度乘积
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  // 声明一个Map存储bitmask码对应单词的长度
  const bitmaskMap = new Map()

  // 预计数每个单词的bitmask
  for (let i = 0; i < words.length; i++) {
    let bitmask = 0
    for (const c of words[i]) {
      bitmask |= 1 << (c.charCodeAt() - 'a'.charCodeAt())
    }
    if (bitmaskMap.has(bitmask)) {
      // 如果有相同bitmask，对比单词长度，更长的留下
      bitmaskMap.set(
        bitmask,
        Math.max(bitmaskMap.get(bitmask), words[i].length)
      )
    } else {
      bitmaskMap.set(bitmask, words[i].length)
    }
  }

  let ans = 0
  for (const x of bitmaskMap.keys()) {
    for (const y of bitmaskMap.keys()) {
      // 如果两个单词`&`运算等于0，说明没有重复字母
      if ((x & y) == 0) {
        ans = Math.max(ans, bitmaskMap.get(x) * bitmaskMap.get(y))
      }
    }
  }

  return ans
}
// @lc code=end

// local test
// const s = ['abcw', 'baz', 'foo', 'bar', 'xtfn', 'abcdef']
// console.log(maxProduct(s))
