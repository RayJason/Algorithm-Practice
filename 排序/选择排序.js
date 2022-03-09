const arr = [6, 5, 4, 3, 2, 1]

/**
 * 选择排序
 * 每次遍历整个数组
 * 把arr[j]更小的数移动到前面arr[i]的位置
 * 第i趟后，arr[0]~arr[i]都是正序的
 * 
 * 时间复杂度 O(n(n+1)/2) O(n^2)
 * 空间复杂度 O(1)
 * 
 * @param {Array} arr
 * @returns arr
 */
function SelectSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        let tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
        console.log(arr)
      }
    }
  }
  return arr
}

console.log(SelectSort(arr))
