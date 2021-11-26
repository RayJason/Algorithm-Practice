/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  // 官解 迭代
  // while (root) {
  //   if (val === root.val) return root
  //   root = val < root.val ? root.left : root.right
  // }
  // return null

  // 官解 递归
  // if (!root) return null
  // if (root.val === val) return root
  // return searchBST(val < root.val ? root.left : root.right, val)

  /** 以下解法未考虑是二叉搜索树 */

  // 广度优先搜索
  // if (!root) return null
  // if (root.val === val) return root
  // let queue = []
  // queue.push(root)
  // while (queue.length) {
  //   for (let i = queue.length; i > 0; i--) {
  //     let node = queue.shift()
  //     if (node.val === val) return node

  //     node.left && queue.push(node.left)
  //     node.right && queue.push(node.right)
  //   }
  // }
  // return null

  // 深度优先搜索
  // if (!root) return null
  // if (root.val === val) return root
  // const dfs = (node) => {
  //   if (!node) return null

  //   if (node.val === val) return node

  //   // 左子树
  //   const leftNode = dfs(node.left)
  //   // 右子树
  //   const rightNode = dfs(node.right)

  //   return leftNode || rightNode || null
  // }
  // return dfs(root)

  // 深度优先搜索 简写
  if (!root) return null
  if (root.val === val) return root
  return searchBST(root.left, val) || searchBST(root.right, val) || null
}
// @lc code=end
