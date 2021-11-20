/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // 把链表值存进数组里后用双指针
  // 时间复杂度O(n)
  // 空间复杂度 O(n)
  // let arr = []
  // while (head) {
  //   arr.push(head.val)
  //   head = head.next
  // }

  // for (let start = 0, end = n - 1; start <= end; start++, end--) {
  //   if (arr[start] !== arr[end]) return false
  // }
  // return true

  // 快慢指针
  // 切割链表翻转对比
  if (!head || !head.next) return true

  let slow = head,
    fast = head,
    prev

  while (fast && fast.next) {
    prev = slow
    slow = slow.next
    fast = fast.next.next
  }
  prev.next = null // 将head一分为二 
  
  // 反转slow链表 参考206
  let head2 = null // 指向上一个节点

  while (slow) {
    const next = slow.next // 指向下一个节点(的位置) 避免断链
    slow.next = head2 // 当前节点的next指向上一个（反转）
    head2 = slow // 上一个节点的指针移动到当前
    slow = next // 当前的指针指向下一个节点的位置
  }

  // 对比head和head2
  while (head && head2) {
    if (head.val !== head2.val) return false
    head = head.next
    head2 = head2.next
  }
  return true
}
// @lc code=end
