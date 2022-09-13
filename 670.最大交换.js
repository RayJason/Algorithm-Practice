/*
 * @lc app=leetcode.cn id=670 lang=javascript
 *
 * [670] 最大交换
 * 最优的交换一定需要满足 dj > dk
 * 在满足dj > dk时，应该保证索引k越大，使得数字val越大
 * 在同样大小的数字dk时，应使得数字dj越大从而使得val越大
 * 在同样大小的数字dj时，应使得索引j越小从而使得val越大
 * 
 * 先从右向左扫描数字数组，并记录当前已经扫描过的数字最大值的索引为 maxId ，且maxId靠近数字的右侧，此时说明 charArray[maxId] 为当前扫描过的最大值
 * 如果监测到当前数字 charArray[i] < charArray[maxId]，此时说明索引i的右侧数字最大值为charArray[maxId]，此时我们尝试将charArray[i] 与 charArray[maxId]进行交换，即可以得到一个比num更大的值。我们尝试记录当前可以交换的数对（i, maxId）。根据贪心算法，此时最左边的i构成的可交换的书对进行变换后形成的整数值最大。
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  const charArray = [...'' + num]
  const n = charArray.length
  let maxIdx = n - 1
  let idx1 = -1,
    idx2 = -1
  for (let i = n - 1; i >= 0; i--) {
    if (charArray[i] > charArray[maxIdx]) {
      maxIdx = i
    } else if (charArray[i] < charArray[maxIdx]) {
      idx1 = i
      idx2 = maxIdx
    }
  }
  if (idx1 >= 0) {
    swap(charArray, idx1, idx2)
    return parseInt(charArray.join(''))
  } else {
    return num
  }
}

const swap = (charArray, i, j) => {
  const temp = charArray[i]
  charArray[i] = charArray[j]
  charArray[j] = temp
}
// @lc code=end
