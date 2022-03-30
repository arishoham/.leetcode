/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  let size = strs.length;
  if (size === 0) return "";
  if (size === 1) return strs[0];
  
  strs.sort();

  // find the minimum length from first and last string
  let end = Math.min(strs[0].length, strs[size - 1].length);

  // find the common prefix between the first and last string
  let i = 0;
  while (i < end && strs[0][i] === strs[size - 1][i]) i++;

  let pre = strs[0].substring(0, i);
  return pre;
}
// @lc code=end
