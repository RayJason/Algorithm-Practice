/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  // 第n行m列元素通项公式为：C(n-1，m-1)=(n-1)!/[(m-1)!(n-m)!]
  // 一共有m列，m === rowIndex + 1
  // row[i] === row[m - i]
  // if (rowIndex === 0) return [1]
  // if (rowIndex === 1) return [1, 1]

  // const preRow = getRow(rowIndex - 1)

  // const thisRow = Array(rowIndex + 1).fill(1)
  // for (let i = 0; i <= Math.ceil(rowIndex / 2); i++) {
  //   if (i === 0) {
  //     thisRow[0] = preRow[i]
  //     thisRow[rowIndex] = thisRow[0]
  //   } else {
  //     thisRow[i] = preRow[i - 1] + preRow[i]
  //     thisRow[rowIndex - i] = thisRow[i]
  //   }
  // }
  // return thisRow

  // 公式优化
  let resultArr = [1]
  for (let i = 0; i < rowIndex; i++) {
    resultArr.unshift(0)
    const midIndex = Math.floor((i + 1) / 2)
    for (let j = 0; j < i + 1; j++) {
      if (j > midIndex) {
        resultArr[j] = resultArr[midIndex + ((i + 1) % 2) - (j - midIndex)]
        continue
      }
      resultArr[j] = resultArr[j] + resultArr[j + 1]
    }
  }
  return resultArr
}
// @lc code=end

// local test
console.log(getRow(3))
