/*
 * @lc app=leetcode.cn id=709 lang=rust
 *
 * [709] 转换成小写字母
 */

// @lc code=start
impl Solution {
    pub fn to_lower_case(s: String) -> String {
        // s.chars()
        //     .map(|c| {
        //         if c >= 'A' && c <= 'Z' {
        //             (c as u8 + 32) as char
        //         } else {
        //             c
        //         }
        //     })
        //     .collect()
        s.to_lowercase()
    }
}
// @lc code=end

fn main() {
    let s: &str = "Hello";
    let result = Solution::to_lower_case(s);
    println!("{}", result);
}