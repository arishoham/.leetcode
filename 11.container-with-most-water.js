/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxArea = 0,
    i = 0,
    j = height.length - 1;
  while (i < j) {
    maxArea = Math.max(maxArea, Math.min(height[i], height[j]) * (j - i));
    height[i] < height[j] ? i++ : j--;
  }
  return maxArea;
};
// @lc code=end

// const height = [1,8,6,2,5,4,8,3,7];
// console.log(maxArea([1,8,6,2,5,4,8,3,7]))
