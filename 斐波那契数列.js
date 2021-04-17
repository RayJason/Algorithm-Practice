/**
 * @description 用 JavaScript 实现斐波那契数列函数,返回第n个斐波那契数。 f(1) = 1, f(2) = 1 等
 * @author RayJason
 * @date 2021/04/17
 * @param {*} n
 * @return {*}
 */

// 动态规划 运行时间：973ms 占用内存：77884KB
function fibonacci(n) {
  let arr = []
  arr[0] = 1
  arr[1] = 1
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  //   console.log(arr)
  return arr[n - 1]
}

// 循环解法 不使用数组存储 运行时间：958ms 占用内存：77892KB
function fibonacci2(n) {
  var num1 = 1
  var num2 = 1
  for (var i = 2; i < n; i++) {
    num2 += num1
    num1 = num2 - num1
  }
  return num2
}

// 递归解法  运行时间：1209ms 占用内存：77840KB
function fibonacci3(n) {
  return n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci2(10))