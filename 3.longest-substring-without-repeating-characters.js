/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const map = new Map();
  let start = 0;
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) start = Math.max(start, map.get(s[i]) + 1);
    map.set(s[i], i);
    maxLen = Math.max(maxLen, i - start + 1);
  }

  return maxLen;
};
// @lc code=end