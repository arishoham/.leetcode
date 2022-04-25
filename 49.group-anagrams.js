/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let obj = {};
  for (let s of strs) {
    let letters = s.split("").sort().join("");
    obj[letters] ? obj[letters].push(s) : (obj[letters] = [s]);
  }
  return Object.values(obj);
};
// @lc code=end
