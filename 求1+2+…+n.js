/**
 * @description 求1+2+...+n的合
 * 要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。
 * @author RayJason
 * @date 2021/09/25
 * @param {number} n
 * @return {number}
 */
var sumNums = (n) => {
  return n && n + sumNums(n - 1)
}

// 使用等差数列求和公式 Sn=n(a1+an)/2 Sn = n*a1 + n*(n-1)*d/2 不满足本题前提
var sequenceOfNumber = (a1,n,d) => {
  let an = (n - a1) / d + 1
  return (an * (a1 + n)) / 2
}

sequenceOfNumber(1,99,2)

console.log(sequenceOfNumber(99))
