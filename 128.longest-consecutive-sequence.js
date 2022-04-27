/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const hashSet = new Set(nums);
  let longest = 0;
  for (const num of nums) {
    if (!hashSet.has(num - 1)) {
      longest = Math.max(longest, lenOfSeq(num, hashSet));
    }
  }
  return longest;
};

function lenOfSeq(num, set) {
  let flag = true;
  let runningLen = 1;
  while (flag) {
    if (set.has(num + runningLen)) runningLen++;
    else flag = false;
  }
  return runningLen;
}
// @lc code=end
