/*
 * @lc app=leetcode id=532 lang=javascript
 *
 * [532] K-diff Pairs in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findPairs = function (nums, k) {
  if (nums.length === 0 || k < 0) return 0;
  let myMap = new Map(),
    count = 0;

  for (num of nums) myMap.set(num, myMap.get(num) + 1 || 1);

  //search solutions
  myMap.forEach((value, key) => {
    if (k === 0) {
      if (value > 1) count++;
    } else {
      if (myMap.has(key + k)) count++;
    }
  });

  return count;
};
// @lc code=end
