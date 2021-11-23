/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N 叉树的最大深度
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0
  if (!root.children) return 1

  // 广度优先遍历
  const queue = []
  let height = 0
  queue.push(root)
  while (queue.length) {
    let path = queue.length
    while (path > 0) {
      const node = queue.shift()
      const children = node.children
      for (const child of children) {
        queue.push(child)
      }
      path--
    }
    height++
  }

  return height
}
// @lc code=end
