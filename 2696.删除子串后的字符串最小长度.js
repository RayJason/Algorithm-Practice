/*
 * @lc app=leetcode.cn id=2696 lang=javascript
 *
 * [2696] 删除子串后的字符串最小长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const minLength = function (s) {
  const hasAABBorCCDDorACDBorCABD = (ns) => {
    return (
      ns.includes("AABB") ||
      ns.includes("CCDD") ||
      ns.includes("ACDB") ||
      ns.includes("CABD")
    );
  };

  const hasABorCD = (ns) => {
    return ns.includes("AB") || ns.includes("CD");
  };

  if (!hasABorCD(s)) return s.length;

  let ns = s;
  while (hasAABBorCCDDorACDBorCABD(ns)) {
    ns = ns.replace(/AABB|CCDD|ACDB|CABD/g, "");
  }
  while (hasABorCD(ns)) {
    ns = ns.replace(/AB|CD/g, "");
  }
  return ns.length;
};
// @lc code=end

const s1 = "ABFCACDB";
const s2 = "ACBBD";

console.log(minLength(s1));
console.log(minLength(s2));
