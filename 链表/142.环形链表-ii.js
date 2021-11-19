/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let fast = head
  let slow = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next

    if (slow === fast) break
  }

  if (!fast || !fast.next ) return null;

  slow = head
  while(slow && fast) {
    if (slow == fast) break
    slow = slow.next
    fast = fast.next
  }

  return fast
}
// @lc code=end
