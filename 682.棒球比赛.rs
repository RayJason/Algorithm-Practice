/*
 * @lc app=leetcode.cn id=682 lang=rust
 *
 * [682] 棒球比赛
 */

// @lc code=start
impl Solution {
    pub fn cal_points(operations: Vec<String>) -> i32 {
        let mut score = vec![];
        for s in operations {
            if s == "+" {
                score.push(score[score.len() - 1] + score[score.len() - 2]);
            } else if s == "C" {
                score.pop();
            } else if s == "D" {
                score.push(score[score.len() - 1] * 2);
            } else {
                score.push(s.parse().unwrap());
            }
        }
        score.iter().sum()
    }
}
// @lc code=end
