/* 
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

** Constraints:
board.length == 9
board[i].length == 9
board[i][j] is a digit 1-9 or '.'.

Example 1:
Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true

Example 2:
Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false

*/

function isValidSudoku(board: string[][]): boolean {
  // first solution
  /* 
    i represent the row, j represent the column
    validate the row first, and validate the column, then validate the square
    we can use a hashmap for validate the uniqueness
  */
  let isValid = true;
  // check the rows
  for (let i = 0; i < board.length; i++) {
    let cached: {
      [key: string]: boolean
    } = {};
    const row = board[i]; // also an array
    for (let j = 0; j < row.length; j++) {
      const num = row[j];
      if (cached[num] === undefined && num !== '.') {
        cached[num] = true;
      } else if (cached[num] && num){
        isValid = false;
        console.log('not unique in a row');
        return isValid;
      }
    }
  }
  // check the columns
  for (let j = 0; j < board.length; j++) {
    let cached: {
      [key: string]: boolean
    } = {};
    for (let i = 0; i < board.length; i++) {
      const num = board[i][j];
      if (cached[num] === undefined && num !== ".") {
        cached[num] = true;
      } else if (cached[num] && num){
        isValid = false;
        console.log('not unique in a column');
        return isValid;
      }
    }
  }
  // check the squares
  const squareCenter = [1, 4, 7];
  squareCenter.forEach((center) => {
    let cached: {
      [key: string]: boolean
    } = {};
    squareCenter.forEach((colCenter) => {
      let cached: {
        [key: string]: boolean
      } = {};

      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          let row = center + i;
          let column = colCenter + j;
          
          const num = board[row][column];
          if (cached[num] === undefined && num !== '.') {
            cached[num] = true;
          } else if (cached[num] && num){
            isValid = false;
            console.log('not unique in a square');
            return isValid;
          }
        }
      }
    })


  });
  return isValid;
  
  // the other solutions pretty much just changing the way
  // to validate number uniqueness in each row, column and sub-squares
};

export default isValidSudoku;