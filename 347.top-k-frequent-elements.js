/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = nums.reduce((acc, cur) => {
    acc[cur] = acc[cur] + 1 || 1;
    return acc;
  }, {});
  const topValues = Object.values(map)
    .sort((a, b) => b - a)
    .slice(0, k);

  return Object.keys(map)
    .filter((cur) => topValues.includes(map[cur]))
    .map((el) => Number(el));
};
// @lc code=end
