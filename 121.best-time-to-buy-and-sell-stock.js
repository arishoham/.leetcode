/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = Infinity,
    max = 0;
  prices.forEach((price) => {
    min = Math.min(min, price);
    max = Math.max(max, price - min);
  });
  return max;
};
// @lc code=end

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
