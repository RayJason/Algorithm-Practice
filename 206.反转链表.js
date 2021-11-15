/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function (head) {
  // 迭代法
  let prev = null, // 指向上一个节点
    curr = head // 指向当前节点
  while (curr) {
    const next = curr.next // 指向下一个节点(的位置) 避免断链
    curr.next = prev // 当前节点的next指向上一个（反转）
    prev = curr // 上一个节点的指针移动到当前
    curr = next // 当前的指针指向下一个节点的位置
  }
  return prev

  // 递归法
  // if (!head || !head.next) return head
  // const p = reverseList(head.next) // 递归head.next
  // head.next.next = head // 反转：head的next的next指向head 
  // head.next = null

  // return p
}
// @lc code=end
