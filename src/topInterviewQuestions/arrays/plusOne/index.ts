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
  // let result: number[] = [];
  // let shouldCarry = false;
  // let firstDigit = digits[digits.length - 1];
  // let firstDigitAfter = firstDigit + 1;
  // if (firstDigitAfter === 10) {
  //   result.push(0);
  //   shouldCarry = true;
  // } else {
  //   result.push(firstDigitAfter);
  // }

  // if (shouldCarry) {
  //   for (let i = digits.length - 2; i >= -1; i--) {
  //     const num = digits[i];
  //     if (shouldCarry && num === undefined) {
  //       result.push(1);
  //       shouldCarry = false;
  //     } else if (shouldCarry && num + 1 === 10) {
  //       result.push(0);
  //     } else if (shouldCarry) {
  //       result.push(num + 1);
  //       shouldCarry = false;
  //     } else if (num !== undefined) {
  //       result.push(num);
  //     }
  //   }
  // } else {
  //   const copiedDigits = [...digits];
  //   result = [...copiedDigits.slice(0, -1), firstDigitAfter];
  //   return result;
  // }

  // return result.reverse();

  //third solution
  //recursive
  const addOne = (index: number): number[] => {
    // Base case: if we go past the first digit, we need to add a new digit
    if (index < 0) return digits = [1, ...digits];
    
    // If the current digit is less than 9, we can simply increment it
    if (digits[index] < 9) {
        digits[index]++;
        return digits; // Return the updated digits
    }
    
    // If the current digit is 9, set it to 0 and carry over
    digits[index] = 0; 
    return addOne(index - 1); // Recur for the next digit
  };

  return addOne(digits.length - 1);
}

export default plusOne;