/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 

Constraints:

-2^31 <= x <= 2^31 - 1
*/

function reverse(x: number): number {
  // first solution
  if (x <= Math.pow(2, 31) - 1 && x >= - Math.pow(2, 31)) {
    let isNegative = x < 0;
    let finalNumber = 0;
    let startNumber = Math.abs(x);

    while(startNumber >= 1) {
      const lastDigitInStartNumber = startNumber % 10;
      const digits = Math.floor(Math.log10(startNumber));
      console.log(lastDigitInStartNumber, digits);
      finalNumber += lastDigitInStartNumber * Math.pow(10, digits);
      startNumber = Math.floor(startNumber / 10);
    }
    if (isNegative) {
      finalNumber = - finalNumber
    }
    if (finalNumber > Math.pow(2, 31) - 1 || finalNumber < -Math.pow(2, 31)) {
      return 0;
    }
    return finalNumber;
  }
  return 0;
};

export default reverse;