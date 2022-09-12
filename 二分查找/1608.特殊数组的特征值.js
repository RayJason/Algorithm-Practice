/*
 * @lc app=leetcode.cn id=1608 lang=javascript
 *
 * [1608] 特殊数组的特征值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
 var specialArray = function(nums) {
  let l = 1, r = nums.length
  while(l <= r){ // 二分
      let mid = Math.floor((l + r) / 2)
      let cut = search(nums, mid) // 查找数量差
      if(cut === 0) return mid
      if(cut > 0){
          r = mid - 1
      }else{
          l = mid + 1
      }
  }
  return -1
};

/**
* @param {number[]} nums 
* @param {number} count 
* @return {number}
*/
function search(nums, count){
  return count - nums.reduce((cut, n) => n >= count ? ++cut : cut, 0)
}
// @lc code=end

const nums = [0,4,3,0,4]
console.log(specialArray(nums))
