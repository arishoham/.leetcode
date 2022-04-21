/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  var zeroStartIdx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) nums[zeroStartIdx++] = nums[i];
  }
  return zeroStartIdx;
};
// @lc code=end
const test = [0, 1, 2, 2, 3, 0, 4, 2];
removeElement(test, 2);
console.log(test);
