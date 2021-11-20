/*
 * @lc app=leetcode.cn id=328 lang=javascript
 *
 * [328] 奇偶链表
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
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (!head || !head.next) return head

  let odd = head,
    even = head.next
  let temp = even

  while (odd && even && even.next) {
    odd.next = odd.next.next
    even.next = even.next.next

    odd = odd.next
    even = even.next
  }
  odd.next = temp

  return head
}
// @lc code=end
