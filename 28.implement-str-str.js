/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// var strStr = function (haystack, needle) {
//   if (!needle.length) return 0;
//   if (!haystack.includes(needle)) return -1;
//   return haystack.split(`${needle}`)[0].length;
// };

var strStr = function (haystack, needle) {
  if (needle.length === 0) return 0;
  if (needle.length > haystack.length) return -1;

  let startIndex = 0,
    compareIndex = 0;
  while (startIndex < haystack.length && compareIndex < needle.length) {
    let char1 = haystack[startIndex + compareIndex];
    let char2 = needle[compareIndex];

    if (char1 === char2) {
      compareIndex++;
    } else {
      startIndex++;
      compareIndex = 0;
    }
  }

  return compareIndex == needle.length ? startIndex : -1;
};

// @lc code=end
