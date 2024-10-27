/*
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
DO NOT allocate another 2D matrix and do the rotation.

Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]

Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

n == matrix.length == matrix[i].length
1 <= n <= 20
-1000 <= matrix[i][j] <= 1000

[i][j] => i is row, j is column
[0][0] => [0][3]     [i][j] => [j][n - i -1]
[0][1] => [1][3]
[0][2] => [2][3]
[0][3] => [3][3]
[1][0] => [0][2]
[1][1] => [1][2]

*/

/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  // first solution
  // const n = matrix.length;
  // let tempArray: number[][] = Array.from(matrix, () => Array(n).fill(0));
  // for (let i = 0; i < matrix.length; i++) {
  //   for (let j = 0; j < matrix.length; j++) {
  //     tempArray[j][n - i - 1] = matrix[i][j];
  //   }
  // }

  // for (let i = 0; i < matrix.length; i++) {
  //   matrix[i] =  tempArray[i];
  // }

  //second solution
  // shift the square each time, there are (matrix.length / 2) squares
  // starting from the square outside, each layer starts from the top row
  const n = matrix.length;
  function findNextCorrespondSpot(i: number, j: number) {
    return { row: j, column: n - i - 1 };
  }

  for (let i = 0; i < (n/2); i++) {
    // const topRow = matrix[i];

    for (let startColumn = i; startColumn < n - i - 1; startColumn++) {
      // for each of the element, we shift it all around
      /* 
      [i][j] => i is row, j is column
        [0][0] => [0][3]     [i][j] => [j][n - i -1]
                             [j][n - i -1] => [n - i - 1][n - j - 1]
      */
      let tempRow, tempColumn;
      let originalRow = i, originalColumn = startColumn;
      tempRow = originalRow;
      tempColumn = originalColumn;
      let temp = matrix[tempRow][tempColumn];

      for (let times = 0; times < 4; times++) {
        let targetSpot = findNextCorrespondSpot(tempRow, tempColumn);
        let nextSpotValue = matrix[targetSpot.row][targetSpot.column];
        matrix[targetSpot.row][targetSpot.column] = temp;
        temp = nextSpotValue;
        tempRow = targetSpot.row;
        tempColumn = targetSpot.column;
      }
    }
  }


};

export default rotate;