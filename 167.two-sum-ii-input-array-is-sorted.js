/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let i = 0;
  let j = numbers.length - 1;
  while (i < j) {
    const sum = numbers[i] + numbers[j];
    if (sum === target) return [i + 1, j + 1];
    else if (sum < target) i++;
    else j--;
  }
};
// @lc code=end
