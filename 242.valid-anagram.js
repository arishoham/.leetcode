/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if(s.length !== t.length) return false;

  const count = {};
  for (const letter of s) {
    if (count[letter]) count[letter]++;
    else count[letter] = 1;
  }
  for (const letter of t) {
    if (count[letter] > 0) count[letter]--;
    else return false
  }
  return true;
};
// @lc code=end
