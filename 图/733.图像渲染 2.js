/*
 * @lc app=leetcode.cn id=733 lang=javascript
 *
 * [733] 图像渲染
 * 2022.09.10
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const r = image.length // row 行数
  const c = image[0].length // column 列数

  const initColor = image[sr][sc] // 初始颜色

  const draw = (x, y) => {
    if (x >= 0 && x < c && y >= 0 && y < r && image[y][x] === initColor) {
      image[y][x] = color

      draw(x - 1, y)
      draw(x, y + 1)
      draw(x + 1, y)
      draw(x, y - 1)
    }
  }

  if (image[sr][sc] !== color) draw(sc, sr)
  return image
}
// @lc code=end

// local test
let image = [
    [0, 0, 0],
    [0, 0, 0],
  ],
  sr = 0,
  sc = 0,
  newColor = 2

console.log(floodFill(image, sr, sc, newColor))
