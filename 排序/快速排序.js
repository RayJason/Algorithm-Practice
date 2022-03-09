const arr = [5, 4, 6, 3, 2, 1]

/**
 * 快速排序
 * 以空间换时间
 * 设flag=arr[0]
 * 遍历数组，将大于flag的数放进BigArr[]，小于flag的数放进SmallArr[]
 * 递归遍历BigArr和SmallArr
 * 
 * 时间复杂度 O(n log 2 n) ~ O(n^2)
 * 空间复杂度 O(log 2 n) ~ O(n)
 * 
 * @param {Array} arr
 * @returns Array QuickSort(smallArr).concat(flag, QuickSort(bigArr))
 */
function QuickSort(arr) {
  if (arr.length <= 1) return arr

  let smallArr = [],
    bigArr = [],
    flag = arr[0]

  for (let i = 1; i < arr.length; i++) {
    arr[i] < arr[0] ? smallArr.push(arr[i]) : bigArr.push(arr[i])
  }

  console.log(smallArr, flag, bigArr)
  return QuickSort(smallArr).concat(flag, QuickSort(bigArr))
}

console.log(QuickSort(arr))
