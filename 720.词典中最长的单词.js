/*
 * @lc app=leetcode.cn id=720 lang=javascript
 *
 * [720] 词典中最长的单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string}
 */
// sort + hash
var longestWord = function (words) {
  // 存储在Set方便查找
  let set = new Set()
  words.forEach((v) => set.add(v)) 

  // 先按长度排序，再按字典排序
  words.sort((a, b) =>
    a.length === b.length ? a.localeCompare(b) : b.length - a.length
  )

  for (let i = 0; i < words.length; i++) {
    let flag = true
    // 逐字缩减
    for (let j = 1; j < words[i].length; j++) {
      if (!set.has(words[i].substring(0, j))) {
        //查看set中是否有该字符串的每个子串
        flag = false
        break
      }
    }
    // 满足题目要求逐字缩减条件 返回单词
    if (flag) {
      return words[i]
    }
  }
  return ''
}

// Trie
// var longestWord = function (words) {
//   const trie = new Trie()
//   words.forEach((word) => {
//     // 将所有字符串插入trie中
//     trie.insert(word)
//   })
//   let res = ''
//   const _helper = (nodes, path) => {
//     if (
//       path.length > res.length ||
//       (res.length === path.length && res > path)
//     ) {
//       res = path
//     }
//     //{a:{b1:{c1:{isEnd: true}},b2:{c2:{isEnd: true}}}}
//     for (const [key, value] of Object.entries(nodes)) {
//       if (value.isEnd) {
//         // 如果当前字符是某一个字符串的结尾
//         path += key
//         _helper(value, path) //递归寻找
//         path = path.slice(0, -1) //回溯
//       }
//     }
//   }
//   _helper(trie.children, '') //递归寻找那个长度最大的单词
//   return res
// }

// var Trie = function () {
//   this.children = {}
// }

// Trie.prototype.insert = function (word) {
//   let nodes = this.children
//   for (const ch of word) {
//     //循环word
//     if (!nodes[ch]) {
//       //当前字符不在子节点中 则创建一个子节点到children的响应位置
//       nodes[ch] = {}
//     }
//     nodes = nodes[ch] //移动指针到下一个字符
//   }
//   nodes.isEnd = true //字符是否结束
// }

// @lc code=end
