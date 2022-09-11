/*
 * @lc app=leetcode.cn id=857 lang=javascript
 *
 * [857] 雇佣 K 名工人的最低成本
 * 2022.09.11
 * 贪心算法 + 优先队列
 * 设一个工资组中权重表示为 wage[i] / quality[i]。
 * 当我们以某一个工人 x 作为一个工资组中权重最高时，工资组中其他人员只需要在权重小于工人 x 的集合中选择工作质量最少的 k−1 名工人来组成工资组即可。
 * 此时便能达到以工人 x 为权重最高的工资组的总工作量最小，从而达到以工人 x 为权重最高的工资组的最小工资开销。
 */

// @lc code=start
/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */
var mincostToHireWorkers = function (quality, wage, k) {
  const n = quality.length // 工人总数
  const h = new Array(n).fill(0).map((_, i) => i)
  h.sort((a, b) => {
    return quality[b] * wage[a] - quality[a] * wage[b]
  })
  let res = 1e9
  let totalq = 0.0
  const pq = new MaxPriorityQueue() // 最大优先队列
  
  for (let i = 0; i < k - 1; i++) {
    totalq += quality[h[i]]
    pq.enqueue(quality[h[i]])
  }
  for (let i = k - 1; i < n; i++) {
    let idx = h[i]
    totalq += quality[idx]
    pq.enqueue(quality[idx])
    const totalc = (wage[idx] / quality[idx]) * totalq
    res = Math.min(res, totalc)
    totalq -= pq.dequeue().element
  }
  return res
}
// @lc code=end
