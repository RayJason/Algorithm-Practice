/*
 * @lc app=leetcode.cn id=657 lang=rust
 *
 * [657] 机器人能否返回原点
 */

// @lc code=start
impl Solution {
    pub fn judge_circle(moves: String) -> bool {
        let mut x = 0;
        let mut y = 0;
        for c in moves.chars() {
            match c {
                'U' => y += 1,
                'D' => y -= 1,
                'L' => x -= 1,
                'R' => x += 1,
                _ => (),
            }
        }
        x == 0 && y == 0
    }
}
// @lc code=end
