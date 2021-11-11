/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
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
var middleNode = function (head) {
  if (!head) return null

  let slow = head,
    fast = head

    // 快慢指针 v(fast) = 2v(slow) 
    // 快指针到终点时，慢指针在一半
    // 则慢指针的指向在中间节点，偶数也是
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }

  return slow
}

// @lc code=end
