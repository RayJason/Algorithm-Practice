/*
 * @lc app=leetcode.cn id=1518 lang=javascript
 *
 * [1518] 换酒问题
 */

// @lc code=start
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  let count = numBottles
  while (numBottles >= numExchange) {
    let newBottleCount = Math.floor(numBottles / numExchange)
    count += newBottleCount
    numBottles -=  newBottleCount * (numExchange - 1)
  }
  return count
}
// @lc code=end

// local test
const numBottles = 1, numExchange = 2
console.log(numWaterBottles(numBottles, numExchange))
