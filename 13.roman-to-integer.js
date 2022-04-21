/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const dict = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  let result = 0;
  let i = 0;

  while (i < s.length) {
    if (dict[s.slice(i, i + 2)]) {
      result += dict[s.slice(i, i + 2)];
      i += 2;
    } else {
      result += dict[s[i]];
      i++;
    }
  }
  return result;
};
// @lc code=end
