/**
 * @description 为 Array 对象添加一个去除重复项的方法
 * @author RayJason
 * @date 2021/04/17
 * @return {*} 
 */
// 传统方法 运行时间：1062ms 占用内存：77812KB
Array.prototype.uniq = function () {
  var arr = []
  var flag = true
  this.forEach(function (item) {
    // 排除 NaN (重要！！！)
    if (item != item) {
      flag && arr.indexOf(item) === -1 ? arr.push(item) : ''
      flag = false
    } else {
      arr.indexOf(item) === -1 ? arr.push(item) : ''
    }
  })
  return arr
}

// set方法 运行时间：980ms 占用内存：77900KB
Array.prototype.uniq = function () {
    return Array.from(new Set(this));
}

// ...set方法 运行时间：1055ms 占用内存：77856KB
Array.prototype.uniq = function () {
    return [...new Set(this)];
}