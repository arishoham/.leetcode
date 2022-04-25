/*
 * @lc app=leetcode id=326 lang=javascript
 *
 * [326] Power of Three
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
	let exponent = (Math.log(n) / Math.log(3)).toFixed(10);
	return (exponent % 1 === 0) ? true : false;
}

// @lc code=end
