/*
 * @lc app=leetcode.cn id=804 lang=javascript
 *
 * [804] 唯一摩尔斯密码词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  const set = new Set()
  const morseMap = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
  ]

  for (const word of words) {
    let wordMorse = ''
    for (const ch of word) {
      wordMorse += morseMap[ch.charCodeAt() - 97]
    }
    set.add(wordMorse)
  }
  return set.size
}
// @lc code=end

// const words = ["a"]
// console.log(uniqueMorseRepresentations(words));

