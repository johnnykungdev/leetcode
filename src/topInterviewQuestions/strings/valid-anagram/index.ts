/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

 

Constraints:

1 <= s.length, t.length <= 5 * 10^4
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/

function isAnagram(s: string, t: string): boolean {
  // first solution
  // basically if we convert this to arrays, then we are comparing the elements in the arrays
  // time: O(n), space: O(n)

  // const firstArray = s.split('').sort();
  // const secondArray = t.split('').sort();
  // if (firstArray.length === secondArray.length) {
  //   for (let i = 0; i < firstArray.length; i++) {
  //     const elementInFirstArr = firstArray[i];
  //     const elementInSecondArr = secondArray[i];

  //     if (elementInFirstArr !== elementInSecondArr) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }
  // return false;
  
  // second solution
  // fixed size array
  const fixedArray = Array(26).fill(0);

  s.split('').forEach((char) => {
    const charOrder = char.charCodeAt(0) - 'a'.charCodeAt(0);
    fixedArray[charOrder] += 1;
  });

  t.split('').forEach((char) => {
    const charOrder = char.charCodeAt(0) - 'a'.charCodeAt(0);
    fixedArray[charOrder] -= 1;
  });

  for (let i = 0; i < fixedArray.length; i++) {
    const count = fixedArray[i];
    if (count !== 0) {
      return false;
    }
  }
  return true;
};

export default isAnagram;