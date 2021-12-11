/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  // 二叉搜索树 右子树的值 > 根节点的值 > 左子树的值
  // 中序遍历
  const d = []
  while (root || d.length) {
    // 左
    while (root) {
      d.push(root)
      // 二叉搜索树左边最小，直冲左下角
      root = root.left
    }
    // 中
    root = d.pop()
    if (--k === 0) return root.val
    // 右
    root = root.right
  }
  return -1 // never
}
// @lc code=end
