/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (!head) return null

  let slow = head,
    fast = head

  for (let i = 0; i < n; i++) {
    fast = fast.next
  }

  if (!fast) return head.next

  while (fast.next) {
    slow = slow.next
    fast = fast.next
  }

  slow.next = slow.next.next // 直接操作head 不影响slow的值

  return head
}
// @lc code=end
