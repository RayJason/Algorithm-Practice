/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  // 广度优先遍历 BFS

  if (!root) {
    return root
  }

  let leftMost = root

  /**
   *     a      b
   *    / \    / \
   *  c    d  e   f
   */

  while (leftMost.left) {
    // 记录每行第一个节点
    let head = leftMost
    while (head) {
      // 修改左节点的next
      // 连接相同父节点 c d
      head.left.next = head.right

      // 修改右节点的next
      // 连接不同父节点 d e
      if (head.next) {
        head.right.next = head.next.left
      }

      // 指针向后移动,移动到最右null结束当前循环
      head = head.next
    }
    // 进入下一行，下一行第一个节点就是这一行的第一个节点的左节点
    // 若leftMost.left为null，说明已遍历完最后一行，结束循环
    leftMost = leftMost.left
  }
  return root
}
// @lc code=end
