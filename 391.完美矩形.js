/*
 * @lc app=leetcode.cn id=391 lang=javascript
 *
 * [391] 完美矩形
 */

// @lc code=start
/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function (rectangles) {
  // 面积解法
  let area = 0 // 总面积
  const points = new Set()
  let minX = Infinity
  let minY = Infinity
  let maxX = -Infinity
  let maxY = -Infinity

  rectangles.forEach(([x, y, a, b]) => {
    minX = Math.min(minX, x)
    minY = Math.min(minY, y)
    maxX = Math.max(maxX, a)
    maxY = Math.max(maxY, b)
    area += (a - x) * (b - y)
    ;[`${x}|${y}`, `${x}|${b}`, `${a}|${y}`, `${a}|${b}`].forEach((p) =>
      points.has(p) ? points.delete(p) : points.add(p)
    )
  })

  return (
    points.size === 4 &&
    (maxX - minX) * (maxY - minY) === area &&
    [
      `${maxX}|${minY}`,
      `${maxX}|${maxY}`,
      `${minX}|${minY}`,
      `${minX}|${maxY}`,
    ].every((p) => points.has(p))
  )
}
// @lc code=end
