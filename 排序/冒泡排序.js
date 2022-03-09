const arr = [5, 4, 6, 3, 2, 1]

/**
 * 冒泡排序
 * 先把大的移动到最后
 * 小的自然就被换到前面了
 * 
 * 时间复杂度 O(n(n+1)/2) O(n^2)
 * O(1)
 * 
 * @param {Array} arr 
 * @returns 
 */
function BubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // 因为arr[j]与后一位的arr[j+1]对比
      // 所以j < arr.length - i - 1
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
        console.log(arr)
      }
    }
  }
  return arr
}

console.log(BubbleSorting(arr))
