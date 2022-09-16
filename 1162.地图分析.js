/*
 * @lc app=leetcode.cn id=1162 lang=javascript
 *
 * [1162] 地图分析
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxDistance=function(grid){

  // 动态规划，dp[i][j]表示[i,j]为0时与最近1的最小距离
  // 由于grid最多100*100,因此下面INF足够大
  const Max_N=105;
  const INF=1000000;

  const dp=[];
  for(let i=0;i<Max_N;i++){
      dp.push([])
  }

  const len=grid.length;

  // 动态规划数组初始化，如果[i,j]为1则根据假设dp[i][j]=0
  // 否则先赋值最大距离
  for(let i=0;i<len;i++){
      for(let j=0;j<len;j++){
          dp[i][j]=grid[i][j]?0:INF;
      }
  }


  // 两次动态规划，先从左上方到[i,j]的最小距离
  for (let i = 0; i < len; ++i) {
      for (let j = 0; j < len; ++j) {
          if (grid[i][j]) continue;
          if (i - 1 >= 0) dp[i][j] = Math.min(dp[i][j], dp[i - 1][j] + 1);
          if (j - 1 >= 0) dp[i][j] = Math.min(dp[i][j], dp[i][j - 1] + 1);
      }
  }

  for (let i = len - 1; i >= 0; --i) {
      for (let j = len - 1; j >= 0; --j) {
          if (grid[i][j]) continue;
          if (i + 1 < len) dp[i][j] = Math.min(dp[i][j], dp[i + 1][j] + 1);
          if (j + 1 < len) dp[i][j] = Math.min(dp[i][j], dp[i][j + 1] + 1);
      }
  }

  
  let ans = -1;
  for (let i = 0; i < len; ++i) {
      for (let j = 0; j < len; ++j) {
          if (!grid[i][j]) {
              ans = Math.max(ans, dp[i][j]);
          }
      }
  }

  if (ans == INF) return -1;
  else return ans;
}
// @lc code=end

