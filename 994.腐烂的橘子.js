/*
 * @lc app=leetcode.cn id=994 lang=javascript
 *
 * [994] 腐烂的橘子
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const w = grid[0].length,
    h = grid.length

  let time = 0 // 感染次数

  let goodNumber = 0 // 好橘子数量
  let badQueue = [] // 坏橘子队列

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (grid[y][x] === 1) goodNumber++
      else if (grid[y][x] === 2) badQueue.push([x, y])
    }
  }

  // 当还有好橘子和坏橘子时执行
  while (goodNumber > 0 && badQueue.length > 0) {
    time++

    // 当前层坏橘子数量
    const currQueueLength = badQueue.length

    for (let badIndex = 0; badIndex < currQueueLength; badIndex++) {
      const badOra = badQueue.shift()
      let x = badOra[0],
        y = badOra[1]

      // 上
      if (y - 1 >= 0 && grid[y - 1][x] === 1) {
        grid[y - 1][x] = 2
        badQueue.push([x, y - 1])
        goodNumber--
      }

      // 右
      if (x + 1 < w && grid[y][x + 1] === 1) {
        grid[y][x + 1] = 2
        badQueue.push([x + 1, y])
        goodNumber--
      }

      // 下
      if (y + 1 < h && grid[y + 1][x] === 1) {
        grid[y + 1][x] = 2
        badQueue.push([x, y + 1])
        goodNumber--
      }

      // 左
      if (x - 1 >= 0 && grid[y][x - 1] === 1) {
        grid[y][x - 1] = 2
        badQueue.push([x - 1, y])
        goodNumber--
      }
    }
  }

  return goodNumber > 0 ? -1 : time
}
// @lc code=end

// local test
// const grid = [
//   [2, 1, 1],
//   [1, 1, 0],
//   [0, 1, 1],
// ]
// console.log(orangesRotting(grid))