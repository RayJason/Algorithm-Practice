/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (!head) return head

  // 开头就有符合条件的val，直接清掉
  while (head && head.val === val) {
    head = head.next
  }

  // 设一个index指向head
  let index = head
  // 如果index（head）不为空且后面还有元素执行while循环
  // 直到链尾index.next为null
  while (index && index.next) {
    if (index.next.val === val) {
      // 如果index的next值等于val，删除next元素
      // index不++，下一次循环再判断新的next元素是否还等于val
      index.next = index.next.next
    } else {
      index = index.next
    }
  }

  return head
}
// @lc code=end
