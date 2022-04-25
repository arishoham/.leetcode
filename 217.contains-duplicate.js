/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function(nums) {
//     const set = new Set(nums)
//     return set.size !== nums.length
// };

var containsDuplicate = function (nums) {
  let testObj = {};
  for (let aNum of nums) {
    if (testObj[aNum]) return true;
    else testObj[aNum] = true;
  }
  return false;
};
// @lc code=end

console.log(containsDuplicate([1, 2, 3, 4]));
