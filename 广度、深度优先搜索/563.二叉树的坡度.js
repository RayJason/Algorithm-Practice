/*
 * @lc app=leetcode.cn id=563 lang=javascript
 *
 * [563] 二叉树的坡度
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
 * @return {number}
 */
var findTilt = function (root) {
  let slopeSum = 0 // 记录坡度和

  const dfs = (node) => {
    if (!node) return 0

    // 左子树的val合
    let leftVals = dfs(node.left)
    // 右子树的val合
    let rightVals = dfs(node.right)

    // 计算当前节点坡度并累加
    slopeSum += Math.abs(leftVals - rightVals)

    // 返回当前节点val合
    return node.val + leftVals + rightVals
  }

  dfs(root)
  return slopeSum
}
// @lc code=end
