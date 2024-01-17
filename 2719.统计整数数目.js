/*
 * @lc app=leetcode.cn id=2719 lang=javascript
 *
 * [2719] 统计整数数目
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @param {number} min_sum
 * @param {number} max_sum
 * @return {number}
 */
var count = function(num1, num2, min_sum, max_sum) {
  const N = 23, M = 401;
  const MOD = 1000000007;
  let d = new Array(N).fill(null).map(() => new Array(M).fill(-1));

  function dfs(num, i, j, limit) {
      if (j > max_sum) {
          return 0;
      }
      if (i === -1) {
          return j >= min_sum ? 1 : 0;
      }
      if (!limit && d[i][j] !== -1) {
          return d[i][j];
      }
      
      let res = 0;
      const up = limit ? num.charCodeAt(i) - '0'.charCodeAt(0) : 9;
      for (let x = 0; x <= up; x++) {
          res = (res + dfs(num, i - 1, j + x, limit && x === up)) % MOD;
      }

      if (!limit) {
          d[i][j] = res;
      }
      return res;
  }

  function get(num) {
      num = num.split("").reverse().join("");
      return dfs(num, num.length - 1, 0, true);
  }

  // 求解 num - 1，先把最后一个非 0 字符减去 1，再把后面的 0 字符变为 9
  function sub(num) {
      let i = num.length - 1;
      let arr = num.split("");
      while (arr[i] === '0') {
          i--;
      }
      arr[i] = String.fromCharCode(arr[i].charCodeAt(0) - 1);
      i++;
      while (i < num.length) {
          arr[i] = '9';
          i++;
      }
      return arr.join("");
  }

  return (get(num2) - get(sub(num1)) + MOD) % MOD;
};
// @lc code=end

