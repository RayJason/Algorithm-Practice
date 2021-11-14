/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  const LRM = (firstTree, secondTree) => {
    // 如果只存在一棵树，直接返回那一棵
    if (!firstTree || !secondTree) {
      return firstTree || secondTree
    }

    // 直接修改第一棵树
    // 值相加
    firstTree.val += secondTree.val
    // 对左子树和右子树执行同样的操作
    firstTree.left = LRM(firstTree.left, secondTree.left)
    firstTree.right = LRM(firstTree.right, secondTree.right)

    // 返回修改后的第一棵树
    return firstTree
  }

  return LRM(root1, root2)
}
// @lc code=end