/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = []
  const map = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']'],
  ])

  for (let i of s) {
    if (map.has(i)) {
      stack.push(i)
    } else {
      if (stack.length === 0 || map.get(stack[stack.length - 1]) !== i)
        return false
      else stack.pop()
    }
  }
  return stack.length === 0
}
// @lc code=end

// local test
const s = '()[]{}'
isValid(s)
