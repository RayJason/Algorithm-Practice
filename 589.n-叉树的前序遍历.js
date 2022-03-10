/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
/** 迭代法 */
 var preorder = function(root) {
  const res = [];
  if (root == null) {
      return res;
  }

  const stack = [];
  stack.push(root);
  while (stack.length) {
      const node = stack.pop();
      res.push(node.val);
      for (let i = node.children.length - 1; i >= 0; --i) {
          stack.push(node.children[i]);
      }
  }
  return res;
};

/** 递归法 */
// var preorder = function (root) {
//   const res = []
//   helper(root, res)
//   return res
// }

// const helper = (root, res) => {
//   // 如果有children就下一层进入
//   // 如果没有children就跳到兄弟节点
//   // 如果节点是null则返回上一层
//   if (root === null) {
//     return
//   }
//   res.push(root.val)
//   for (const ch of root.children) {
//     helper(ch, res)
//   }
// }
// @lc code=end
