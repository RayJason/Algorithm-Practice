/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference1 = function (s, t) {
  const map = {}
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    map[char] = map[char] ? map[char] + 1 : 1
  }
  for (let i = 0; i < t.length; i++) {
    const char = t[i]
    if (map[char]) {
      map[char]--
    } else {
      return char
    }
  }
  return ''
}

var findTheDifference2 = function (s, t) {
  s = s.split('').sort();
  t = t.split('').sort();
  for (let i = 0; i < t.length; i++) {
    if (s[i] !== t[i]) {
      return t[i];
    }
  }
  return ''
}

var findTheDifference3 = function (s, t) {
  let res = 0
  for (let i = 0; i < s.length; i++) {
    res ^= s[i].charCodeAt()
  }
  for (let i = 0; i < t.length; i++) {
    res ^= t[i].charCodeAt()
  }
  return String.fromCharCode(res)
}

var findTheDifference = function (s, t) {
  let res = 0
  for (let i = 0; i < s.length; i++) {
    res += t.charCodeAt(i) - s.charCodeAt(i)
  }
  res += t.charCodeAt(t.length - 1)
  return String.fromCharCode(res)
}
// @lc code=end
