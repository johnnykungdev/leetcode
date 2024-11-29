/* 
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]



*/

/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  // first solution
  const n = s.length;
  for (let i = 0; i < n / 2; i++) {
    let temp = s[i];
    s[i] = s[n - 1 - i];
    s[n - 1 - i] = temp;
  }
};

export default reverseString;