/*
 * @lc app=leetcode.cn id=733 lang=javascript
 *
 * [733] 图像渲染
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = (image, sr, sc, newColor) => {
  const r = image.length, // 行数
    c = image[0].length // 列数

  const initColor = image[sr][sc] // 要修改的颜色

  const draw = (x, y) => {
    if (x >= 0 && x < c && y >= 0 && y < r && image[y][x] === initColor) {
      image[y][x] = newColor

      draw(x, y - 1)
      draw(x + 1, y)
      draw(x, y + 1)
      draw(x - 1, y)
    }
  }

  if (image[sr][sc] !== newColor) draw(sc, sr)

  return image
}
// @lc code=end

// local test
// const image = [[1,1,1],[1,1,0],[1,0,1]]
// const sr = 1,
//   sc = 1,
//   newColor = 2
// console.log(floodFill(image, sr, sc, newColor))
