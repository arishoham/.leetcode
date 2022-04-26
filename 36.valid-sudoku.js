/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  if (board.length !== 9) return false;
  for (const row of board) {
    if (!isValidSet(row)) return false;
    if (row.length !== 9) return false;
  }

  for (let i = 0; i < board.length; i++) {
    const testColumn = [];
    for (let j = 0; j < board.length; j++) {
      testColumn.push(board[j][i]);
    }
    if (!isValidSet(testColumn)) return false;
  }

  for (let i = 0; i < board.length; i += 3) {
    for (let j = 0; j < board.length; j += 3) {
      const testSquare = [
        ...board[i].slice(j, j + 3),
        ...board[i + 1].slice(j, j + 3),
        ...board[i + 2].slice(j, j + 3),
      ];
      if (!isValidSet(testSquare)) return false;
    }
  }

  return true;
};

function isValidSet(arr) {
  const map = new Set();
  for (const el of arr) {
    if (el > 9 || el < 1 || map.has(el)) return false;
    if (el === ".") continue;
    map.add(el);
  }
  if (map.length > 9) return false;
  return true;
}
// @lc code=end