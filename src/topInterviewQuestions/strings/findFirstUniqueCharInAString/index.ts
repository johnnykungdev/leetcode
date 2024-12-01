/*
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:

Input: s = "leetcode"

Output: 0

Explanation:

The character 'l' at index 0 is the first character that does not occur at any other index.

Example 2:

Input: s = "loveleetcode"

Output: 2

Example 3:

Input: s = "aabb"

Output: -1

Constraints:

1 <= s.length <= 10^5
s consists of only lowercase English letters.
*/

function firstUniqChar(s: string): number {
  // first solution
  // Time complexity: O(n)
  // Space Complexity: O(n)
  // const stringArr = s.split('');
  // let cachedMap: {
  //   [key: string]: number
  // } = {};
  // for (let i = 0; i < stringArr.length; i++) {
  //   const char = stringArr[i];
  //   if (cachedMap[char] === undefined) {
  //     cachedMap[char] = 1;
  //   } else {
  //     cachedMap[char] += 1;
  //   }
  // }

  // for (let i = 0; i < stringArr.length; i++) {
  //   const currentChar = stringArr[i];
  //   if (cachedMap[currentChar] === 1) {
  //     return i;
  //   }
  // }
  // return -1;

  // second solution
  // Use an fixed array to fill in
  const fixedArray: number[] = new Array(26).fill(0);
  for (let char of s) {
    const charOrder = char.charCodeAt(0) - 'a'.charCodeAt(0);
    fixedArray[charOrder] += 1;
  }

  for (let i = 0; i < s.length; i++) {
    const currentCharOrder = s.charCodeAt(i) - 'a'.charCodeAt(0);
    if (fixedArray[currentCharOrder] === 1) {
      return i;
    }
  }
  return -1;
};

export default firstUniqChar;