const arr = [6, 5, 4, 3, 2, 1]

/**
 * 插入排序
 * 从末尾开始向前比对
 * 如果新元素更小就和对比的数交换位置
 * 
 * 时间复杂度 O(n)~O(n^2/2)
 * 空间复杂度 O(1)
 * 
 * @param {Array} arr
 * @returns arr
 */
function InsertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > -1 && arr[j] < arr[j - 1]; j--) {
      let tmp = arr[j]
      arr[j] = arr[j - 1]
      arr[j - 1] = tmp
      console.log(arr);
    }
  }
  return arr
}

console.log(InsertSort(arr));