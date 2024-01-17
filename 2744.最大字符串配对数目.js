/*
 * @lc app=leetcode.cn id=2744 lang=javascript
 *
 * [2744] 最大字符串配对数目
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
  const length = words.length
  let count = 0
  const map = new Map()
  for (let i = 0; i < length; i++) {
    const word = words[i]
    if (!word) continue
    const reverseWord = word.split('').reverse().join('')
    if (map.has(reverseWord)) {
      count++
      map.delete(reverseWord)
    } else {
      map.set(word, i)
    }
  }
  return count
}
// @lc code=end

const words = ['cd', 'ac', 'dc', 'ca', 'zz']
console.log(maximumNumberOfStringPairs(words))
