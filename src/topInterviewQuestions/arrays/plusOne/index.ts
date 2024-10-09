/* 
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.
The digits are ordered from most significant to least significant in left-to-right order.
The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
*/

function plusOne(digits: number[]): number[] {
  // basic solution
  // const string = digits.join('');
  // const num = BigInt(string);
  // const result = num + BigInt(1);
  // const resultString = `${result}`;
  // const resultArray = resultString.split('');
  // const numsArray = resultArray.map((n) => Number(n));
  // return numsArray;

  // second solution
  const result = [];
  let shouldCarry = false;
  let firstDigit = digits[digits.length - 1];
  let firstDigitAfter = firstDigit + 1;
  if (firstDigitAfter === 10) {
    result.push(0);
    shouldCarry = true;
  } else {
    result.push(firstDigitAfter);
  }

  for (let i = digits.length - 2; i >= -1; i--) {
    const num = digits[i];
    if (shouldCarry && num === undefined) {
      result.push(1);
      shouldCarry = false;
    } else if (shouldCarry && num + 1 === 10) {
      result.push(0);
    } else if (shouldCarry) {
      result.push(num + 1);
      shouldCarry = false;
    } else if (num !== undefined) {
      result.push(num);
    }
  }
  return result.reverse();
}

export default plusOne;